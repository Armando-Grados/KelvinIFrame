import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";

const Quote = ({ changeStep, onSubmit, onInputChange, formData }) => {
  const onBack = () => {
    // setSelectedModel("");
    changeStep(2);
  };

  return (
    <Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                px: 6,
                width: "100%",
                borderRight: "1px solid #c0bdbd",
              }}
            >
              <Typography
                align="center"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                How do you want your quote delivered?*
              </Typography>

              <Box sx={{ mt: 2 }}>
                <FormControl size="small">
                  <RadioGroup
                    row
                    aria-labelledby="quote_platform"
                    name="platform"
                    value={formData.platform}
                    onChange={(e) => onInputChange("platform", e.target.value)}
                  >
                    <FormControlLabel
                      value="SMS"
                      control={<Radio />}
                      label="SMS text (Instant)"
                    />
                    <FormControlLabel
                      value="Email"
                      control={<Radio />}
                      label="Email (Instant)"
                    />
                    <FormControlLabel
                      value="Phone"
                      control={<Radio />}
                      label="Phone call"
                    />
                  </RadioGroup>
                </FormControl>

                <TextField
                  value={formData.name}
                  onChange={(e) => onInputChange("name", e.target.value)}
                  sx={{
                    mt: 2,
                    "& .MuiInputBase-root": {
                      borderRadius: "6px",
                    },
                  }}
                  size="small"
                  required
                  placeholder="Name*"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  value={formData.email}
                  onChange={(e) => onInputChange("email", e.target.value)}
                  sx={{
                    mt: 2,
                    "& .MuiInputBase-root": {
                      borderRadius: "6px",
                    },
                  }}
                  size="small"
                  required
                  placeholder="Email*"
                  variant="outlined"
                  fullWidth
                />

                <textarea
                  rows={4}
                  // value={formData.msg}
                  // onChange={(e) => onInputChange("msg", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "16px",
                    // border: "#000000de",
                    borderRadius: "6px",
                    marginTop: "10px",
                  }}
                  placeholder="Message (optional)"
                />

                <Box className="flex_center_display">
                  <Button
                    sx={{
                      mt: 3,
                    }}
                    className="btn"
                    endIcon={<EastIcon />}
                    variant="contained"
                    onClick={onSubmit}
                  >
                    Send me the quote
                  </Button>
                </Box>

                <Typography align="center" sx={{ fontSize: 10, my: 3 }}>
                  By submitting this form you agree to receive recurring
                  automated promotional and personalized marketing text messages
                  and emails from PhixSmart at the cell number and/or email used
                  when signing up. Consent is not a condition of any purchase
                  and you can Unsubscribe at any time by using the safe
                  Unsubscribe button or by replying 'Unsubscribe'
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Button className="btn" onClick={onBack} variant="contained">
          Back
        </Button>
        {/* <Button
          className="btn"
          onClick={() => changeStep(2)}
          variant="contained"
          disabled={onSubmit}
        >
          Continue
        </Button> */}
      </Box>
    </Box>
  );
};

export default Quote;
