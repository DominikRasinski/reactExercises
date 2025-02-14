import { useSearchParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent, useMapEvents } from "react-leaflet";
import { MarkerMap } from "./MarkerMap";
import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContexts";
import { LatLngExpression } from "leaflet";
import { useGeolocation } from "../customHooks/useGeolocation";
import { Button } from "./Button";

export const Map = () => {
  const {cities} = useCities(); 
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    position: geoLocationPosition,
    isLoading: geoLocationLoading,
    getPosition,
  } = useGeolocation({ defaultPosition: undefined });
  const mapLat = Number(searchParams.get("lat"));
  const mapLng = Number(searchParams.get("lng"));

  const [mapPosition, setMapPosition] = useState<[number, number]>([0,40]);

  useEffect(() => {
    if(mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng])

  console.log(geoLocationPosition.lat);

  useEffect(() => {
    if(geoLocationPosition) {
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng])
    }
  }, [geoLocationPosition])

  return (
    <div
      className={styles.mapContainer}
    >
      <Button type="position" onClick={getPosition}>
        {geoLocationLoading ? "Loading..." : "Use your position"}
      </Button>
      <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <MarkerMap emoji={city.emoji} cityName={city.cityName} position={[city.position.lat, city.position.lng]} key={city.id}/>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

const ChangeCenter = ({ position }: { position: LatLngExpression }) => {
  const map = useMap()
  map.setView(position);
  return null;
}

const DetectClick = () => {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`), 
  })
  return null;
}