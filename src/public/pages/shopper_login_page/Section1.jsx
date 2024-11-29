import React, { useContext, useRef, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
  Stack,
  Alert,
} from "@mui/material";
import img from "../../assets/images/shopper_sign_up_page/cover.png";
import logo from "../../assets/images/logo/Stylit_logo.png";
import CloseIcon from "@mui/icons-material/Close";
import Section11 from "../shopper_sign_up/Section1";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../api/api";
import AuthContext from "../../../context/auth_context/AuthContext";
import { useNavigate } from "react-router";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const Section1 = ({ handleClose }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const btnRef = useRef();
  const [btnLabel, setBtnLabel] = useState("Login");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something Went Wrong!");

  const handleShowSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        btnRef.current.disabled = true;
        setBtnLabel("Logging In...");
        
        await login(values.email, values.password, "shopper");

        navigate(0);


      } catch (error) {
        console.error("There was an error adding the user:", error.response?.data);
        setErrorMessage("Invalid email or password");
        setError(true);
      }finally{
        btnRef.current.disabled = false;
        setBtnLabel("Login");
      }
    },
  });

  const handleChange = (e) => {
    formik.handleChange(e);
    setError(false);
  }

  const handlePassword = (e) => {
    formik.handleChange(e);
    setError(false);
  }

  return (
    <Box
      sx={{
        display: "flex",
        height: "500px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {showSignUp ? (
        <Section11 handleClose={handleClose} />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "#fff",
            boxShadow: 1,
            borderRadius: 1,
            overflow: "hidden",
            maxWidth: 1200,
            width: "100%",
          }}
        >
          {/* Left side - Form */}
          <Box
            sx={{
              padding: { xs: "20px 20px", md: "20px 50px" },
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "20px",
              }}
            >
              <Box
                component="img"
                src={logo}
                width="80px"
                marginBottom="10px"
              ></Box>
              <Typography variant="body1_alata" gutterBottom>
                Welcome back to Stylit!
              </Typography>
              <Typography variant="body2_nunito" color="#999999" gutterBottom>
                Please login to your account.
              </Typography>
            </Box>

            <Box component="form" width="100%" onSubmit={formik.handleSubmit}>
              {error && (
                <Alert severity="warning">
                  <Typography variant="body2_nunito">{errorMessage}</Typography>
                </Alert>
              )}
              <TextField
                fullWidth
                size="small"
                variant="filled"
                label={<Typography variant="body2_nunito">Email</Typography>}
                name="email"
                value={formik.values.email}
                onChange={handleChange}
                onBlur={formik.handleBlur}
                margin="normal"
                InputProps={{
                  disableUnderline: true,
                }}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                size="small"
                variant="filled"
                label={<Typography variant="body2_nunito">Password</Typography>}
                type="password"
                name="password"
                value={formik.values.password}
                onChange={handlePassword}
                onBlur={formik.handleBlur}
                margin="normal"
                InputProps={{
                  disableUnderline: true,
                }}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: "white",
                  background: "#000000",
                  borderRadius: "0",
                  mt: "20px",
                }}
                fullWidth
                disableFocusRipple
                disableRipple
              >
                <Typography ref={btnRef} variant="body1_nunito">
                  {btnLabel}
                </Typography>
              </Button>
            </Box>

            <Stack
              direction="column"
              spacing={0.1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Typography variant="body2_nunito" align="center" sx={{ mt: 2 }}>
                Don’t have an account?{" "}
                <Link onClick={handleShowSignUp} sx={{ cursor: "pointer" }}>
                  Sign up
                </Link>
              </Typography>
              <Link>
                <Typography variant="body2_nunito">Reset password</Typography>
              </Link>
            </Stack>

            <Typography variant="body2_nunito" align="center" sx={{ mt: 7 }}>
              By providing your email address, you agree to our{" "}
              <Link href="#">Privacy Policy</Link> and{" "}
              <Link href="#">Terms of Service</Link>.
            </Typography>
          </Box>

          {/* Right side - Image */}
          <Box sx={{ position: "relative", width: { xs: "100%", md: "50%" } }}>
            <Box
              component={"img"}
              src={img}
              width={"100%"}
              height={"100%"}
              sx={{ objectFit: "cover" }}
            ></Box>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
              disableRipple
              disableFocusRipple
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Section1;
