import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BreadCrumb from "./BreadCrumb";
import StarRating from "./StarRating";

const ProductDetails = () => {
  return (
    <Stack direction={"column"}>
      <Box>
        <BreadCrumb gender={"women"} />
      </Box>

      <Stack marginTop={2} spacing={0.3}>
        <Typography variant="body1_alata" c>
          Off shoulder flower corsage top
        </Typography>
        <Typography variant="body2_nunito" fontSize={"10px"} color={"#999999"}> ALISA BOUTIQUE</Typography>
      </Stack>

      <Stack marginTop={2} spacing={0.3}>
        <Typography variant="subtitle_alata" color={"#000000"}> $ 50.00</Typography>
        <Typography variant="body2_nunito" color={"#999999"}> Inclusive of all taxes</Typography>
        <StarRating ratings={4.5} />
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
