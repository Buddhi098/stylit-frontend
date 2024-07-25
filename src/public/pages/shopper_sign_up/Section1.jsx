import React from "react";
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
} from "@mui/material";
import img from "../../assets/images/shopper_sign_up_page/cover.png";
import logo from "../../assets/images/logo/Stylit_logo.png";
import CloseIcon from '@mui/icons-material/Close';

const Section1 = ({handleClose}) => {
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
          <TextField
            size="small"
            variant="filled"
            label={
              <Typography variant="body2_nunito">Confirm Password</Typography>
            }
            type="password"
            margin="normal"
            InputProps={{
              disableUnderline: true, // This will remove the underline
            }}
          />

          <Typography variant="body2_nunito" mt="18px" gutterBottom>
            Mostly interested in:
          </Typography>
          <RadioGroup row>
            <FormControlLabel
              value="womenswear"
              control={<Radio />}
              label={<Typography variant="body2_nunito">Womenswear</Typography>}
            />
            <FormControlLabel
              value="menswear"
              control={<Radio />}
              label={<Typography variant="body2_nunito">Menswear</Typography>}
            />
          </RadioGroup>

          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="body2_nunito">
                Yes, send me newsletters and updates via email.
              </Typography>
            }
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
          >
            SIGN UP
          </Button>
          <Typography variant="body2_nunito" align="center" sx={{ mt: 2 }}>
            Already have an account? <Link href="#">Sign In</Link>
          </Typography>

          <Typography variant="body2_nunito" align="center" sx={{ mt: 2 }}>
            By providing your email address, you agree to our{" "}
            <Link href="#">Privacy Policy</Link> and{" "}
            <Link href="#">Terms of Service</Link>.
          </Typography>
        </Box>

        {/* Right side - Image */}

        <Box sx={{position:'relative' }}>
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
    </Box>
  );
};

export default Section1;
