import React from "react";
import Checkout from "./Checkout";
import { ThemeContext, ThemeProvider } from "@emotion/react";
import { theme } from "../../assets/themes/MUIThemeProvider";
import WomenFinalHeader from "../../../public/components/final_headers/WomenFinalHeader";

const CheckoutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <WomenFinalHeader/>
      <Checkout />
    </ThemeProvider>
  );
};

export default CheckoutPage;
