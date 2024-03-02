import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { uniqueId } from "../../utils/utilityFunctions";

const Models = ({
  changeStep,
  models,
  selectedModel,
  setSelectedModel,
  setIssues,
  onBreadCumbListChange,
}) => {
  const onItemClick = (id) => {
    const item = models.find((e) => e.id === id);
    if (item) {
      setSelectedModel(item.lebel);
      setIssues(item.issues);
      onBreadCumbListChange({
        title: item.lebel,
        id: uniqueId(),
      });
      changeStep(2);
    }
  };

  return (
    <Box>
      <Grid container spacing={5}>
        {models.map((elem) => (
          <Grid item xs={12} md={4} key={elem.id}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                minHeight: "250px",
              }}
              className={`flex_center_display card_hover_color ${
                selectedModel === elem.lebel && "card_active_class"
              }`}
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
    </Box>
  );
};

export default Models;
