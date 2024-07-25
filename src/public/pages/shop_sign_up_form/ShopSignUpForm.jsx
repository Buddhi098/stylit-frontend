import React from 'react'
import CustomizedSteppers from './CustomizedSteppers'
import PrimaryHeader from '../../components/PrimaryHeader'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../../assets/themes/MUIThemeProvider'

const ShopSignUpForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <PrimaryHeader/>
      <CustomizedSteppers/>
    </ThemeProvider>
  )
}

export default ShopSignUpForm
