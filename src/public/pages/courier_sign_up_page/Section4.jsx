import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Carousel1 from  '../../assets/images/courier_sign_up/Carousel1.jpg'
import Carousel2 from  '../../assets/images/courier_sign_up/Carousel2.jpg'
import Carousel3 from  '../../assets/images/courier_sign_up/Carousel3.jpg'

const slides = [
  {
    text: '"Every journey matters with Stylit Couriers. They deliver more than just packages; they bring fashion to life."',
    image: Carousel1,
  },
  {
    text: '"Stylit Couriers ensures your fashion items are delivered safely and on time."',
    image: Carousel2,
  },
  {
    text: '"Trust Stylit Couriers for all your fashion delivery needs."',
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
      sx={{ height: '80vh' }}
    >
      <IconButton onClick={handlePrev}>
        <ArrowBackIosIcon />
      </IconButton>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "80%",
          height: '60vh',
          backgroundColor: '#ffffff',
          overflow: 'hidden',
        }}
      >
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: 4 , backgroundColor: '#f9f9f9' ,height: '100%'}}
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
