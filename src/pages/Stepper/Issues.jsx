import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Issues = ({ changeStep }) => {
  return (
    <Box>
      <Typography align="center">Issues</Typography>
      <Button className="btn" onClick={() => changeStep(1)} variant="contained">
        Back
      </Button>
    </Box>
  );
};

export default Issues;
