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

//******** quote */

// {
//   <textarea
//   rows={4}
//   // value={formData.msg}
//   // onChange={(e) => onInputChange("msg", e.target.value)}
//   style={{
//     width: "100%",
//     padding: "12px",
//     fontSize: "16px",
//     // border: "#000000de",
//     borderRadius: "6px",
//     marginTop: "14px",
//   }}
//   placeholder="Message (optional)"
// />
// }

// {
//   <FormControl size="small">
//     <RadioGroup
//       error={error && formData.platform.trim().length === 0}
//       row
//       aria-labelledby="quote_platform"
//       name="platform"
//       value={formData.platform}
//       onChange={(e) => onInputChange("platform", e.target.value)}
//     >
//       <FormControlLabel
//         value="SMS"
//         control={<Radio />}
//         label="SMS text (Instant)"
//       />
//       <FormControlLabel
//         value="Email"
//         control={<Radio />}
//         label="Email (Instant)"
//       />
//       <FormControlLabel
//         value="Phone"
//         control={<Radio />}
//         label="Phone call"
//       />
//     </RadioGroup>
//   </FormControl>
// }
//  <Grid xs={3.5} item>
//                 <Typography sx={{ fontWeight: "bold" }}>Warranty: </Typography>
//               </Grid>
//               <Grid xs={8.5} item>
//                 <Typography>Life-time warranty</Typography>
//               </Grid>

// ***** issues */
// <Grid container spacing={5}>
//   {issues.map((elem) => (
//     <Grid item xs={12} md={3} key={elem.id}>
//       <Box
//         sx={{
//           width: "100%",
//           height: "100%",
//           minHeight: "250px",
//           position: "relative",
//         }}
//         className={`flex_center_display card_hover_color ${
//           selectedIssue.some((e) => e.lebel === elem.lebel) &&
//           "card_active_class"
//         }`}
//         onClick={() => onItemClick(elem.id)}
//       >
//         <Box sx={{ p: 2 }}>
//           <Box className="flex_center_display">
//             <img src={elem.img_src} alt="img" className="cust_issue_img" />
//           </Box>
//           <Typography
//             align="center"
//             sx={{
//               mt: 1,
//               fontSize: "20px",
//             }}
//           >
//             {elem.lebel}
//           </Typography>
//           {selectedIssue.some((e) => e.lebel === elem.lebel) && (
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: "5%",
//                 left: "5%",
//               }}
//             >
//               <AddTaskIcon
//                 // sx={{ color: "green" }}
//                 color="primary"
//                 // fontSize="medium"
//               />
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </Grid>
//   ))}
// </Grid>;
//  const onItemClick = (id) => {
//    const item = issues.find((e) => e.id === id);
//    if (item) {
//      // console.log(item);
//      const dummyArr = [...selectedIssue];
//      const dummyIndex = dummyArr.findIndex((e) => e.id === item.id);
//      if (dummyIndex >= 0) {
//        // item exist so need to remove
//        dummyArr.splice(dummyIndex, 1);
//        setSelectedIssue(dummyArr);
//      } else {
//        dummyArr.push({
//          ...item,
//        });
//      }
//      setSelectedIssue(dummyArr);
//    }
//  };
