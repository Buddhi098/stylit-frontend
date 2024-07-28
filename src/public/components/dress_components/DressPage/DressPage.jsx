import { ThemeProvider } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { theme } from "../../../assets/themes/MUIThemeProvider";
import { useMediaQuery, Stack } from "@mui/material";
import Footer from "../../../pages/home_page/Footer";
import WomenFinalHeader from "../../../components/final_headers/WomenFinalHeader";
import Section1 from "./Section1";

const DressPage = () => {
  
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <WomenFinalHeader/>
      <Section1/>
      <Footer />
    </ThemeProvider>
  );
};

export default DressPage;
