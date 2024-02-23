import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Device = ({ changeStep }) => {
  return (
    <Box>
      <Typography align="center">Device will be here</Typography>
      <Button className="btn" onClick={() => changeStep(1)} variant="contained">
        Continue
      </Button>
    </Box>
  );
};

export default Device;
