import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  FormControlLabel,
  // FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import EastIcon from "@mui/icons-material/East";
import PhoneInput from "react-phone-input-2";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { openUrlInNewTab } from "../../utils/utilityFunctions";
// import { startsWith } from "../../utils/utilityFunctions";

const Quote = ({
  changeStep,
  onSubmit,
  onInputChange,
  formData,
  error,
  device,
  selectedIssue,
}) => {
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
                px: { xs: 1, md: 6 },
                width: "100%",
                borderRight: { xs: "none", md: "1px solid #c0bdbd" },
                height: "100%",
              }}
            >
              <Typography
                align="center"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                className="left_quote"
              >
                How do you want your quote delivered?*
              </Typography>

              <Box
                sx={{
                  mt: 2,
                  "& .MuiTypography-root": {
                    fontSize: "14px",
                  },
                }}
              >
                <FormControl size="small">
                  <RadioGroup
                    error={error && formData.platform.trim().length === 0}
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
                  label="Enter your full name"
                  error={error && formData.name.trim().length === 0}
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
                  label="Enter your email"
                  error={error && formData.email.trim().length === 0}
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

                <Box
                  sx={{
                    width: "100%",
                    mt: 2,
                  }}
                >
                  <PhoneInput
                    // isValid={(inputNumber, country, countries) => {
                    //   return countries.some((country) => {
                    //     return (
                    //       startsWith(inputNumber, country.dialCode) ||
                    //       startsWith(country.dialCode, inputNumber)
                    //     );
                    //   });
                    // }}
                    autoFormat
                    country={"us"}
                    preferredCountries={["in", "pe", "us"]}
                    value={formData.phone}
                    onChange={(phone) => {
                      onInputChange("phone", phone);
                    }}
                    // inputProps={{
                    //   name: "phone",
                    //   required: true,
                    // }}
                  />
                </Box>

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
                    marginTop: "14px",
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
              </Box>
              <Typography align="center" sx={{ fontSize: 10, my: 3 }}>
                By submitting this form you agree to receive recurring automated
                promotional and personalized marketing text messages and emails
                from PhixSmart at the cell number and/or email used when signing
                up. Consent is not a condition of any purchase and you can
                Unsubscribe at any time by using the safe Unsubscribe button or
                by replying 'Unsubscribe'
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                px: { xs: 1, md: 1.5 },
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                className="right_quote"
              >
                Quote Information
              </Typography>

              <Grid
                container
                spacing={1.5}
                sx={{
                  mt: 1,
                  "& .MuiTypography-root": {
                    fontSize: "14px",
                  },
                }}
              >
                <Grid xs={4.5} item>
                  <Typography sx={{ fontWeight: "bold" }}>Device: </Typography>
                </Grid>
                <Grid xs={7.5} item>
                  <Typography>
                    <Typography>{device}</Typography>
                  </Typography>
                </Grid>

                {selectedIssue.map((elem) => (
                  <Fragment key={elem.id}>
                    <Grid xs={4.5} item>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Problem:{" "}
                      </Typography>
                    </Grid>
                    <Grid xs={7.5} item>
                      <Typography>
                        <Typography>{elem.lebel}</Typography>
                      </Typography>
                    </Grid>
                    <Grid xs={4.5} item>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Timeframe:{" "}
                      </Typography>
                    </Grid>
                    <Grid xs={7.5} item>
                      <Typography>
                        <Typography>{elem.timeframe}</Typography>
                      </Typography>
                    </Grid>
                    <Grid xs={4.5} item>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Warranty:{" "}
                      </Typography>
                    </Grid>
                    <Grid xs={7.5} item>
                      <Typography>
                        <Typography>{elem.warranty}</Typography>
                      </Typography>
                    </Grid>
                  </Fragment>
                ))}
                <Grid xs={12} item>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Description:{" "}
                  </Typography>
                  <Typography>
                    {`Most ${device} repairs are completed in an hour or
                    two. We use premium parts and our technicians are expert
                    trained. We also price match! Find another local shop with
                    better pricing, we'll match it!`}
                  </Typography>
                </Grid>
              </Grid>

              <Typography
                className="right_quote"
                sx={{ fontWeight: "bold", fontSize: "18px", mt: 3 }}
              >
                Selected Store
              </Typography>
              <LocationBox />
            </Box>
          </Grid>
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

const LocationBox = () => {
  return (
    <Box>
      <Card
        className="card_location_widget"
        sx={{
          mt: 2,
        }}
      >
        <CardMedia
          component="img"
          // height="194"
          image="/images/loc/loc1.jpg"
          alt="NORCROSS GA"
        />
        <CardContent
          sx={{
            padding: "8px 16px",
          }}
        >
          <Typography
            color="primary"
            sx={{
              fontWeight: "bold",
            }}
          >
            NORCROSS GA
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            1210 Rockbridge Rd Norcross GA 30093
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            className="btn"
            endIcon={<MyLocationIcon />}
            color="primary"
            onClick={() =>
              openUrlInNewTab("https://maps.app.goo.gl/AUbJoHPWa4zRVkpSA")
            }
          >
            Visit on Map
          </Button>
        </CardActions>
      </Card>
      <Card
        className="card_location_widget"
        sx={{
          mt: 2,
        }}
      >
        <CardMedia
          component="img"
          // height="194"
          image="/images/loc/loc1.jpg"
          alt="NORCROSS GA"
        />
        <CardContent
          sx={{
            padding: "8px 16px",
          }}
        >
          <Typography
            color="primary"
            sx={{
              fontWeight: "bold",
            }}
          >
            MARIETTA, GA
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            431 Pat Mell RD SE Smyrna GA 30080
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            className="btn"
            endIcon={<MyLocationIcon />}
            color="primary"
            onClick={() =>
              openUrlInNewTab("https://maps.app.goo.gl/6SjwZpDihxxPe4547")
            }
          >
            Visit on Map
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Quote;
