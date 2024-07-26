import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import img from "../../assets/images/shopper_sign_up_page/cover.png";
import logo from "../../assets/images/logo/Stylit_logo.png";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/system";
import Section11 from "../shopper_sign_up/Section1";

const Section1 = ({ handleClose }) => {
  const [showSignUp , setShowSignUp] = useState(false);
  const handleShowSignUp = () => {
    setShowSignUp(!showSignUp);
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
      {showSignUp ? (<Section11 handleClose={handleClose}/>) : (<Box
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
            padding: { xs: "20px 20px", md: "20px 50px" }, // Adjust padding
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
              marginBottom: "20px", // Adjust margin-bottom
            }}
          >
            <Box
              component="img"
              src={logo}
              width="80px"
              marginBottom="10px" // Adjust margin-bottom
            ></Box>
            <Typography variant="body1_alata" gutterBottom>
              Welcome back to Stylit!
            </Typography>
            <Typography variant="body2_nunito" color="#999999" gutterBottom>
              Please login to your account.
            </Typography>
          </Box>
          <TextField
            size="small"
            variant="filled"
            label={<Typography variant="body2_nunito">Email</Typography>}
            margin="normal"
            InputProps={{
              disableUnderline: true, // This will remove the underline
            }}
          />
          <TextField
            size="small"
            variant="filled"
            label={<Typography variant="body2_nunito">Password</Typography>}
            type="password"
            margin="normal"
            InputProps={{
              disableUnderline: true, // This will remove the underline
            }}
          />

          <Button
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
            <Typography variant="body1_nunito">SIGN UP</Typography>
          </Button>
          <Stack
            direction="column"
            spacing={0.1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px", // Adjust margin-top
            }}
          >
            <Typography variant="body2_nunito" align="center" sx={{ mt: 2 }}>
              Don’t have an account? <Link onClick={handleShowSignUp} sx={{cursor:'pointer'}}>Sign up</Link>
            </Typography>
            <Link><Typography variant="body2_nunito">Reset password</Typography></Link>
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
      </Box>)}
      
    </Box>
  );
};

export default Section1;
