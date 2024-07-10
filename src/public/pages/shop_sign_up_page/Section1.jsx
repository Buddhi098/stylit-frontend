import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "../../assets/images/courier_sign_up/Banner.png";

const Section1 = () => {
  return (
    <Stack>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "400px",
        }}
      >
        <Box component="img" src={Banner} height="430px" width="100%"></Box>
        <Stack
          direction="column"
          sx={{
            position: "absolute",
            top: "11%",
            left: "0",
            width: "100%",
            backgroundColor: "rgba(222, 217, 213, 0.6)",
            height: "85%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontFamily: '"Nunito Sans", sans-serif',
              fontWeight: 700,
            }}
            mb={1}
          >
            Connect, Inspire & Sell!
          </Typography>
          <Typography
            variant="body1_nunito"
            sx={{ textAlign: "center", fontSize: "20px", fontStyle: "italic" }}
            mb={2}
          >
            Join Sylit and Showcase Your Fashion!
          </Typography>
          <Button
            sx={{
              backgroundColor: "primary.main",
              padding: "10px 30px",
              color: "black.900",
              "&:hover": {
                backgroundColor: "primary.600",
                color: "black.900",
              },
              borderRadius: "0",
            }}
          >
            <Typography variant="body2_alata" sx={{fontWeight:500}}>Join Now</Typography>
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Section1;
