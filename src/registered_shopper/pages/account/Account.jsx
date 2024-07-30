import { ThemeProvider } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { theme } from "../../assets/themes/MUIThemeProvider";
import { useMediaQuery, Stack, Box } from "@mui/material";
import WomenFinalHeader from "../../../public/components/final_headers/WomenFinalHeader";
import Section1 from "./Section1";
import { useParams } from "react-router";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Account = () => {
  const { page } = useParams();

  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <WomenFinalHeader />
      {page === "contact_information" && <Section1 />}
      {page === "shipping_information" && <Section2 />}
      {page === "payment_methods" && <Section3 />}
      {page === "orders_and_returns" && <Section4 />}
    </ThemeProvider>
  );
};

export default Account;
