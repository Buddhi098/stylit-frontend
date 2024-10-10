import React, { useContext, useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Container,
  Paper,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import backgroundImage from "../../assets/images/shop_login_page/Image.png";
import api from "../../api/api";
import AuthContext from "../../../context/auth_context/AuthContext";
import { useNavigate } from "react-router";

const Section1 = () => {
  const [error, setError] = React.useState("");
  const btnRef = useRef();
  const [btnLabel, setBtnLabel] = useState("Login");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        btnRef.current.disabled = true;
        setBtnLabel("Logging In...");

        const response = await login(email, password, "shop" , setError);

        if (response) {
          navigate("/shop/dashboard");
        } 

      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        btnRef.current.disabled = false;
        setBtnLabel("Login");
      }
    },
  });

  const handleEmailChange = (e) => {
    // Clear the error for the email field
    formik.setFieldError("email", "");
    setError("");
    // Handle the change event using Formik
    formik.handleChange(e);
  };

  const handlePasswordChange = (e) => {
    formik.setFieldError("password", "");
    setError("");
    formik.handleChange(e);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "89vh",
        display: "flex",
        alignItems: "center",
        padding: "0px 50px",
      }}
    >
      <Container sx={{ marginLeft: "30px" }}>
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            padding: "2rem",
            textAlign: "left",
          }}
        >
          <Typography
            variant="title_nunito"
            component="h1"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            Welcome To
          </Typography>
          <Typography
            variant="title_nunito"
            component="h1"
            color="primary.400"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            STYLIT !
          </Typography>
          <Box
            sx={{
              width: "50px",
              height: "2px",
              backgroundColor: "#c3a97e",
              mb: 2,
            }}
          />
          <Typography variant="body1_nunito">
            Sign in to your account to continue
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{ padding: 4, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        >
          <Typography variant="subtitle_nunito" component="h1">
            Sign in With{" "}
            <Typography variant="subtitle_nunito" color="primary">
              {" "}
              STYLIT!
            </Typography>
          </Typography>
          {error !== "" && (
            <Alert severity="error" sx={{ marginTop: "10px" }}>
              {error}
            </Alert>
          )}
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 2 }}
          >
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={handleEmailChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={handlePasswordChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Link
              href="#"
              variant="body2"
              sx={{
                display: "block",
                textAlign: "right",
                mb: 2,
                textDecoration: "none",
                fontStyle: "italic",
              }}
              color="#000000"
            >
              Forgot password?
            </Link>
            <Button
              ref={btnRef}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#c3a97e",
                "&:hover": { backgroundColor: "#b39971" },
              }}
            >
              <Typography variant="body1_nunito">{btnLabel}</Typography>
            </Button>
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography variant="body2">
                Not Registered?{" "}
                <Link
                  href="/public/shop_signup_form"
                  color="#999999"
                  sx={{ fontStyle: "italic" }}
                >
                  Register Here
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Section1;
