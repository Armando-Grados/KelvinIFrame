import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const Models = ({
  changeStep,
  models,
  selectedModel,
  setSelectedModel,
  setIssues,
}) => {
  const theme = useTheme();

  const onItemClick = (id) => {
    const item = models.find((e) => e.id === id);
    if (item) {
      setSelectedModel(item.lebel);
      setIssues(item.issues);
      onContinue();
    }
  };

  const onContinue = () => {
    changeStep(2);
  };

  const onBack = () => {
    setSelectedModel("");
    changeStep(0);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {models.map((elem) => (
          <Grid item xs={12} md={3} key={elem.id}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                minHeight: "250px",
                cursor: "pointer",
                borderRadius: "30px",
                background: "#fff",
                boxShadow: "6px 6px 10px rgba(0,0,0,.038)",
                transition: "all 0.5 ease-out",
                border:
                  selectedModel === elem.lebel
                    ? `2px solid ${theme.palette.primary.main} !important`
                    : "",
                "&:hover": {
                  transition: "all 0.5 ease-out",
                  border: `2px solid ${theme.palette.primary.main} !important`,
                },
              }}
              className="flex_center_display"
              onClick={() => onItemClick(elem.id)}
            >
              <Box sx={{ p: 2 }}>
                <Box className="flex_center_display">
                  <img src={elem.img_src} alt="img" className="cust_img_box" />
                </Box>
                <Typography
                  align="center"
                  sx={{
                    mt: 0.5,
                    fontSize: "20px",
                    textWrap: "wrap",
                  }}
                >
                  {elem.lebel}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Button className="btn" onClick={onBack} variant="contained">
          Back
        </Button>
        {/* <Button
          className="btn"
          onClick={() => changeStep(2)}
          variant="contained"
          disabled={selectedModel === ""}
        >
          Continue
        </Button> */}
      </Box>
    </Box>
  );
};

export default Models;
