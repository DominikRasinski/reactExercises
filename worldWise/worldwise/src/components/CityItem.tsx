import { City } from "../App";
import styles from "./CityItem.module.css";

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
  const { city } = props;
  return (
    <li className={styles.cityItem} key={city.id}>
      <span className={styles.emoji}>{city.emoji}</span>
      <h3 className={styles.name}>
        {city.cityName} - {city.country}
      </h3>
      <time className={styles.date}>{formatDate(city.date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
};
