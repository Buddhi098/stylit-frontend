import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Shop from "../../assets/images/partner_with_us/Shop.png";
import Courier from "../../assets/images/partner_with_us/Courier.png";
import { useNavigate, Link } from "react-router-dom";
import { fontStyle } from "@mui/system";
const Section3 = () => {
  const navigate = useNavigate();

  const naviagteToCourierSignUp = () => {
    navigate("/public/courier_signup");
  };

  return (
    <Stack
      direction="row"
      sx={{
        padding: "16px 32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "32px 0px",
      }}
    >
      <Stack
        direction="column"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "primary.100",
          padding: "50px 20px",
          width: "30%",
        }}
        spacing={3}
      >
        <Typography variant="subtitle_nunito" sx={{ fontWeight: 600 }}>
          JOIN AS A FASHION STORE
        </Typography>
        <Box component="img" src={Shop} width={"200px"}></Box>
        <Typography
          variant="body1_nunito"
          sx={{
            fontStyle: "italic",
            color: "black.800",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Are you a fashion retailer eager to reach a wider audience?
        </Typography>
        <Link to="/public/shop_signup" onClick={()=>window.scrollTo(0,0)}>
          <Button
            sx={{
              background: "white",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: "primary.800",
                color: "white",
              },
            }}
          >
            <Typography
              variant="body2_nunito"
              sx={{
                color: "black.900",
                padding: "3px 20px",
              }}
            >
              Learn More
            </Typography>
          </Button>
        </Link>
        <Typography variant="body1_nunito" color="black.800">
          Already have an account?{" "}
          <Link
            to="/public/shop_login_page"
            sx={{
              textDecoration: "none",
              color: "black.900",
              cursor: "pointer",
            }}
          >
            Login
          </Link>
        </Typography>
      </Stack>
      <Stack
        direction="column"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "primary.300",
          padding: "50px 20px",
          width: "30%",
        }}
        spacing={3}
      >
        <Typography variant="subtitle_nunito" sx={{ fontWeight: 600 }}>
          JOIN AS A COURIER SERVICE
        </Typography>
        <Box component="img" src={Courier} width={"200px"}></Box>
        <Typography
          variant="body1_nunito"
          sx={{
            fontStyle: "italic",
            color: "black.800",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Are you a reliable and efficient courier service looking to expand
          your business? 
        </Typography>

        <Link to="/public/courier_signup" onClick={() => window.scrollTo(0, 0)}>
          <Button
            sx={{
              background: "white",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: "primary.800",
                color: "white",
              },
            }}
          >
            <Typography
              variant="body2_nunito"
              sx={{
                color: "black.900",
                padding: "3px 20px",
              }}
            >
              Learn More
            </Typography>
          </Button>
        </Link>
        <Typography variant="body1_nunito" color="black.800">
          Already have an account?{" "}
          <Link
          to="/public/courier_login_page"
            sx={{
              textDecoration: "none",
              color: "black.900",
              cursor: "pointer",
            }}
          >
            Login
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Section3;
