import React, { useRef } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  Typography,
  Link,
  IconButton,
  Alert,
} from "@mui/material";
import img from "../../assets/images/shopper_sign_up_page/cover.png";
import logo from "../../assets/images/logo/Stylit_logo.png";
import CloseIcon from "@mui/icons-material/Close";
import Section11 from "../shopper_login_page/Section1";
import api from "../../api/api";

// Formik validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const Section1 = ({ handleClose , isSubmit , setIsSubmit }) => {
  const [showLogin, setShowLogin] = useState(false);
  const btnRef = useRef();
  const [btnLabel, setBtnLabel] = useState("Sign Up");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something Went Wrong!");

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      stylePreference: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        btnRef.current.disabled = true;
        setBtnLabel("Signing Up...");

        const response = await api.post("/public/user/addUser", values);
        setIsSubmit(true);
        console.log("User added successfully:", response.data);

      } catch (error) {
        console.error("There was an error adding the user:", error.response.data);
        if(error.response.data.errors.email){
          setErrorMessage(error.response.data.errors.email);
        }

        setError(true);
        btnRef.current.disabled = false;
        setBtnLabel("Sign Up");
      } finally {
        
        btnRef.current.disabled = false;
        setBtnLabel("Sign Up");
      }
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        height: "80vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {showLogin ? (
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
              padding: "0px 50px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: { xs: "100%", md: "50%" }, // Adjust width
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                component="img"
                src={logo}
                width="80px"
                marginBottom="20px"
              ></Box>
              <Typography variant="body1_alata" gutterBottom>
                Join the Stylit Community Today!
              </Typography>
              <Typography variant="body2_nunito" color="#999999" gutterBottom>
                Access the best trends and deals.
              </Typography>
            </Box>
            {error && (<Alert severity="warning"><Typography variant="body2_nunito">{errorMessage}</Typography></Alert>)}
            <form onSubmit={formik.handleSubmit}>
              <TextField
                size="small"
                variant="filled"
                label={<Typography variant="body2_nunito">Email</Typography>}
                margin="normal"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputProps={{
                  disableUnderline: true, // This will remove the underline
                }}
                fullWidth
              />
              <TextField
                size="small"
                variant="filled"
                label={<Typography variant="body2_nunito">Password</Typography>}
                type="password"
                margin="normal"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  disableUnderline: true, // This will remove the underline
                }}
                fullWidth
              />
              <TextField
                size="small"
                variant="filled"
                label={
                  <Typography variant="body2_nunito">
                    Confirm Password
                  </Typography>
                }
                type="password"
                margin="normal"
                name="confirmPassword"
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
                InputProps={{
                  disableUnderline: true, // This will remove the underline
                }}
                fullWidth
              />
              <Typography variant="body2_nunito" mt="18px" gutterBottom>
                Mostly interested in:
              </Typography>
              <RadioGroup
                row
                name="stylePreference"
                value={formik.values.stylePreference}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  value="WOMENSWEAR"
                  control={<Radio />}
                  label={
                    <Typography variant="body2_nunito">Womenswear</Typography>
                  }
                />
                <FormControlLabel
                  value="MENSWEAR"
                  control={<Radio />}
                  label={
                    <Typography variant="body2_nunito">Menswear</Typography>
                  }
                />
              </RadioGroup>
              <FormControlLabel
                control={<Checkbox name="newsletter" />}
                label={
                  <Typography variant="body2_nunito">
                    Yes, send me newsletters and updates via email.
                  </Typography>
                }
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
            </form>
            <Typography variant="body2_nunito" align="center" sx={{ mt: 2 }}>
              Already have an account?{" "}
              <Link onClick={handleShowLogin} sx={{ cursor: "pointer" }}>
                Sign In
              </Link>
            </Typography>
            <Typography variant="body2_nunito" align="center" sx={{ mt: 2 }}>
              By providing your email address, you agree to our{" "}
              <Link href="#">Privacy Policy</Link> and{" "}
              <Link href="#">Terms of Service</Link>.
            </Typography>
          </Box>

          {/* Right side - Image */}
          <Box sx={{ position: "relative" }}>
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
