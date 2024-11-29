import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { theme } from '../../assets/themes/MUIThemeProvider'
import FashionStoreFinalHeader from '../../components/final_headers/FashionStoreFinalHeader';
import { useMediaQuery } from '@mui/system';
import Section1 from './Section1';
import Section2 from "./Section2";
import Section3 from './Section3';
import Footer from "../home_page/Footer";
const FashionStorePage = () => {
    const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
        <FashionStoreFinalHeader/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
    </ThemeProvider>
  )
}

export default FashionStorePage
