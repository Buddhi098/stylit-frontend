import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  TextField,
  Grid,
  Typography,
  Box,
  Divider,
  Stack,
  InputLabel,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import formIllustration from "../../assets/images/courier_sign_up_form/form1.png";
import api from "../../api/api";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const isEmailALreadyExistFunc = async (email, setIsEmailALreadyExist) => {
  try {
    const response = await api.post("/public/user/isExistCourier", {
      email: email,
    });
    console.log(response.data);
    if (response.data.data.isExistEmail) {
      setIsEmailALreadyExist(true);
      return true;
    } else {
      setIsEmailALreadyExist(false);
      return false;
    }
  } catch (err) {
    if (err.response) {
      console.log("Response error:", err.response);
      console.log("Status:", err.response.status);
      console.log("Data:", err.response.data);
      console.log("Headers:", err.response.headers);
    } else if (err.request) {
      console.log("Request error:", err.request);
    } else {
      console.log("Error message:", err.message);
    }
  }
};

const Form1 = forwardRef((props, ref) => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isEmailALreadyExist, setIsEmailALreadyExist] = useState(false);

  const formik = useFormik({
    initialValues: {
      courierName:
        props.form1Data && props.form1Data.courierName
          ? props.form1Data.courierName
          : "",
      courierEmail:
        props.form1Data && props.form1Data.courierEmail
          ? props.form1Data.courierEmail
          : "",
      courierContactNumber:
        props.form1Data && props.form1Data.courierContactNumber
          ? props.form1Data.courierContactNumber
          : "",
      password:
        props.form1Data && props.form1Data.password
          ? props.form1Data.password
          : "",
      confirm_password:
        props.form1Data && props.form1Data.confirm_password
          ? props.form1Data.confirm_password
          : "",
    },
    validationSchema: Yup.object({
      courierName: Yup.string().required("Courier Name is required"),
      courierEmail: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      courierContactNumber: Yup.string().required("Contact Number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      // console.log("Form data", values);
      console.log(props.otpStatus, "otpStatus");

      const isEmailRegistered = await isEmailALreadyExistFunc(values.courierEmail, setIsEmailALreadyExist);
      if(isEmailRegistered){
        return;
      }
      
      if (!props.otpStatus && !isEmailALreadyExist) {
        props.setLoading(true);
        try {
          const otpRequestData = {
            email: values.courierEmail,
          };
          console.log(otpRequestData, "otpRequestData");

          const response = await api.post(
            "/public/user/generateOtp",
            otpRequestData
          );

          props.setFrom1Data(values);

          console.log(response.data);
        } catch (err) {
          if (err.code === "ECONNABORTED") {
            setIsValidEmail(false);
          }

          if (err.response) {
            console.error("Response error:", err.response);
            console.error("Status:", err.response.status);
            console.error("Data:", err.response.data);
            console.error("Headers:", err.response.headers);
          } else if (err.request) {
            console.error("Request error:", err.request);
          } else {
            console.error("Error message:", err.message);
          }
        } finally {
          props.setLoading(false);
        }
      } else {
        props.setFrom1Data(values);
      }
    },
  });

  useEffect(() => {
    setIsEmailALreadyExist(false);
  } , [formik.values.courierEmail])

  const refEmail = useRef();

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      formik.handleSubmit();
    },
  }));

  console.log("asds", props.isSetEmail);

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ mt: 3, height: "62vh", display: "flex" }}
    >
      <Box
        sx={{
          flex: 1.5,
          mr: 2,
          borderRight: "1px solid #f0f0f0",
          paddingRight: "40px",
        }}
      >
        <Stack direction="column">
          <Typography variant="subtitle_alata" gutterBottom>
            Courier Registration
          </Typography>
          <Typography variant="body1_nunito" color="#999999" gutterBottom>
            Please fill in the details below to register your courier service.
          </Typography>
        </Stack>
        <Divider sx={{ marginBottom: "5px", background: "white" }} />

        {!isValidEmail && (
          <Alert severity="error" sx={{ marginBottom: "10px" }}>
            Please Enter Valid Email
          </Alert>
        )}

        {isEmailALreadyExist && (
          <Alert
            icon={<WarningAmberIcon fontSize="inherit" />}
            severity="warning"
          >
            Email is already registered. Please use a different email address.
          </Alert>
        )}

        <Grid container spacing={2} sx={{ marginTop: "15px" }}>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="courierName" sx={{ mb: "4px" }}>
              <Typography variant="body1_alata">Courier Name</Typography>
            </InputLabel>
            <TextField
              variant="filled"
              fullWidth
              size="small"
              id="courierName"
              name="courierName"
              value={formik.values.courierName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.courierName && Boolean(formik.errors.courierName)
              }
              helperText={
                formik.touched.courierName && formik.errors.courierName
              }
              sx={{
                "& .MuiInputBase-root": {
                  height: 40, // Adjust the height as needed
                  padding: "0px 12px", // Adjust the padding as needed
                },
                "& .MuiFilledInput-root": {
                  padding: "0px 12px", // Adjust the padding as needed
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="courierEmail" sx={{ mb: "4px" }}>
              <Typography variant="body1_alata">Email</Typography>
            </InputLabel>
            <TextField
              disabled={props.isSetEmail}
              ref={refEmail}
              variant="filled"
              fullWidth
              size="small"
              id="courierEmail"
              name="courierEmail"
              type="email"
              value={formik.values.courierEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.courierEmail &&
                Boolean(formik.errors.courierEmail)
              }
              helperText={
                formik.touched.courierEmail && formik.errors.courierEmail
              }
              sx={{
                "& .MuiInputBase-root": {
                  height: 40, // Adjust the height as needed
                  padding: "8px 12px", // Adjust the padding as needed
                },
                "& .MuiFilledInput-root": {
                  padding: "8px 12px", // Adjust the padding as needed
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="courierContactNumber" sx={{ mb: "4px" }}>
              <Typography variant="body1_alata">Contact Number</Typography>
            </InputLabel>
            <TextField
              variant="filled"
              fullWidth
              size="small"
              id="courierContactNumber"
              name="courierContactNumber"
              value={formik.values.courierContactNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.courierContactNumber &&
                Boolean(formik.errors.courierContactNumber)
              }
              helperText={
                formik.touched.courierContactNumber &&
                formik.errors.courierContactNumber
              }
              sx={{
                "& .MuiInputBase-root": {
                  height: 40, // Adjust the height as needed
                  padding: "8px 12px", // Adjust the padding as needed
                },
                "& .MuiFilledInput-root": {
                  padding: "8px 12px", // Adjust the padding as needed
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="password" sx={{ mb: "4px" }}>
              <Typography variant="body1_alata">Password</Typography>
            </InputLabel>
            <TextField
              variant="filled"
              fullWidth
              size="small"
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40, // Adjust the height as needed
                  padding: "8px 12px", // Adjust the padding as needed
                },
                "& .MuiFilledInput-root": {
                  padding: "8px 12px", // Adjust the padding as needed
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="confirm_password" sx={{ mb: "4px" }}>
              <Typography variant="body1_alata">Confirm password</Typography>
            </InputLabel>
            <TextField
              variant="filled"
              fullWidth
              size="small"
              id="confirm_password"
              name="confirm_password"
              type="password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirm_password &&
                Boolean(formik.errors.confirm_password)
              }
              helperText={
                formik.touched.confirm_password &&
                formik.errors.confirm_password
              }
              sx={{
                "& .MuiInputBase-root": {
                  height: 40, // Adjust the height as needed
                  padding: "8px 12px", // Adjust the padding as needed
                },
                "& .MuiFilledInput-root": {
                  padding: "8px 12px", // Adjust the padding as needed
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component="img" src={formIllustration} width="100%"></Box>
      </Box>
    </Box>
  );
});

export default Form1;
