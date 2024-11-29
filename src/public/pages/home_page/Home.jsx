import React from "react";
import PrimaryHeader from "../../components/PrimaryHeader";
import { theme } from "../../assets/themes/MUIThemeProvider";
import { Stack, ThemeProvider, useMediaQuery } from "@mui/material";
import Hero from "./Hero";
import Footer from "./Footer";
import "./home.css";
import MobilePrimaryHeader from "../../components/responsive_component/MobilePrimaryHeader";

const Home = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ position: "relative" }}>
        {isDesktop ? <PrimaryHeader /> : <MobilePrimaryHeader />}
        <Hero />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default Home;
