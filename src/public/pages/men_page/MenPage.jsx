import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { theme } from '../../assets/themes/MUIThemeProvider'
import PrimaryHeader from '../../components/PrimaryHeader';
import MobilePrimaryHeader from '../../components/responsive_component/MobilePrimaryHeader';
import { useMediaQuery } from '@mui/system';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Footer from '../home_page/Footer';
import SecondaryHeader from '../../components/women_secondary_header/SecondaryHeader';

const MenPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      {isDesktop ? <PrimaryHeader topHeaderColor={"#D7CBC4"}/> : <MobilePrimaryHeader />}
      <SecondaryHeader/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </ThemeProvider>
  )
}

export default MenPage
