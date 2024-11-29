import React from 'react'
import CustomizedSteppers from './CustomizedSteppers'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../../assets/themes/MUIThemeProvider'
import CourierHeader from '../courier_sign_up_page/CourierHeader'

const CourierSignUpForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <CourierHeader/>
      <CustomizedSteppers/>
    </ThemeProvider>
  )
}

export default CourierSignUpForm
