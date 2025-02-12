import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import { CityItem } from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContexts";

export const CityList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return <Message message="No cities found" />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};
