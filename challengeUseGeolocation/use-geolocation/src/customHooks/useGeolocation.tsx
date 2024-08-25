import { useState } from "react";

type ErrorUnion = null | string;
type PositionType = {
  lat: number;
  lng: number;
}

const useGeolocation = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [countClicks, setCountClicks] = useState(0);  
    const [position, setPosition] = useState<PositionType>({lat: 0, lng: 0});
    const [error, setError] = useState<ErrorUnion>(null);
    const { lat, lng } = position;

    function getPosition() {
      setCountClicks((count) => count + 1);
  
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
  
}