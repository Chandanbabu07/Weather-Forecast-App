import { Box, Button, Typography } from "@mui/material";
import React from "react";

// Define the structure of a weather object inside the weather array
interface WeatherCondition {
  main: string; // For weather condition like "Cloudy", "Sunny"
}

// Define the structure of the weather data
interface WeatherItem {
  temp: number;
  condition: string;
  name: string;
  weather: WeatherCondition[]; // Array of WeatherCondition objects
  main: any;
}

interface DashboardProps {
  weatherData: WeatherItem[];
  fetchWeatherDetails: any;
}

const Widgets: React.FC<DashboardProps> = ({
  weatherData,
  fetchWeatherDetails,
}) => {
  console.log("weatherData", weatherData);

  const handleRemoveWidget = (city: String) => {
    const defaultCities = localStorage.getItem("defaultCities");
    let updatedCities: string[] = [];

    if (defaultCities) {
      updatedCities = JSON.parse(defaultCities);
    }

    updatedCities = updatedCities.filter(
      (item: string) => item !== city.toLowerCase()
    );

    localStorage.setItem("defaultCities", JSON.stringify(updatedCities));

    fetchWeatherDetails(updatedCities);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "90%",
        height: "auto",
        borderRadius: 1,
        bgcolor: "#000000",
        margin: "auto",
        padding: 2,
        marginTop: {
          xs: "10px",
          sm: "20px",
        },
        gap: { xs: "15px", sm: "30px" },
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {weatherData &&
        weatherData.map((item: WeatherItem, index: number) => {
          console.log("item", item);
          return (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "400px",
                  sm: 300,
                },
                height: "120px",
                borderRadius: "20px",
                bgcolor: "white",
              }}
            >
              <Button
                variant="contained"
                onClick={() => handleRemoveWidget(item?.name)}
              >
                Remove
              </Button>
              <Typography variant="h6" gutterBottom>
                {item?.name}
              </Typography>
              <Typography variant="body1">{item?.weather[0]?.main} </Typography>
              <Typography variant="body1">{item?.main?.temp}</Typography>
            </Box>
          );
        })}
    </Box>
  );
};

export default Widgets;
