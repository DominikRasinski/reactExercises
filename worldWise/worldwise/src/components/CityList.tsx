import styles from "./CityList.module.css";
import { City } from "../App";
import Spinner from "./Spinner";
import { CityItem } from "./CityItem";
import Message from "./Message";

type CityListProps = {
  cities: City[];
  isLoading: boolean;
};

export const CityList = (props: CityListProps) => {
  const { cities } = props;

  if (props.isLoading) {
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
