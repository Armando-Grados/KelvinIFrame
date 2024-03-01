// import {
//   Box,
//   Grid,
//   Paper,
//   Step,
//   StepLabel,
//   Stepper,
//   Typography,
//   // useTheme,
// } from "@mui/material";
// import React, { Fragment, useState } from "react";
// import Device from "./Device";
// import Models from "./Models";
// import Issues from "./Issues";
// import Quote from "./Quote";

// const steps = ["Device", "Model", "Issue", "Location", "Quote"];

// const StepperPage = () => {
//   // const theme = useTheme();

//   const [activeStep, setActiveStep] = useState(0);

//   const [models, setModels] = useState([]);
//   const [issues, setIssues] = useState([]);

//   const [device, setDevice] = useState("");
//   const [selectedModel, setSelectedModel] = useState("");
//   const [selectedIssue, setSelectedIssue] = useState([]);

//   const [formData, setFormData] = useState({
//     platform: "",
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//   });

//   const [error, setError] = useState(false);

//   const onInputChange = (key, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//     if (error) {
//       setError(false);
//     }
//   };

//   const changeStep = (val) => {
//     setActiveStep(val);
//   };

//   const printAll = () => {
//     const obj = {
//       formData,
//       device,
//       selectedModel,
//       selectedIssue,
//     };
//     console.log(obj, "data");
//   };

//   const onSubmit = () => {
//     setError(true);
//     printAll();
//   };

//   return (
//     <div className="flex_center_display">
//       <Box
//         className="main_outer_box_widget"
//         sx={{
//           maxWidth: "1100px",
//           minWidth: "1100px",
//           my: 2,
//         }}
//       >
//         <Paper
//           elevation={2}
//           sx={{
//             p: 2,
//             borderRadius: "20px",
//           }}
//         >
//           <Taglines activeStep={activeStep} device={device} />
//           <Box
//             sx={{
//               my: 4,
//             }}
//           >
//             <Grid container spacing={3}>
//               <Grid
//                 item
//                 xs={12}
//                 md={1.5}
//                 className="stepper_grid_widget_big_screen"
//               >
//                 <Stepper
//                   className="steppr_class_custom"
//                   activeStep={activeStep}
//                   orientation="vertical"
//                 >
//                   {steps.map((label) => (
//                     <Step key={label}>
//                       <StepLabel>
//                         <Typography color="primary">{label}</Typography>
//                       </StepLabel>
//                     </Step>
//                   ))}
//                 </Stepper>
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 md={1.5}
//                 className="stepper_grid_widget_small_screen"
//               >
//                 <Stepper activeStep={activeStep} alternativeLabel>
//                   {steps.map((label) => (
//                     <Step key={label}>
//                       <StepLabel>
//                         <Typography color="primary">{label}</Typography>
//                       </StepLabel>
//                     </Step>
//                   ))}
//                 </Stepper>
//               </Grid>
//               <Grid item md={10.5} xs={12}>
//                 <Box>
//                   {activeStep === 0 && (
//                     <Device
//                       changeStep={changeStep}
//                       device={device}
//                       setDevice={setDevice}
//                       setModels={setModels}
//                     />
//                   )}
//                   {activeStep === 1 && models.length > 0 && (
//                     <Models
//                       setSelectedModel={setSelectedModel}
//                       models={models}
//                       changeStep={changeStep}
//                       selectedModel={selectedModel}
//                       setIssues={setIssues}
//                     />
//                   )}
//                   {activeStep === 2 && issues.length > 0 && (
//                     <Issues
//                       changeStep={changeStep}
//                       issues={issues}
//                       selectedIssue={selectedIssue}
//                       setSelectedIssue={setSelectedIssue}
//                     />
//                   )}
//                   {activeStep === 4 && (
//                     <Quote
//                       changeStep={changeStep}
//                       onSubmit={onSubmit}
//                       onInputChange={onInputChange}
//                       formData={formData}
//                       error={error}
//                       device={device}
//                       selectedIssue={selectedIssue}
//                     />
//                   )}
//                 </Box>
//               </Grid>
//             </Grid>
//           </Box>
//         </Paper>
//       </Box>
//     </div>
//   );
// };

// const Taglines = ({ activeStep, device }) => {
//   return (
//     <Fragment>
//       <Typography align="center" sx={{ fontSize: 30, fontWeight: "bolder" }}>
//         Let us take care of you
//       </Typography>
//       <Typography
//         align="center"
//         sx={{
//           fontSize: 22,
//         }}
//       >
//         {activeStep === 0 && "Select your device"}
//         {activeStep === 1 && `${device} > Select your device model`}
//         {activeStep === 2 && `Select your repair issues`}
//       </Typography>
//     </Fragment>
//   );
// };

// export default StepperPage;
