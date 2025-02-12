import { Marker, Popup } from "react-leaflet";

type MarkerMapProps = {
  position: [lat: number, lng: number];
  emoji: string;
  cityName: string;
};

export const MarkerMap = (props: MarkerMapProps) => {
  const { position, emoji, cityName } = props;

  return (
    <Marker position={[...position]}>
      <Popup>
        <span>{emoji}</span><span>{cityName}</span>
      </Popup>
    </Marker>
  );
};
