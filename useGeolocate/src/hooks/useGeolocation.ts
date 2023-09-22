import { useState } from "react";
import { IPosition } from "../interfaces/position";

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [countClicks, setCountClicks] = useState(0);
  const [position, setPosition] = useState<IPosition>();
  const [error, setError] = useState<string>();

  const { lat, lng } = position || {};

  function getPosition() {
    setCountClicks((count) => count + 1);

    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return {
    isLoading,
    countClicks,
    lat,
    lng,
    error,
    getPosition,
  };
}
