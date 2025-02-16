import { Link } from "react-router-dom";
import { City } from "../App";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContexts";
import { circle } from "leaflet";

interface CityItemProps {
  city: City;
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export const CityItem = (props: CityItemProps) => {
  const {currentCity, deleteCity} = useCities();
  const { city } = props;

  const { position } = city;

  const handleRemove = (e: any) => {
    e.preventDefault();
    deleteCity(city.id)
  }

  return (
    <li key={city.id}>
      <Link
        className={`${styles.cityItem} ${city.id === currentCity.id ? styles ["cityItem--active"] : ""}`}
        to={`${city.id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>
          {city.cityName} - {city.country}
        </h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deleteBtn} onClick={(e) => handleRemove(e)}>&times;</button>
      </Link>
    </li>
  );
};
