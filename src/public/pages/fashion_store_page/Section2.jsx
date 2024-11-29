import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/fashion_store_page/s11.png";
import img2 from "../../assets/images/fashion_store_page/s12.png";
import img3 from "../../assets/images/fashion_store_page/s13.png";
import img4 from "../../assets/images/fashion_store_page/s14.png";
import img5 from "../../assets/images/fashion_store_page/s15.png";
import img6 from "../../assets/images/fashion_store_page/s16.png";
import img7 from "../../assets/images/fashion_store_page/s17.png";
import img8 from "../../assets/images/fashion_store_page/s18.png";
import img9 from "../../assets/images/fashion_store_page/s19.png";
import { ArrowBack } from "@mui/icons-material";

const categories = [
  {
    title: "Casual Wear Stores",
    image: img1, // Replace with actual image URL
  },
  {
    title: "Formal Wear Stores",
    image: img2, // Replace with actual image URL
  },
  {
    title: "Occasion Wear Stores",
    image: img3, // Replace with actual image URL
  },
  {
    title: "Denim Stores",
    image: img4, // Replace with actual image URL
  },
  {
    title: "Active Wear Stores",
    image: img5, // Replace with actual image URL
  },
  {
    title: "Outerwear Stores",
    image: img6, // Replace with actual image URL
  },
  {
    title: "Bag Stores",
    image: img7, // Replace with actual image URL
  },
  {
    title: "Footwear Stores",
    image: img8, // Replace with actual image URL
  },
  {
    title: "Accessories Stores",
    image: img9, // Replace with actual image URL
  },
];

const Section2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container sx={{ marginTop: "64px" }}>
      <Box sx={{marginBottom:"24px" , display:"flex" , alignItems:"center", justifyContent:"center"}}>
        <Typography variant="subtitle_alata" align="center" gutterBottom>
          Explore Our Store Categories
        </Typography>
      </Box>

      <Slider {...settings}>
        {categories.map((category, index) => (
          <Box key={index} sx={{position:'relative' , cursor:'pointer'}}>
            <Box
              component="img"
              src={category.image}
              alt={category.title}
              sx={{ width: "98%", height: "auto", maxWidth: "540px", margin: "10px auto" }}
            />
            <Box sx={{position:"absolute" , bottom:"40px" , left:"80px"}}>
            <Typography variant="body1_alata" color="#ffffff" mt={2}>
              {category.title}
            </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Section2;
