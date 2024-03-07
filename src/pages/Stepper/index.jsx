import {
  Box,
  Button,
  Divider,
  // Grid,
  Paper,
  // Step,
  // StepLabel,
  // Stepper,
  Typography,
  // useTheme,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import Device from "./Device";
import Models from "./Models";
import Issues from "./Issues";
import Quote from "./Quote";
import BreadCumpView from "../../components/view/BreadCumpView";

const StepperPage = () => {
  // const theme = useTheme();

  // 0 = home, 1 = device, 2 = issue, 3 = location, 4 = quote
  const [activeStep, setActiveStep] = useState(0);

  const [breadCumbsList, setBreadCumbList] = useState([]);

  const [models, setModels] = useState([]);
  const [issues, setIssues] = useState([]);

  const [device, setDevice] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedIssue, setSelectedIssue] = useState([]);

  const [formData, setFormData] = useState({
    // platform: "",
    name: "",
    email: "",
    // message: "",
    phone: "",
  });

  const [error, setError] = useState(false);

  const onInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
    if (error) {
      setError(false);
    }
  };

  const changeStep = (val) => {
    setActiveStep(val);
  };

  const onBreadCumbListChange = (val = null) => {
    if (val) {
      const dummyList = [...breadCumbsList];
      dummyList.push({
        ...val,
      });
      setBreadCumbList(dummyList);
    }
  };

  const onBackClick = () => {
    const dummyList = [...breadCumbsList];
    dummyList.pop();
    setBreadCumbList(dummyList);

    if (activeStep === 1) {
      setModels([]);
      setSelectedModel("");
      setActiveStep((prev) => prev - 1);
      return;
    }
    if (activeStep === 2 && models.length === 0) {
      setIssues([]);
      setSelectedIssue([]);
      setActiveStep((prev) => prev - 2);
      return;
    }
    if (activeStep === 2 && models.length !== 0) {
      setIssues([]);
      setSelectedIssue([]);
      setActiveStep((prev) => prev - 1);
      return;
    }

    if (activeStep === 4) {
      setActiveStep((prev) => prev - 2);
      return;
    }
  };

  const printAll = () => {
    const obj = {
      formData,
      device,
      selectedModel,
      selectedIssue,
    };
    console.log(obj, "data");
  };

  const onSubmit = () => {
    setError(true);
    printAll();
  };

  return (
    <div className="flex_center_display">
      <Box
        className="main_outer_box_widget"
        sx={{
          maxWidth: "1100px",
          minWidth: "1100px",
          my: 2,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            p: 4,
            borderRadius: "20px",
          }}
        >
          <Taglines activeStep={activeStep} />
          <Box
            sx={{
              mt: 4,
            }}
          >
            <Box sx={{ mb: 2 }}>
              {activeStep === 0 && (
                <Device
                  onBreadCumbListChange={onBreadCumbListChange}
                  changeStep={changeStep}
                  device={device}
                  setDevice={setDevice}
                  setModels={setModels}
                  setIssues={setIssues}
                />
              )}

              {activeStep === 1 && models.length > 0 && (
                <Models
                  setSelectedModel={setSelectedModel}
                  models={models}
                  changeStep={changeStep}
                  selectedModel={selectedModel}
                  setIssues={setIssues}
                  onBreadCumbListChange={onBreadCumbListChange}
                />
              )}
              {activeStep === 2 && issues.length > 0 && (
                <Issues
                  changeStep={changeStep}
                  issues={issues}
                  selectedIssue={selectedIssue}
                  setSelectedIssue={setSelectedIssue}
                  onBreadCumbListChange={onBreadCumbListChange}
                />
              )}
              {activeStep === 4 && (
                <Quote
                  onSubmit={onSubmit}
                  onInputChange={onInputChange}
                  formData={formData}
                  error={error}
                  device={device}
                  selectedIssue={selectedIssue}
                />
              )}
            </Box>

            {breadCumbsList && breadCumbsList.length > 0 && (
              <Fragment>
                <Divider />
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: { xs: 2, md: 1 },
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Box>
                    <BreadCumpView list={breadCumbsList} />
                  </Box>
                  <Button
                    className="btn"
                    onClick={onBackClick}
                    variant="contained"
                    sx={{
                      width: { xs: "100%", md: "auto" },
                    }}
                  >
                    Back
                  </Button>
                </Box>
              </Fragment>
            )}
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

const Taglines = ({ activeStep }) => {
  return (
    <Fragment>
      <Typography align="center" sx={{ fontSize: 30, fontWeight: "bolder" }}>
        {activeStep === 0 && "Which device would you like to fix"}
        {activeStep === 1 && "Please select the modal"}
        {activeStep === 2 && "What's wrong with it?"}
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: 22,
        }}
      >
        {activeStep === 0 && "Select your device"}
        {/* {activeStep === 1 && `${device} > Select your device model`} */}
        {activeStep === 2 && `Things happen - we've seen it all.`}
      </Typography>
    </Fragment>
  );
};

export default StepperPage;
