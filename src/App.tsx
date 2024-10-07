import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import axios from "axios";
import { useMyContext } from "./Context";
import WidgetDetail from "./Components/DashboardComponents/WidgetDetail";

function App() {
  // const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const defaultCities = localStorage.getItem("defaultCities");

  if (!defaultCities) {
    localStorage.setItem(
      "defaultCities",
      JSON.stringify(["mysore", "Bengaluru", "mumbai", "australia", "new york"])
    );
  }

  const { weatherData, setWeatherData } = useMyContext();
  console.log("weatherData", weatherData);

  console.log(loading, error);

  const fetchWeatherDetails = async (cities: string[]) => {
    setLoading(true);
    setError(null);
    try {
      const weatherRequests = cities.map((city) =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5cbd321bec63832fc59bccdeb14e45a5&units=metric`
        )
      );
      const responses = await Promise.all(weatherRequests);
      const data = responses.map((response) => response.data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather details:", error);
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const parsedCities = defaultCities ? JSON.parse(defaultCities) : [];
    console.log("parsedCities", parsedCities);
    if (parsedCities.length > 0) fetchWeatherDetails(parsedCities);
  }, [defaultCities]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                weatherData={weatherData}
                fetchWeatherDetails={fetchWeatherDetails}
              />
            }
          />
          <Route path="/details" element={<WidgetDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
