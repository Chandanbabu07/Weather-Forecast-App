import React from "react";
import { Box } from "@mui/material";
import SearchWidgets from "./DashboardComponents/SearchWidgets";
import Widgets from "./DashboardComponents/Widgets";

const Dashboard = () => {
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
      <SearchWidgets></SearchWidgets>
      <Widgets></Widgets>
    </Box>
  );
};

export default Dashboard;
