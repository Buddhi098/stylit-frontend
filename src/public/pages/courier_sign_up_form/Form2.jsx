import React from "react";
import { Box, Typography, TextField, Button, Grid, Alert } from "@mui/material";
import form2 from "../../assets/images/courier_sign_up_form/form2.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../api/api";
import CheckIcon from "@mui/icons-material/Check";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const Form2 = (props) => {

  const [otpError , setOtpError] = React.useState(false);
  const [otherError , setOtherError] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .required("OTP is required")
        .matches(/^\d{6}$/, "OTP must be exactly 6 digits"),
    }),
    onSubmit: async (values) => {
      console.log("Form values:", values);
      props.setLoading(true);

      try {
        const data = {
          email: props.courierEmail,
          otp: values.otp,
        };
        console.log("Data:", data);

        const response = await api.post("/public/user/verifyOtp", data);

        if(response.data.data.otpStatus) {
          props.setOtpStatus(response.data.data.otpStatus);
          setOtpError(false);
          setOtherError(false);
        }else{
          setOtpError(true);
        }

        console.log("Response:", response.data);
      } catch (error) {
        if (error.response) {
          console.error("Response error:", error.response);
          console.error("Status:", error.response.status);
          console.error("Data:", error.response.data);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          console.error("Request error:", error.request);
        } else if (error.code === "ECONNABORTED") {
          console.error("Request timed out. Error:", error.message);
        } else {
          console.error("Error message:", error.message);
        }
        setOtherError(true);
      } finally {
        props.setLoading(false);
      }
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        maxHeight: "62vh",
        minHeight: "62vh",
      }}
    >
      <Box
        sx={{
          flex: 1.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: "1px solid #f0f0f0",
        }}
      >
        <img
          src={form2}
          alt="Illustration"
          style={{ maxWidth: "80%", maxHeight: "80%", paddingRight: "20px" }}
        />
      </Box>
      {/* Right part with OTP input field */}
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          flex: 1,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Left part with illustration */}
        {props.otpStatus && (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Your email address has been successfully verified.
          </Alert>
        )}
        {otpError && (
          <Alert severity="error">
            The OTP you entered is incorrect. Please try again.
          </Alert>
        )}
        {otherError && (
          <Alert icon={<WarningAmberIcon fontSize="inherit" />} severity="warning">
            Something went wrong. Please try again.
          </Alert>
        )}
        <Typography variant="subtitle_alata" gutterBottom>
          OTP Verification
        </Typography>
        <Typography variant="body1_nunito" color="#999999" gutterBottom>
          Enter the OTP sent to your Registered Email
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="otp"
              name="otp"
              variant="filled"
              size="small"
              label="Enter OTP"
              type="text"
              inputProps={{ maxLength: 6 }} // Limiting to 6 digits
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
              disabled={props.otpStatus}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth type="submit" disabled={props.otpStatus}>
              <Typography variant="body1_nunito" color="black">
                Verify OTP
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Form2;
