import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/images/fashion_store_page/s11.png";
import img2 from "../../../assets/images/fashion_store_page/s12.png";
import img3 from "../../../assets/images/fashion_store_page/s13.png";
import img4 from "../../../assets/images/fashion_store_page/s14.png";
import img5 from "../../../assets/images/fashion_store_page/s15.png";
import img6 from "../../../assets/images/fashion_store_page/s16.png";
import img7 from "../../../assets/images/fashion_store_page/s17.png";
import img8 from "../../../assets/images/fashion_store_page/s18.png";
import img9 from "../../../assets/images/fashion_store_page/s19.png";
import Section2Drawer from "./Section2/Section2Drawer";
import LazyLoad from "react-lazyload";

const dresses = [
  {
    id: 1,
    name: "Casual Wear Stores",
    image: img1, // Replace with actual image URL
  },
  {
    id: 1,
    name: "Formal Wear Stores",
    image: img2, // Replace with actual image URL
  },
  {
    id: 1,
    name: "Occasion Wear Stores",
    image: img3, // Replace with actual image URL
  },
  {
    id: 1,
    name: "Denim Stores",
    image: img4, // Replace with actual image URL
  },
  {
    id: 1,
    name: "Active Wear Stores",
    image: img5, // Replace with actual image URL
  },
  {
    id: 1,
    name: "Outerwear Stores",
    image: img6, // Replace with actual image URL
  },
  {
    id: 1,
    name: "Bag Stores",
    image: img7, // Replace with actual image URL
  },
  {
    id: 1,
    name: "Footwear Stores",
    image: img8, // Replace with actual image URL
  },
  {
    id: 1,
    name: "Accessories Stores",
    image: img9, // Replace with actual image URL
  },
];

const Section4 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container
      sx={{
        margin: "0px auto",
        marginTop: "70px",
        marginBottom: "50px",
        height: "550px",
      }}
    >
      <Box
        sx={{
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="subtitle_alata" align="center" gutterBottom>
          Recently Viewed
        </Typography>
      </Box>

      <Slider {...settings}>
        {dresses.map((dress, index) => (
          <LazyLoad key={index} height={200} offset={100} once>
            <Section2Drawer
              name={dress.name}
              image={dress.image}
              id={dress.id}
            />
          </LazyLoad>
        ))}
      </Slider>
    </Container>
  );
};

export default Section4;
