import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { theme } from '../../../assets/themes/MUIThemeProvider'
import FashionStoreFinalHeader from '../../../components/final_headers/FashionStoreFinalHeader';
import { useMediaQuery } from '@mui/system';
import Footer from "../../home_page/Footer";
import Section1 from './Section1';
const FashionStorePage = () => {
    const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
        <FashionStoreFinalHeader/>
        <Section1/>
        <Footer/>
    </ThemeProvider>
  )
}

export default FashionStorePage
