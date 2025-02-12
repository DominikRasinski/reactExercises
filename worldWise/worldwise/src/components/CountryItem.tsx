import styles from "./CountryItem.module.css";

type CountryItemProps = {
  emoji: string;
  country: string;
};

function CountryItem(props: CountryItemProps) {
  const { country, emoji } = props;

  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{country}</span>
    </li>
  );
}

export default CountryItem;
