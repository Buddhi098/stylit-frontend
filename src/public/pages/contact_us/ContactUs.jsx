import { ThemeProvider } from '@emotion/react'
import { theme } from '../../assets/themes/MUIThemeProvider'
import React from 'react'
import Section1 from './Section1'

const ContactUs = () => {
  return (
    <ThemeProvider theme = {theme}>
        <Section1/>
    </ThemeProvider>
  )
}

export default ContactUs
