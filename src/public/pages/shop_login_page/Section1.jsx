import React from "react";
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

const Section1 = () => {
  const [error, setError] = React.useState('');
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
      // console.log("Form values:", values);
      const { email, password } = values;
      const loginType = "shop";
      const data = {
        userName: email,
        password: password,
        userRole: loginType,
      }
      console.log("Data:", data);
      try {
        const response = await api.post('/public/user/login', data);
        const { access_token } = response.data;
        localStorage.setItem('token', access_token);
        setError('');
        // Redirect to a protected route
        window.location.href = '/shop/dashboard';
      } catch (err) {
        setError('Invalid email or password');
      }
    },
  });

  const handleEmailChange = (e)=>{
    setError('');
    formik.handleChange(e);
  }

  const handlePasswordChange = (e)=>{
    setError('');
    formik.handleChange(e)
  }

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
            Begin Your Journey as a Courier with Us
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
          {error!=='' && (
          <Alert severity="error" sx={{ marginTop: "10px" }}>
            {error}
          </Alert>
        )}
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
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
              sx={{ display: "block", textAlign: "right", mb: 2 ,textDecoration:'none' , fontStyle: 'italic'}}
              color="#000000"
            >
              Forgot password?
            </Link>
            <Button
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
              <Typography variant="body1_nunito">Login</Typography>
            </Button>
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography variant="body2">
                Not Registered? <Link href="/public/courier_signup_form" color="#999999" sx={{fontStyle: 'italic'}}>Register Here</Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Section1;
