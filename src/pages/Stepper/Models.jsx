import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Models = ({ changeStep }) => {
  return (
    <Box>
      <Typography align="center">Models will be here</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          className="btn"
          onClick={() => changeStep(0)}
          variant="contained"
        >
          Back
        </Button>
        <Button
          className="btn"
          onClick={() => changeStep(2)}
          variant="contained"
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default Models;
