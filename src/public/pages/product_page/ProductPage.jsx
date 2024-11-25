import { ThemeProvider } from "@emotion/react";
import React from "react";
import { theme } from "../../assets/themes/MUIThemeProvider";
import { useMediaQuery, Stack } from "@mui/material";
import Footer from "../home_page/Footer";
import WomenFinalHeader from "../../components/final_headers/WomenFinalHeader";
import Section1 from "./Section1";
import Section2 from "./Section2";
import menImage from "../../assets/images/men_page/cover.png";
import womenImage from "../../assets/images/women_page/cover.png";
import { useParams } from "react-router";

const ProductPage = () => {
  const { gender, category, subcategory, isNew, isDiscount } = useParams();

  // Convert isNew and isDiscount to boolean if necessary
  const data = {
    "gender":gender,
    "category":category,
    "subcategory":subcategory,
    isNew: isNew === "true",
    isDiscount: isDiscount === "true",
  };

  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <WomenFinalHeader />
      <Section1 />
      <Section2 image={gender === "men" ? menImage : womenImage} data={data} />
      <Footer />
    </ThemeProvider>
  );
};

export default ProductPage;
