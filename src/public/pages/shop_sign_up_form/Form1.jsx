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
import formIllustration from "../../assets/images/shop_sign_up_form/form1.png";
import api from "../../api/api";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const isEmailALreadyExistFunc = async (email, setIsEmailALreadyExist) => {
  try {
    const response = await api.post("/public/user/isExistShop", {
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
  const [otherError, setOtherError] = useState(false);

  const formik = useFormik({
    initialValues: {
      shopName:
        props.form1Data && props.form1Data.shopName
          ? props.form1Data.shopName
          : "",
      shopEmail:
        props.form1Data && props.form1Data.shopEmail
          ? props.form1Data.shopEmail
          : "",
      shopContactNumber:
        props.form1Data && props.form1Data.shopContactNumber
          ? props.form1Data.shopContactNumber
          : "",
      password:
        props.form1Data && props.form1Data.password
          ? props.form1Data.password
          : "",
      confirmPassword:
        props.form1Data && props.form1Data.confirm_password
          ? props.form1Data.confirm_password
          : "",
    },
    validationSchema: Yup.object({
      shopName: Yup.string().required("shop Name is required"),
      shopEmail: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      shopContactNumber: Yup.string().required("Contact Number is required").min(9, "Enter Valid Phone Number"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      console.log("Form data", values);
      console.log(props.otpStatus, "otpStatus");

      props.setLoading(true);
      const isEmailRegistered = await isEmailALreadyExistFunc(values.shopEmail, setIsEmailALreadyExist);
      if(isEmailRegistered){
        props.setLoading(false);
        return;
      }
      
      if (!props.otpStatus && !isEmailALreadyExist) {
        try {
          const otpRequestData = {
            email: values.shopEmail,
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
          setOtherError(true);
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
  } , [formik.values.shopEmail])

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
            Fashion Store Registration
          </Typography>
          <Typography variant="body1_nunito" color="#999999" gutterBottom>
            Please fill in the details below to register your Fashin Store.
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
        {otherError && (
          <Alert
            icon={<WarningAmberIcon fontSize="inherit" />}
            severity="warning"
          >
            Something went wrong. Please try again later.
          </Alert>
        )}

        <Grid container spacing={2} sx={{ marginTop: "15px" }}>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="shopName" sx={{ mb: "4px" }}>
              <Typography variant="body1_alata">Shop Name</Typography>
            </InputLabel>
            <TextField
              variant="filled"
              fullWidth
              size="small"
              id="shopName"
              name="shopName"
              value={formik.values.shopName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.shopName && Boolean(formik.errors.shopName)
              }
              helperText={
                formik.touched.shopName && formik.errors.shopName
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
            <InputLabel htmlFor="shopEmail" sx={{ mb: "4px" }}>
              <Typography variant="body1_alata">Email</Typography>
            </InputLabel>
            <TextField
              disabled={props.isSetEmail}
              ref={refEmail}
              variant="filled"
              fullWidth
              size="small"
              id="shopEmail"
              name="shopEmail"
              type="email"
              value={formik.values.shopEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.shopEmail &&
                Boolean(formik.errors.shopEmail)
              }
              helperText={
                formik.touched.shopEmail && formik.errors.shopEmail
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
            <InputLabel htmlFor="shopContactNumber" sx={{ mb: "4px" }}>
              <Typography variant="body1_alata">Contact Number</Typography>
            </InputLabel>
            <TextField
              variant="filled"
              fullWidth
              size="small"
              id="shopContactNumber"
              name="shopContactNumber"
              value={formik.values.shopContactNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.shopContactNumber &&
                Boolean(formik.errors.shopContactNumber)
              }
              helperText={
                formik.touched.shopContactNumber &&
                formik.errors.shopContactNumber
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
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword
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
