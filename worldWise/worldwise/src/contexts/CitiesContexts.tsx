import { createContext, useContext, useEffect, useState } from "react";
import { City } from "../App";

interface CitiesContextType {
  cities: City[];
  isLoading: boolean;
  currentCity: {
    cityName?: string;
    emoji?: string;
    date?: string;
    notes?: string;
    id?: string;
  };
  getCity: (id: string) => void;
  createCity: (newCity: Omit<City, 'id'>) => void;
  deleteCity: (id: string) => void;
}

const CitiesContext = createContext<CitiesContextType>({
  cities: [],
  isLoading: false,
  currentCity: {},
  getCity: () => {},
  createCity: () => {},
  deleteCity: () => {},
});

export function CitiesProvider({ children }: any) {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
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

  async function getCity(id: string) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity: Omit<City, 'id'>) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setCities(cities => [...cities, data])

      console.log(data);  
    } catch (err){
      alert(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id: string) {
    try {
     await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      })

      setCities((cities) => cities.filter((city) => city.id !== id))

    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity, createCity, deleteCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("Not here");
  return context;
}
