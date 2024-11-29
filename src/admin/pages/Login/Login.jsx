import * as React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loginBackground from "../../assets/images/auth/thought-catalog-505eectW54k-unsplash.jpg";
import StylitLogo from "../../assets/images/logo/Stylit_logo.png";
import AuthContext from "../../../context/auth_context/AuthContext";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0056b3",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default function SignInSide() {
  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = React.useState("");
  const btnRef = React.useRef();
  const [btnLabel, setBtnLabel] = React.useState("Login");

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      btnRef.current.disabled = true;
      setBtnLabel("Logging In...");

      await login(email, password, "admin");

      navigate("/admin/dashboard");
    } catch (error) {
      console.error(
        "There was an error adding the user:",
        error.response?.data
      );
      setError("Invalid email or password");
    } finally {
      btnRef.current.disabled = false;
      setBtnLabel("Login");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginBackground})`,
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(50%)",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ m: 1, width: "100px" }}>
              <img
                src={StylitLogo}
                alt="Stylit Logo"
                style={{ width: "100%" }}
              />
            </Box>
            <Typography
              component="h1"
              variant="h4"
              sx={{ fontWeight: 500, fontFamily: '"Alata", sans-serif' }}
            >
              Admin Sign in
            </Typography>
            {error && <Alert severity="warning">{error}</Alert>}

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form noValidate>
                  <Field
                    name="email"
                    as={TextField}
                    margin="normal"
                    variant="filled"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{
                      borderRadius: "4px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "4px",
                      },
                      "& .MuiFormLabel-root": {
                        color: "#0056b3",
                      },
                      "& .MuiInputLabel-shrink": {
                        color: "#0056b3",
                      },
                    }}
                  />

                  <Field
                    name="password"
                    as={TextField}
                    margin="normal"
                    variant="filled"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{
                      borderRadius: "4px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "4px",
                      },
                      "& .MuiFormLabel-root": {
                        color: "#0056b3",
                      },
                      "& .MuiInputLabel-shrink": {
                        color: "#0056b3",
                      },
                    }}
                  />

                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    ref={btnRef}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      bgcolor: "#0056b3",
                      "&:hover": { bgcolor: "#003d7a" },
                    }}
                    disabled={isSubmitting}
                  >
                    {btnLabel}
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link
                        href="#"
                        variant="body2"
                        sx={{
                          color: "#0056b3",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
