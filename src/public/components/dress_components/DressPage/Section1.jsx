import { Grid, Stack } from "@mui/material";
import React from "react";

import { margin } from "@mui/system";
import ProductImage from "./Section1/ProductImage";
import ProductDetails from "./Section1/ProductDetails";
const Section1 = () => {
  return (
    <Stack direction="row" width={"80%"} sx={{margin:"20px auto" , marginTop:"180px"}}  minHeight={"600px"} spacing={2}>
      <ProductImage/>
      <ProductDetails/>
    </Stack>
  );
};

export default Section1;
