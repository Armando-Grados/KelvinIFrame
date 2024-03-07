import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
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

  const onItemClick = (event, id) => {
    const item = issues.find((e) => e.id === id);
    if (item) {
      // console.log(item);
      const dummyArr = [...selectedIssue];
      const dummyIndex = dummyArr.findIndex((e) => e.id === item.id);
      if (dummyIndex >= 0 && !event.target.checked) {
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
      {/* <Typography
        align="center"
        sx={{ fontSize: "20px", fontWeight: "bold", color: "#6c0000" }}
      >
        Select one or more repairs and then press the “continue” button
      </Typography> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          gap: 2,
          mt: 2,
          mb: 2,
        }}
      >
        <Button
          className="btn"
          onClick={onContinue}
          variant="contained"
          disabled={selectedIssue.length === 0}
          sx={{
            width: { xs: "100%", md: "auto" },
          }}
        >
          Continue
        </Button>
      </Box>

      <Grid container spacing={2}>
        {issues.map((elem) => (
          <Grid item xs={12} key={elem.id}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                padding: "3px 10px",
                border: "1px solid #989898",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedIssue.some((e) => e.lebel === elem.lebel)}
                    onChange={(e) => onItemClick(e, elem.id)}
                  />
                }
                label={elem.lebel}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Issues;
