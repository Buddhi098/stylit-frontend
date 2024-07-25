import { Stack, Typography, Button, Box } from "@mui/material";
import React from "react";
import s31 from "../../assets/images/women_page/s31.png";
import s32 from "../../assets/images/women_page/s32.png";
import s33 from "../../assets/images/women_page/s33.png";
import s34 from "../../assets/images/women_page/s34.png";
import s35 from "../../assets/images/women_page/s35.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const images = [s31,s32, s33, s34, s35];

const Section4 = () => {
  return (
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,marginBottom:'100px' , marginTop:'100px'}}
    >
      <Stack
        direction="column"
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "90px",
        }}
      >
        <Typography variant="subtitle_alata">#StyledByStylit</Typography>
        <Typography variant="body1_nunito">
          Share your latest looks with #StyledByStylit for a chance to be
          featured.
        </Typography>
        <Button
          sx={{ background: "black", borderRadius: "0", padding: "10px 20px" }}
        >
          <Typography variant="body2_alata" color="white">
            Add Your Photo
          </Typography>
        </Button>
      </Stack>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        spacing={6}
      >
        {images.map((image) => (<Box sx={{ width: "200px", position: "relative" }}>
          <Box component="img" src={image} sx={{ width: "100%" }} />
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              padding: "10px",
              background: "white",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ShoppingBagOutlinedIcon sx={{fontWeight:'100'}}/>
          </Box>
        </Box>))}
        
      </Stack>
    </Stack>
  );
};

export default Section4;
