import React from "react";
import { Button } from "@mui/material";

const Home = () => {
  const handleDashboardNavigation = () => [
    (window.location.href = "/dashboard"),
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000000",
      }}
    >
      <Button
        variant="contained"
        disableElevation
        onClick={() => handleDashboardNavigation()}
      >
        Welcome Recruiter
      </Button>
    </div>
  );
};

export default Home;
