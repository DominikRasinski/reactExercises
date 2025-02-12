import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { Product } from "./pages/Product";
import { Pricing } from "./pages/Pricing";
import { PageNotFound } from "./pages/PageNotFound";
import { AppLayout } from "./pages/AppLayout";
import Login from "./pages/Login";
import { CityList } from "./components/CityList";
import { CountriesList } from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContexts";

export type City = {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: string;
};

export function App() {
  return (
    <BrowserRouter>
      <CitiesProvider>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="countries" element={<p>List of countries</p>} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </CitiesProvider>
    </BrowserRouter>
  );
}
