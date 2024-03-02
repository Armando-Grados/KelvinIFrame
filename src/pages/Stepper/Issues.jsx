import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { uniqueId } from "../../utils/utilityFunctions";
import AddTaskIcon from "@mui/icons-material/AddTask";

const Issues = ({
  changeStep,
  selectedIssue,
  setSelectedIssue,
  issues,
  onBreadCumbListChange,
}) => {
  const onContinue = () => {
    onBreadCumbListChange({
      title: "Issues",
      id: uniqueId(),
    });
    changeStep(4);
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
          mt: 2,
          mb: 4,
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

      <Grid container spacing={5}>
        {issues.map((elem) => (
          <Grid item xs={12} md={3} key={elem.id}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                minHeight: "250px",
                position: "relative",
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
                    mt: 1,
                    fontSize: "20px",
                  }}
                >
                  {elem.lebel}
                </Typography>
                {selectedIssue.some((e) => e.lebel === elem.lebel) && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "5%",
                      left: "5%",
                    }}
                  >
                    <AddTaskIcon
                      // sx={{ color: "green" }}
                      color="primary"
                      // fontSize="medium"
                    />
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Issues;
