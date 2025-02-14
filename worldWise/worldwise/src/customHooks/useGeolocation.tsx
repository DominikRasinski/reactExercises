import { useState } from "react";

type PositionType = {
  lat: number;
  lng: number;
}

type ErrorUnion = null | string;

type GeolocationProps = {
  defaultPosition?: PositionType;
}

export const useGeolocation = (props: GeolocationProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<ErrorUnion>(null);  
    const [position, setPosition] = useState<PositionType>({lat: 0, lng: 0});

    const {defaultPosition} = props;
    if (defaultPosition) {
      setPosition(defaultPosition);
    }

    function getPosition() {
      if (!navigator.geolocation) {
        return setError("Your browser does not support geolocation");
      }
  
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          });
          setIsLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
    }
  return {position, isLoading, error, getPosition}
}