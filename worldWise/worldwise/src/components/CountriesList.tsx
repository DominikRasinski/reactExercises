import styles from "./CountryList.module.css";
import { City } from "../App";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

type CountriesListProps = {
  cities: City[];
  isLoading: boolean;
};

export const CountriesList = (props: CountriesListProps) => {
  const { cities } = props;

  const countryList = cities.reduce<{ country: string; emoji: string }[]>(
    (arr, city) => {
      if (!arr.map((el) => el.country).includes(city.country)) {
        return [...arr, { country: city.country, emoji: city.emoji }];
      }
      return arr;
    },
    []
  );

  if (props.isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return <Message message="No cities found" />;
  }
  return (
    <ul className={styles.countryList}>
      {countryList.map((city) => (
        <CountryItem
          country={city.country}
          emoji={city.emoji}
          key={city.country}
        />
      ))}
    </ul>
  );
};
