import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export const Map = () => {
  const [serachParams, setSearchParams] = useSearchParams();

  const lat = serachParams.get("lat");
  const lng = serachParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <p>Map</p>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lng}</p>
    </div>
  );
};
