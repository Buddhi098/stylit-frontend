import React from "react";
import { Box, Typography, Button } from "@mui/material";
import coverPhoto from "../../assets/images/men_page/cover.png";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
const Section1 = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "81vh",
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
          right: 70,
          color: "white",
          maxWidth: "50%",
        }}
      >
        <Stack direction="column">
          <Typography variant="subtitle_alata" sx={{ fontWeight: "light" }}>
            Curate Your Perfect Style
          </Typography>
          <Typography variant="subtitle_alata" sx={{ fontWeight: "light" }}>
            with the Newest, Most Fashionable
          </Typography>
          <Typography
            variant="subtitle_alata"
            gutterBottom
            sx={{ fontWeight: "light" }}
          >
            Pieces
          </Typography>
        </Stack>
        <Link to="/public/product/men">
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "white",
              borderRadius: 0,
              color: "black",
              "&:hover": {
                background: "#000000",
                color: "#ffffff",
              },
            }}
          >
            <Typography variant="body2_alata"> Shop Now</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Section1;
