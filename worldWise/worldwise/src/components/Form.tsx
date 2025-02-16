// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useId, useState } from "react";
import styles from "./Form.module.css";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { BackButton } from "./BackButton";
import { useUrlPosition } from "../customHooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContexts";

export function convertToEmoji(countryCode: any) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char: any) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState<any>(new Date());
  const [notes, setNotes] = useState("");
  const [mapLat, mapLng] = useUrlPosition();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [emoji, setEmoji] = useState("");
  const [geoError, setGeoError] = useState("");
  const {createCity, isLoading: isLoadingCity} = useCities();

  const navigate = useNavigate();

  if(!mapLat && !mapLng) {
    return <Message message="Start by clicking somewhere on the map" />
  }

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        setLoading(true)
        const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${mapLat}&longitude=${mapLng}`);
        const data = await res.json();
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName || data.countryCode);
        setEmoji(convertToEmoji(data.countryCode));

        if(!data.countryCode) {
          throw new Error(
            "This is not a country, click somewhere else"
          );
        }

      } catch (err) {
        if (err instanceof Error) {
          setGeoError(err.message);
        }
      } finally {
        setLoading(false)
      }
    }
    fetchGeoData();
    setGeoError("");
  }, [mapLng, mapLat])

  if(geoError) {
    return <Message message={geoError}/>
  }

  if (isLoading) {
    return <Spinner />
  }

  const handleSubmit = async (e: any) => {
     e.preventDefault();

     if(!cityName || !date) return;

     const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat: mapLat, lng: mapLng },
     };

     await createCity(newCity);
     navigate("/app")
  }

  return (
    <form className={`${styles.form} ${isLoadingCity ? styles.loading : ""}`} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker id="date" onChange={date => setDate(date)} selected={date} dateFormat="dd/MM/yyyy"/>
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button onClick={() => {}} type="primary">
          Add
        </Button>
       <BackButton />
      </div>
    </form>
  );
}

export default Form;
