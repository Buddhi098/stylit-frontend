import { Stack, ThemeProvider, useMediaQuery } from '@mui/material'
import React from 'react'
import { theme } from "../../assets/themes/MUIThemeProvider";
import WomenFinalHeader from "../../components/final_headers/WomenFinalHeader";
import Section1 from './Section1';

const SearchBoxPage = () => {
    const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <ThemeProvider theme={theme}>
        <WomenFinalHeader/>
        <Section1/>
    </ThemeProvider>
  )
}

export default SearchBoxPage
