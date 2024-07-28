import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import s21 from "../../assets/images/fashion_store_page/s21.png";
import s22 from "../../assets/images/fashion_store_page/s22.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const ShopBox = ({ shopName, cover, logo }) => {
  return (
    <Box
      width="280px"
      height={"220px"}
      sx={{
        position: "relative",
        boxShadow: "1px 1px 5px rgba( 0 , 0 , 0 , 0.1)",
      }}
    >
      <Box
        component={"img"}
        src={cover}
        sx={{ objectFit: "cover", width: "100%" , height:"75%" }}
      />
      <Box
        height="25%"
        width={"100%"}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" ,marginTop:"10px" }}
      >
        <Typography variant="body2_alata">{shopName}</Typography>
      </Box>
      <Box
        component={"img"}
        src={logo}
        sx={{
          position: "absolute",
          bottom: "30px",
          left:"39%",
          width: "60px",
          height: "60px ",
          borderRadius: "50%",
        }}
      />
    </Box>
  );
};

const Section3 = () => {
  return (
    <Stack
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      p={3}
      spacing={6}
      marginTop={"32px"}
      marginBottom={"32px"}
    >
      <Stack
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="subtitle_alata">
          Save Your Favorite Stores
        </Typography>
        <Typography variant="body2_nunito" color="#999999">
          Stay updated on new arrivals and exclusive offers from your favorite
          stores by adding them to your favorites list
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        spacing={2}
      >
        <ShopBox shopName="Zara" cover={s22} logo={s21} />
        <ShopBox shopName="H&M" cover={s22} logo={s21} />
        <ShopBox shopName="Forever 21" cover={s22} logo={s21} />
        <ShopBox shopName="Zara" cover={s22} logo={s21} />
      </Stack>
      <Stack
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#000000",
            borderRadius: 0,
            color: "white",
            "&:hover": {
              background: "#434343",
              color: "#ffffff",
            },
          }}
          endIcon={<ArrowForwardIcon />}
        >
          <Typography variant="body2_alata"> View Favorite Stores</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Section3;
