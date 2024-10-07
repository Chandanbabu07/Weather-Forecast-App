import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { useMyContext } from "../../Context";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const WidgetDetail = () => {
  const { weatherDetail, widgetColor } = useMyContext();

  console.log("weatherDetail", weatherDetail, widgetColor);

  const handleBack = () => {
    window.location.href = "/dashboard";
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "95%", sm: "90%", md: "80%" },
        height: "auto",
        borderRadius: 1,
        bgcolor: widgetColor,
        margin: "auto",
        padding: { xs: 2, sm: 3, md: 5 },
        marginTop: { xs: "10px", sm: "20px" },
        gap: { xs: "15px", sm: "30px" },
      }}
    >
      <SvgIcon
        component={ArrowBackIcon}
        onClick={() => handleBack()}
        sx={{
          right: 10,
          top: 10,
          cursor: "pointer",
          color: "grey",
          "&:hover": {
            color: "black",
          },
        }}
      />

      <Typography variant="h5" sx={{ fontWeight: 800 }}>
        {weatherDetail.name}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "15px", sm: "30px" },
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "210px" },
            height: "120px",
            borderRadius: "20px",
            bgcolor: "white",
            position: "relative",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid grey",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Temperature
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            {weatherDetail.main.temp}
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "90%", sm: "210px" },
            height: "120px",
            borderRadius: "20px",
            bgcolor: "white",
            position: "relative",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid grey",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Humidity
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            {weatherDetail.main.humidity}
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "90%", sm: "210px" },
            height: "120px",
            borderRadius: "20px",
            bgcolor: "white",
            position: "relative",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid grey",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Ground Level
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            {weatherDetail.main.grnd_level}
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "90%", sm: "210px" },
            height: "120px",
            borderRadius: "20px",
            bgcolor: "white",
            position: "relative",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid grey",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Sea Level
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            {weatherDetail.main.sea_level}
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "90%", sm: "210px" },
            height: "120px",
            borderRadius: "20px",
            bgcolor: "white",
            position: "relative",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid grey",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Type
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            {weatherDetail.weather[0].main}
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "90%", sm: "210px" },
            height: "120px",
            borderRadius: "20px",
            bgcolor: "white",
            position: "relative",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid grey",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Wind Speed
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            {weatherDetail.wind.speed}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WidgetDetail;
