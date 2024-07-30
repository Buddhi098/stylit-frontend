import { ThemeProvider } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { theme } from "../../assets/themes/MUIThemeProvider";
import { useMediaQuery, Stack } from "@mui/material";
import Footer from "../home_page/Footer";
import WomenFinalHeader from "../../components/final_headers/WomenFinalHeader";
import MenFinalHeader from "../../components/final_headers/MenFinalHeader";
import Section1 from "./Section1";

const DressListPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  const { gender, category } = useParams();

  return (
    <ThemeProvider theme={theme}>
      {gender === "women" ? <WomenFinalHeader /> : <MenFinalHeader />}
      {<Section1 gender={gender} category={category}/>}
      <Footer />
    </ThemeProvider>
  );
};

export default DressListPage;
