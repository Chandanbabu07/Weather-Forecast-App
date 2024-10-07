import React from "react";
import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchWidgets = () => {
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
        />

        <Button>
          <SearchIcon style={{ color: "black" }} />
        </Button>
      </Box>
    </div>
  );
};

export default SearchWidgets;
