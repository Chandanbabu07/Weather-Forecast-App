import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface DashboardProps {
  fetchWeatherDetails: any;
}

const SearchWidgets: React.FC<DashboardProps> = ({ fetchWeatherDetails }) => {
  const [searchedCity, setSearchedCity] = useState<string>("");
  console.log("searchedCity");
  const handleSearch = () => {
    const defaultCities = localStorage.getItem("defaultCities");
    const city = searchedCity?.toLowerCase();
    let citiesArray;

    if (defaultCities) {
      citiesArray = JSON.parse(defaultCities);
    } else {
      citiesArray = [];
    }

    if (!citiesArray.includes(city)) {
      citiesArray.unshift(city);
    } else {
      alert("Already Exist");
    }

    localStorage.setItem("defaultCities", JSON.stringify(citiesArray));

    const Cities = localStorage.getItem("defaultCities");
    console.log("Cities", Cities);

    const parsedCities = Cities ? JSON.parse(Cities) : [];
    setSearchedCity("");
    fetchWeatherDetails(parsedCities);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          flexDirection: { xs: "row", sm: "row" },
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "grey",
          borderRadius: "20px",
          width: {
            xs: "400px",
            sm: "500px",
          },
        }}
      >
        <TextField
          label="Search City"
          sx={{
            width: {
              xs: "100%",
              sm: "500px",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "black",
              "&.Mui-focused": {
                color: "white",
              },
            },
          }}
          InputProps={{
            sx: {
              "& fieldset": {
                border: "none",
              },
            },
          }}
          onChange={(e) => setSearchedCity(e.target.value)}
          value={searchedCity}
          onKeyDown={handleKeyPress}
        />

        <Button onClick={() => handleSearch()}>
          <SearchIcon style={{ color: "black" }} />
        </Button>
      </Box>
    </div>
  );
};

export default SearchWidgets;
