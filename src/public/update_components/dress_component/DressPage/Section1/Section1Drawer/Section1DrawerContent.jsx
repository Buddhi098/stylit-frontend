import { Grid, Stack } from "@mui/material";
import React from "react";

import { margin } from "@mui/system";
import ProductImage from "./DrawerContent/ProductImage";
import ProductDetails from "./DrawerContent/ProductDetails";
const Section1DrawerContent = () => {
  return (
    <Stack direction="row" width={"96%"} sx={{margin:"40px auto"}}  minHeight={"600px"} spacing={2}>
      <ProductImage/>
      <ProductDetails/>
    </Stack>
  );
};

export default Section1DrawerContent;
