import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { City } from "../App";

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
}

function reducer(state: any, action: any) {
  switch(action.type) {
    case 'LOADING':
      return {
        ...state, isLoading: true
      }

    case 'CITIES_LOADED':
      return {
        ...state, isLoading: false, cities: action.payload
      }

    case 'CITY_LOADED':
      return {
        ...state, isLoading: false, currentCity: action.payload
      }
    
    case 'CITIES_CREATED':
      return {
        ...state, isLoading: false, cities: [...state.cities, action.payload],
        currentCity: action.payload,
      }

    case 'CITY_DELETED':
      return {
        ...state, isLoading: false, cities: state.cities.filter((city: any) => city.id !== action.payload), currentCity: {},
      }
    case "ERROR": 
      return {
        ...state, isLoading: false, error: action.payload,
      }
    default:
      throw new Error("Uknown command!")
  }
}


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
  const [{cities, isLoading, currentCity}, dispatch] = useReducer(reducer, initialState)

  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    async function fetchCities() {
      dispatch({type: "LOADING"}) 
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({type: "CITIES_LOADED", payload: data})
      } catch (error) {
        dispatch({type: "ERROR", payload: error})
      }
    }
    fetchCities();
  }, []);

  async function getCity(id: string) {
    if(Number(id) === currentCity.id) return;

    dispatch({type: "LOADING"}) 
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({type: "CITY_LOADED", payload: data})
    } catch (error) {
      dispatch({type: "ERROR", payload: error})
    }  
  }

  async function createCity(newCity: Omit<City, 'id'>) {
    dispatch({type: "LOADING"}) 

    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({type: "CITIES_CREATED", payload: data})

      console.log(data);  
    } catch (error){
      dispatch({type: "ERROR", payload: error})
    }
  }

  async function deleteCity(id: string) {
    try {
     await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      })

      dispatch({type: "CITY_DELETED", payload: id}) 

    } catch (error) {
      dispatch({type: "ERROR", payload: error})
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
