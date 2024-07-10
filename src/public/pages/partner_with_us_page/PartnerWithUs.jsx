import { ThemeProvider, useMediaQuery } from '@mui/material'
import React from 'react'
import { theme } from '../../assets/themes/MUIThemeProvider'
import PrimaryHeader from '../../components/PrimaryHeader'
import SecondaryHeader from './SecondaryHeader'
import MobilePrimaryHeader from '../../components/responsive_component/MobilePrimaryHeader'
import Section1 from './Section1'
import Section2 from './Section2'
import "./partner_with_us.css"
import Section3 from './Section3'
import Footer from '../home_page/Footer'

const PartnerWithUs = () => {

    const isDesktop = useMediaQuery("(min-width:600px)")
  return (
    <ThemeProvider theme={theme}>
        {isDesktop ? <PrimaryHeader/> : <MobilePrimaryHeader/>}
        <SecondaryHeader/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
    </ThemeProvider>
  )
}

export default PartnerWithUs
