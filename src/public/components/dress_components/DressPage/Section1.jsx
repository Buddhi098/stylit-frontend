import { Grid, Stack } from "@mui/material";
import React from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import { margin } from "@mui/system";
const Section1 = () => {
  return (
    <Stack direction="row" width={"80%"} sx={{margin:"180px auto"}} minHeight={"600px"} spacing={2}>
      <ProductImage/>
      <ProductDetails/>
    </Stack>
  );
};

export default Section1;
