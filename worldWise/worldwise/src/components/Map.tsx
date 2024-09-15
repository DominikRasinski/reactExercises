import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

export const Map = () => {
  const navigate = useNavigate();
  const [serachParams, setSearchParams] = useSearchParams();

  const lat = serachParams.get("lat");
  const lng = serachParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <p>Map</p>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lng}</p>
    </div>
  );
};
