import React from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import SearchWidgets from "./DashboardComponents/SearchWidgets";
import Widgets from "./DashboardComponents/Widgets";
import { useMyContext } from "../Context";

interface DashboardProps {
  weatherData: any;
  fetchWeatherDetails: any;
}

const Dashboard: React.FC<DashboardProps> = ({
  weatherData,
  fetchWeatherDetails,
}) => {
  const { selectType, setSelectType } = useMyContext();

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
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SearchWidgets fetchWeatherDetails={fetchWeatherDetails} />
      <Box>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled button group"
        >
          <Button
            style={{
              backgroundColor: selectType === "Celsius" ? "#00008B" : "",
            }}
            onClick={() => setSelectType("Celsius")}
          >
            Celsius
          </Button>
          <Button
            style={{
              backgroundColor:
                selectType === "Fahrenheit" ? "#00008B" : "",
            }}
            onClick={() => setSelectType("Fahrenheit")}
          >
            Fahrenheit
          </Button>
        </ButtonGroup>
      </Box>
      <Widgets
        weatherData={weatherData}
        fetchWeatherDetails={fetchWeatherDetails}
      />
    </Box>
  );
};

export default Dashboard;
