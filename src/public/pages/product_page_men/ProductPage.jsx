import { ThemeProvider } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { theme } from "../../assets/themes/MUIThemeProvider";
import { useMediaQuery, Stack } from "@mui/material";
import Footer from "../home_page/Footer";
import WomenFinalHeader from "../../components/final_headers/WomenFinalHeader";
import Section1 from "./Section1";
import Section2 from "./Section2";
import menImage from "../../assets/images/men_page/cover.png"
import womenImage from "../../assets/images/women_page/cover.png"
import { useParams } from "react-router";
const WomenPage = () => {

  const {gender} = useParams();
  
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <WomenFinalHeader/>
      <Section1/>
      <Section2 image = {gender==="men" ? menImage : womenImage}/>
      <Footer />
    </ThemeProvider>
  );
};

export default WomenPage;
