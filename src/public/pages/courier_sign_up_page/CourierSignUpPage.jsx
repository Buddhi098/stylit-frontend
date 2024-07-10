import {ThemeProvider } from '@mui/material'
import React from 'react'
import CourierHeader from './CourierHeader'
import { theme } from '../../assets/themes/MUIThemeProvider'
import "./courier_signup.css"
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Footer from '../home_page/Footer'

const CourierSignUpPage = () => {
  return (
    <ThemeProvider theme={theme}>
        <CourierHeader/>

        <Section1/>
        <Section2/>
        <Section3/>
        {/* Carousel */}
        <Section4/>
        {/* FAQ */}
        <Section5/>
        <Footer/>
    </ThemeProvider>
  )
}

export default CourierSignUpPage
