import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Section1 = ({ shopName, cover, logo, favourite }) => {
  const [isFavourite, setIsFavourite] = useState(favourite);
  const handleFavourite = (e) => {
    e.stopPropagation(); // Prevents the navigation on favorite button click
    // add api logic here
    setIsFavourite(!isFavourite);
  };

  return (
    <Stack
      sx={{
        width: "80%",
        height: "280px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
        margin:"0 auto"
      }}
    >
      <Box
        component="img"
        src={cover}
        sx={{ width: "100%", height: "208px", objectFit: "cover" }}
      />
      <Box sx={{ width: "100%", height: "72px", textAlign: "center", paddingTop: "30px" }}>
        <Typography variant="subtitle_alata" sx={{ textAlign: "center" }}>
          {shopName}
        </Typography>
      </Box>
      <Box
        component="img"
        src={logo}
        sx={{
          position: "absolute",
          width: "175px",
          height: "175px",
          objectFit: "cover",
          borderRadius: "50%",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10px",
          right: "10px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
        }}
      >
        <IconButton disableFocusRipple disableRipple onClick={handleFavourite}>
          {!isFavourite ? (
            <FavoriteBorderIcon sx={{ fontSize: "35px", color: "#FA8072" }} />
          ) : (
            <FavoriteOutlinedIcon sx={{ fontSize: "35px", color: "#FA8072" }} />
          )}
        </IconButton>
      </Box>
    </Stack>
  );
};

export default Section1;
