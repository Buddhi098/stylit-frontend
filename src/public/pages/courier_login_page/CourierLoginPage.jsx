import { Stack, ThemeProvider } from '@mui/system'
import React from 'react'
import { theme } from '../../assets/themes/MUIThemeProvider'
import PrimaryHeader from '../../components/PrimaryHeader'
import Section1 from './Section1'

const CourierLoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
        <PrimaryHeader/>
        <Section1/>
    </ThemeProvider>
  )
}

export default CourierLoginPage
