import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const Issues = ({ changeStep, selectedIssue, setSelectedIssue, issues }) => {
  const theme = useTheme();
  const onContinue = () => {
    changeStep(4);
  };

  const onBack = () => {
    setSelectedIssue([]);
    changeStep(1);
  };

  const onItemClick = (id) => {
    const item = issues.find((e) => e.id === id);
    if (item) {
      // console.log(item);
      const dummyArr = [...selectedIssue];
      const dummyIndex = dummyArr.findIndex((e) => e.id === item.id);
      if (dummyIndex >= 0) {
        // item exist so need to remove
        dummyArr.splice(dummyIndex, 1);
        setSelectedIssue(dummyArr);
      } else {
        dummyArr.push({
          ...item,
        });
      }
      setSelectedIssue(dummyArr);
    }
  };

  return (
    <Box>
      <Typography
        align="center"
        sx={{ fontSize: "20px", fontWeight: "bold", color: "#6c0000" }}
      >
        Select one or more repairs and then press the “continue” button
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          my: 2,
        }}
      >
        <Button
          className="btn"
          onClick={onContinue}
          variant="contained"
          disabled={selectedIssue.length === 0}
        >
          Continue
        </Button>
      </Box>

      <Grid container spacing={2}>
        {issues.map((elem) => (
          <Grid item xs={12} md={3} key={elem.id}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                minHeight: "250px",
              }}
              className={`flex_center_display card_hover_color ${
                selectedIssue.some((e) => e.lebel === elem.lebel) &&
                "card_active_class"
              }`}
              onClick={() => onItemClick(elem.id)}
            >
              <Box sx={{ p: 2 }}>
                <Box className="flex_center_display">
                  <img
                    src={elem.img_src}
                    alt="img"
                    className="cust_issue_img"
                  />
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

      <Button
        className="btn"
        onClick={onBack}
        variant="contained"
        sx={{ mt: 4 }}
      >
        Back
      </Button>
    </Box>
  );
};

export default Issues;
