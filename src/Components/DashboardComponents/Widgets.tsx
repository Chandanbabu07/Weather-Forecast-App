import { Box } from "@mui/material";
import React from "react";

const Widgets = () => {
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
      <Box
        sx={{
          width: {
            xs: "400px",
            sm: 300,
          },
          height: "120px",
          borderRadius: "20px",
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />
      <Box
        sx={{
          width: {
            xs: "400px",
            sm: 300,
          },
          height: "120px",
          borderRadius: "20px",
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />{" "}
      <Box
        sx={{
          width: {
            xs: "400px",
            sm: 300,
          },
          height: "120px",
          borderRadius: "20px",
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />{" "}
      <Box
        sx={{
          width: {
            xs: "400px",
            sm: 300,
          },
          height: "120px",
          borderRadius: "20px",
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />{" "}
      <Box
        sx={{
          width: {
            xs: "400px",
            sm: 300,
          },
          height: "120px",
          borderRadius: "20px",
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />{" "}
      <Box
        sx={{
          width: {
            xs: "400px",
            sm: 300,
          },
          height: "120px",
          borderRadius: "20px",
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />{" "}
    </Box>
  );
};

export default Widgets;
