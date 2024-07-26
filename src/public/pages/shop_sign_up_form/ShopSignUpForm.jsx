import React from 'react'
import CustomizedSteppers from './CustomizedSteppers'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../../assets/themes/MUIThemeProvider'
import ShopHeader from '../shop_sign_up_page/ShopHeader'

const ShopSignUpForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <ShopHeader/>
      <CustomizedSteppers/>
    </ThemeProvider>
  )
}

export default ShopSignUpForm
