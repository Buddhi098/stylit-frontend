import { ThemeProvider } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { theme } from "../../assets/themes/MUIThemeProvider";
import { useMediaQuery, Stack } from "@mui/material";
import WomenFinalHeader from "../../../public/components/final_headers/WomenFinalHeader";
import Footer from "../../../public/pages/home_page/Footer";
import Section1 from "./Section1";


const FavoritePage = () => {
  
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <WomenFinalHeader/>
      <Section1/>
      <Footer />
    </ThemeProvider>
  );
};

export default FavoritePage;
