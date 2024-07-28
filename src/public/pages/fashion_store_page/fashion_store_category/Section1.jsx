// src/components/FashionCategories.js
import React from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";
import img1 from "../../../assets/images/fashion_store_page/s11.png";
import img2 from "../../../assets/images/fashion_store_page/s12.png";
import img3 from "../../../assets/images/fashion_store_page/s13.png";
import img4 from "../../../assets/images/fashion_store_page/s14.png";
import img5 from "../../../assets/images/fashion_store_page/s15.png";
import img6 from "../../../assets/images/fashion_store_page/s16.png";
import img7 from "../../../assets/images/fashion_store_page/s17.png";
import img8 from "../../../assets/images/fashion_store_page/s18.png";
import img9 from "../../../assets/images/fashion_store_page/s19.png";

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

const Section1 = () => {
  return (
    <Box style={{ padding: "20px" }}>
      <Stack margin="16px 0px">
        <Typography variant="subtitle_alata" align="center" gutterBottom>
          Fashion Store Categories
        </Typography>
        <Typography
          variant="body1_nunito"
          align="center"
          color={"#999999"}
          gutterBottom
        >
          Explore our categorized sections to find the perfect store for your
          needs.
        </Typography>
      </Stack>

      <Grid
        container
        spacing={4}
        padding={2}
        width={"80%"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px auto",
        }}
      >
        {categories.map((category, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={category.image}
                alt={category.title}
                sx={{
                  width: "98%",
                  height: "auto",
                  maxWidth: "400px",
                  margin: "10px auto",
                  '&:hover': {
                    filter: 'brightness(0.9)',
                  },
                }}
              />
              <Box sx={{ position: "absolute", bottom: "40px", left: "50px" }}>
                <Typography variant="body1_alata" color="#ffffff" mt={2}>
                  {category.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section1;