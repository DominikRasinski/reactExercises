import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContexts";

export const CountriesList = () => {
  const { cities, isLoading } = useCities();

  const countryList = cities.reduce<{ country: string; emoji: string }[]>(
    (arr, city) => {
      if (!arr.map((el) => el.country).includes(city.country)) {
        return [...arr, { country: city.country, emoji: city.emoji }];
      }
      return arr;
    },
    []
  );

  if (isLoading) {
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
