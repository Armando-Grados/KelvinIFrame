import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { uniqueId } from "../../utils/utilityFunctions";

const Models = ({
  changeStep,
  models,
  selectedModel,
  setSelectedModel,
  setIssues,
  onBreadCumbListChange,
}) => {
  const [devices, setDevices] = useState([]);
  const [selectVal, setSelectVal] = useState("");

  const onBrandChange = (e) => {
    const item = models.find((elem) => elem.id === +e.target.value);
    if (item) {
      setSelectedModel(item.lebel);
      setSelectVal(`${item.id}`);
      setIssues(item.issues);
      onBreadCumbListChange({
        title: item.lebel,
        id: uniqueId(),
      });
      if (item?.devices.length > 0) {
        setDevices(item.devices);
      } else {
        changeStep(2);
      }
    }
  };

  const onDevicechange = (e) => {
    changeStep(2);
  };

  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <FormControl fullWidth variant="filled">
            <InputLabel>Brands</InputLabel>
            <Select value={selectVal} onChange={onBrandChange}>
              {models.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {item.lebel}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {selectVal !== "" && (
          <Grid item xs={12}>
            <FormControl fullWidth variant="filled">
              <InputLabel>Devices</InputLabel>
              <Select onChange={onDevicechange}>
                {devices.map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Models;
