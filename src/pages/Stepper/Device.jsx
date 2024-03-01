import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { widgetData } from "../../utils/widgetData";
import { uniqueId } from "../../utils/utilityFunctions";

const Device = ({
  changeStep,
  device,
  setDevice,
  setModels,
  onBreadCumbListChange,
  setIssues,
}) => {
  const onDeviceClick = (id) => {
    const item = widgetData.find((e) => e.id === id);
    if (item) {
      setDevice(item.lebel);
      onBreadCumbListChange({
        title: item.lebel,
        id: uniqueId(),
      });
      if (item?.models?.length > 0) {
        setModels(item.models);
        changeStep(1);
      } else {
        setIssues(item.issues);
        changeStep(2);
      }
    }
  };

  return (
    <Box>
      <Grid container spacing={5}>
        {widgetData.map((elem) => (
          <Grid item xs={12} md={3} key={elem.id}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                minHeight: "250px",
              }}
              className={`flex_center_display card_hover_color ${
                device === elem.lebel && "card_active_class"
              }`}
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
    </Box>
  );
};

export default Device;
