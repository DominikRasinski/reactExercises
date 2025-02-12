import { useSearchParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MarkerMap } from "./MarkerMap";
import styles from "./Map.module.css";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContexts";

export const Map = () => {
  const navigate = useNavigate();
  const {cities} = useCities(); 
  const [mapPosition, setMapPosition] = useState<[number, number]>([40,0]);
  const [searchParams, setSearchParams] = useSearchParams();

  const mapLat = Number(searchParams.get("lat"));
  const mapLng = Number(searchParams.get("lng "));

  return (
    <div
      className={styles.mapContainer}
    >
      <MapContainer center={[mapLat, mapLng]} zoom={13} scrollWheelZoom={true} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <MarkerMap emoji={city.emoji} cityName={city.cityName} position={[city.position.lat, city.position.lng]} key={city.id}/>
        ))}
      </MapContainer>
    </div>
  );
};
