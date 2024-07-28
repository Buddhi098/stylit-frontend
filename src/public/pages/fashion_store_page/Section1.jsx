import React from "react";
import { Box, Typography, Button } from "@mui/material";
import coverPhoto from "../../assets/images/fashion_store_page/cover.png";
import { Stack } from "@mui/system";
const Section1 = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={coverPhoto}
        alt="Fashion model"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 60,
          left: 70,
          color: "white",
          maxWidth: "50%",
        }}
      >
        <Stack direction="column">
          <Typography
            variant="subtitle_alata"
            sx={{ fontWeight: "light" }}
          >
            Discover a wide range of fashion stores where you
          </Typography>
          <Typography
            variant="subtitle_alata"
            sx={{ fontWeight: "light" }}
          >
            can find all kinds of items to suit your style
          </Typography>
        </Stack>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "white",
            borderRadius: 0,
            color: "black",
            "&:hover": {
              background:"#000000",
              color:"#ffffff"
            },
          }}
        >
          <Typography variant="body2_alata"> Explore Now</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Section1;
