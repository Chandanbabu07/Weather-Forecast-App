import React from "react";
import { Box } from "@mui/material";
import SearchWidgets from "./DashboardComponents/SearchWidgets";
import Widgets from "./DashboardComponents/Widgets";

interface DashboardProps {
  weatherData: any;
  fetchWeatherDetails: any;
}

const Dashboard: React.FC<DashboardProps> = ({
  weatherData,
  fetchWeatherDetails,
}) => {
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
        marginTop: "100px",
        gap: "30px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <SearchWidgets fetchWeatherDetails={fetchWeatherDetails} />
      <Widgets
        weatherData={weatherData}
        fetchWeatherDetails={fetchWeatherDetails}
      />
    </Box>
  );
};

export default Dashboard;
