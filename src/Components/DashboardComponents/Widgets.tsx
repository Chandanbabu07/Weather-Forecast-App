import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMyContext } from "../../Context";
import { useNavigate } from "react-router-dom";

interface WeatherCondition {
  main: string;
}

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

  const { setWeatherDetail, setWidgetColor, selectType } = useMyContext();

  const navigate = useNavigate();

  const handleRemoveWidget = (e: any, city: String) => {
    e.stopPropagation();

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

  const backgroundColors = [
    "#fff4ee", // Light peach
    "#eff6fe", // Very light blue
    "#f4f4f9", // Light grayish white
    "#fef9ef", // Light cream
    "#e8f5e9", // Light green
    "#fce4ec", // Light pink
  ];

  const handleWidgetClick = (item: any, bgColor: String) => {
    setWeatherDetail(item);
    setWidgetColor(bgColor);
    navigate("/details");
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
            const backgroundColor =
              backgroundColors[index % backgroundColors.length];
            const Fahrenheit = Math.round((item?.main?.temp * 9) / 5 + 32);
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
                  bgcolor: backgroundColor,
                  position: "relative",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "100px",
                  cursor: "pointer",
                }}
                onClick={() => handleWidgetClick(item, backgroundColor)}
              >
                <SvgIcon
                  component={DeleteIcon}
                  onClick={(e) => handleRemoveWidget(e, item?.name)}
                  sx={{
                    position: "absolute",
                    right: 10,
                    top: 10,
                    cursor: "pointer",
                    color: "grey",
                    "&:hover": {
                      color: "red",
                    },
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: 700 }}
                    gutterBottom
                  >
                    {item?.name}
                  </Typography>
                  <Typography variant="body1">
                    {item?.weather[0]?.main}{" "}
                  </Typography>
                </Box>

                <Box>
                  {selectType && selectType === "Celsius" ? (
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.7rem", fontWeight: 800 }}
                    >
                      {item?.main?.temp} °C
                    </Typography>
                  ) : (
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.7rem", fontWeight: 800 }}
                    >
                      {Fahrenheit} °F
                    </Typography>
                  )}
                </Box>
              </Box>
            );
          })}
      </Box>
  );
};

export default Widgets;
