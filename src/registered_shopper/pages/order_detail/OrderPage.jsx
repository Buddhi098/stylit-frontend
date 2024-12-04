import React from "react";
import { ThemeContext, ThemeProvider } from "@emotion/react";
import { theme } from "../../assets/themes/MUIThemeProvider";
import WomenFinalHeader from "../../../public/components/final_headers/WomenFinalHeader";
import OrderList from "./OrderDetail";
import OrderDetail from "./OrderDetail";

const CheckoutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <WomenFinalHeader/>
      <OrderDetail/>
    </ThemeProvider>
  );
};

export default CheckoutPage;
