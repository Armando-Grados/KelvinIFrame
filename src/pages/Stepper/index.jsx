import {
  Box,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import Device from "./Device";
import Models from "./Models";
import Issues from "./Issues";

const steps = ["Device", "Model", "Issue", "Location", "Quote"];

const StepperPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const changeStep = (val) => {
    setActiveStep(val);
  };

  return (
    <div className="flex_center_display">
      <Box
        sx={{
          maxWidth: "1000px",
          minWidth: "900px",
          my: 2,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            p: 2,
          }}
        >
          <Taglines />
          <Box
            sx={{
              my: 4,
            }}
          >
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          <Box>
            {activeStep === 0 && <Device changeStep={changeStep} />}
            {activeStep === 1 && <Models changeStep={changeStep} />}
            {activeStep === 2 && <Issues changeStep={changeStep} />}
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

const Taglines = () => {
  return (
    <Fragment>
      <Typography align="center" sx={{ fontSize: 30, fontWeight: "bolder" }}>
        Get Instant Price Quote
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: 20,
        }}
      >
        Select your repair issues
      </Typography>
    </Fragment>
  );
};

export default StepperPage;
