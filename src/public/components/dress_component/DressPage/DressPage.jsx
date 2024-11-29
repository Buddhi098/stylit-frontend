import { ThemeProvider } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { theme } from "../../../assets/themes/MUIThemeProvider";
import { useMediaQuery, Stack } from "@mui/material";
import Footer from "../../../pages/home_page/Footer";
import WomenFinalHeader from "../../../components/final_headers/WomenFinalHeader";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import { useParams } from "react-router";
import MenFinalHeader from "../../final_headers/MenFinalHeader";

const DressPage = () => {

  const {gender , id , color} = useParams();
  console.log(id , gender);
  
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      {gender=="men" ? (<MenFinalHeader/>) : (<WomenFinalHeader/>)}
      <Section1 gender={gender} id={id} color={color}/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer />
    </ThemeProvider>
  );
};

export default DressPage;
