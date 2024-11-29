import { ThemeProvider, useMediaQuery } from '@mui/material'
import React from 'react'
import { theme } from '../../assets/themes/MUIThemeProvider'
import Section1 from './Section1'
import Section2 from './Section2'
import "./partner_with_us.css"
import Section3 from './Section3'
import Footer from '../home_page/Footer'
import PartnerWithUsFinalHeader from '../../components/final_headers/PartnerWithUsFinalHeader'

const PartnerWithUs = () => {

    const isDesktop = useMediaQuery("(min-width:600px)")
  return (
    <ThemeProvider theme={theme}>
        <PartnerWithUsFinalHeader/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
    </ThemeProvider>
  )
}

export default PartnerWithUs
