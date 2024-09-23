import { createContext, useContext, useEffect, useState } from "react";
import { City } from "../App";

interface CitiesContextType {
  cities: City[];
  isLoading: boolean;
}

const CitiesContext = createContext<CitiesContextType>({
  cities: [],
  isLoading: false,
});

export function CitiesProvider({ children }: any) {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        setCities(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("Not here");
  return context;
}
