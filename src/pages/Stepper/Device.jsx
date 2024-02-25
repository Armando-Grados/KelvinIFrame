import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { deviceData } from "../../utils/data";

const Device = ({ changeStep, device, setDevice, setModels }) => {
  const theme = useTheme();

  const onDeviceClick = (id) => {
    const item = deviceData.find((e) => e.id === id);
    if (item) {
      setDevice(item.lebel);
      if (item?.models?.length > 0) {
        setModels(item.models);
        onContinue();
      }
    }
  };

  const onContinue = () => {
    changeStep(1);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {deviceData.map((elem) => (
          <Grid item xs={12} md={4} key={elem.id}>
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
                  device === elem.lebel
                    ? `2px solid ${theme.palette.primary.main} !important`
                    : "",
                "&:hover": {
                  transition: "all 0.5 ease-out",
                  border: `2px solid ${theme.palette.primary.main} !important`,
                },
              }}
              className="flex_center_display"
              onClick={() => onDeviceClick(elem.id)}
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
                  }}
                >
                  {elem.lebel}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* <Button
        className="btn"
        onClick={onContinue}
        disabled={device === ""}
        variant="contained"
        sx={{ mt: 2 }}
      >
        Continue
      </Button> */}
    </Box>
  );
};

export default Device;
