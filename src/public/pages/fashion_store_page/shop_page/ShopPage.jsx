import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { theme } from '../../../assets/themes/MUIThemeProvider'
import FashionStoreFinalHeader from '../../../components/final_headers/FashionStoreFinalHeader';
import { useMediaQuery } from '@mui/system';
import Footer from "../../home_page/Footer";
import Section1 from './Section1';
import { useParams } from 'react-router';
import { Stack } from '@mui/material';
import s21 from "../../../assets/images/men_page/cover.png";
import s22 from "../../../assets/images/women_page/cover.png";
import Section2 from './Section2';

const stores = [
  { id: 1, name: "Jamie & Annie", category: "Casual Wear Stores", cover: s22, logo: s21, favorite: false },
  // Add more stores with unique ids as needed
];


const ShopPage = () => {
    const isDesktop = useMediaQuery("(min-width:600px)");
    const {id} = useParams();
  return (
    <ThemeProvider theme={theme}>
        <FashionStoreFinalHeader/>
        <Section1 shopName={stores[0].name} logo={stores[0].logo} cover={stores[0].cover} favourite={stores[0].favorite}/>
        <Section2/>
        <Footer/>
    </ThemeProvider>
  )
}

export default ShopPage
