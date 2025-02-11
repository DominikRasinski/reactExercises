import { Link } from "react-router-dom";
import { City } from "../App";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContexts";

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
  const {currentCity} = useCities();
  const { city } = props;

  const { position } = city;

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
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};
