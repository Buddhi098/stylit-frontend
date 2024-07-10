import React from "react";
import PrimaryHeader from "../../components/PrimaryHeader";
import { theme } from "../../assets/themes/MUIThemeProvider";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import Hero from "./Hero";
import Footer from "./Footer";
import "./home.css";
import MobilePrimaryHeader from "../../components/responsive_component/MobilePrimaryHeader";

const Home = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      {isDesktop ? <PrimaryHeader /> : <MobilePrimaryHeader />}
      <Hero />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
