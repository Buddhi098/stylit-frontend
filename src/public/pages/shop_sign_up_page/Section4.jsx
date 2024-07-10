import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Carousel1 from  '../../assets/images/courier_sign_up/Carousel1.jpg'
import Carousel2 from  '../../assets/images/courier_sign_up/Carousel2.jpg'
import Carousel3 from  '../../assets/images/courier_sign_up/Carousel3.jpg'

const slides = [
  {
    text: '"Being on Sylit has allowed us to express our brand\'s personality fully and connect with customers who love our bohemian style. It\'s been a fantastic journey."',
    image: Carousel1,
  },
  {
    text: '"Exploring Stylit has empowered us to showcase our unique brand identity and forge meaningful connections with fashion enthusiasts who adore our modern elegance. It\'s been an exhilarating adventure."',
    image: Carousel2,
  },
  {
    text: '"Embracing Stylit has enabled us to embody our brand\'s essence and engage with a community of trendsetters who appreciate our timeless sophistication. It\'s been an inspiring voyage."',
    image: Carousel3,
  },
];

const Section4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '80vh', backgroundColor: '#f9f9f9' }}
    >
      <IconButton onClick={handlePrev}>
        <ArrowBackIosIcon />
      </IconButton>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: '80%',
          height: '60vh',
          backgroundColor: '#ffffff',
          boxShadow: 3,
          overflow: 'hidden',
        }}
      >
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: 4 }}
        >
          <Typography variant="subtitle_alata" sx={{ textAlign: 'center' }}>
            {slides[currentIndex].text}
          </Typography>
        </Box>
        <Box
          component={'img'}
          src={slides[currentIndex].image}
          width="50%"
          height="100%"
        />
      </Box>
      <IconButton onClick={handleNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Section4;
