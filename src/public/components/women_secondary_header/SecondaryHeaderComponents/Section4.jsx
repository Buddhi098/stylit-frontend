import React from "react";
import { Box, Typography, Grid, Link, Stack } from "@mui/material";
import img from "../../../assets/images/women_page/s22.png";

const categories = [
  {
    title: "BAGS",
    items: [
      "Shop All Bags",
      "Handbags",
      "Backpacks",
      "Clutches",
    ],
  },
  {
    title: "JEWELRY",
    items: [
      "Shop All Jewelry",
      "Necklaces",
      "Earrings",
      "Bracelets",
    ],
  },
  {
    title: "SCARVES & HATS",
    items: [
      "Shop All Scarves & Hats",
      "Scarves",
      "Beanies",
      "Fedoras",
    ],
  },
];

const Section4 = () => {
  return (
    <Box
      sx={{
        padding: 4,
        width: "80%", // Adjust the width as needed
        margin: "0 auto", // Center horizontally
        marginTop: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Stack direction="row" spacing={5}>
          {categories.map((category, index) => (
            <Box key={index}>
              <Grid item xs={5}>
                <Box width="200px" marginRight={10}>
                  <Typography
                    variant="body1_nunito"
                    color="#999999"
                    gutterBottom
                  >
                    {category.title}
                  </Typography>
                  {category.items &&
                    category.items.map((item, idx) => (
                      <Link
                        href="/public/product/women"
                        key={idx}
                        underline="none"
                        display="block"
                        color="inherit"
                        sx={{
                          margin: "20px 0",
                          color: "#333333", // Dark grey color
                          "&:hover": {
                            color: "#000000", // Black color on hover
                            textDecoration: "underline",
                          },
                        }}
                      >
                        <Typography variant="body2_nunito">
                          {item}
                        </Typography>
                      </Link>
                    ))}
                </Box>
                {category.subcategories && (
                  <Stack direction="row" spacing={10}>
                    {category.subcategories.map((subcategory, subIdx) => (
                      <Box key={subIdx}>
                        <Typography
                          variant="body1"
                          gutterBottom
                          sx={{ marginTop: 2 }}
                        >
                          <Typography variant="body1_nunito" color="#999999">
                            {subcategory.subtitle}
                          </Typography>
                        </Typography>
                        {subcategory.items.map((subitem, subitemIdx) => (
                          <Link
                            width="100px"
                            href="/public/product/women"
                            key={subitemIdx}
                            underline="none"
                            display="block"
                            color="inherit"
                            sx={{
                              margin: "20px 0",
                              color: "#333333", // Dark grey color
                              "&:hover": {
                                color: "#000000", // Black color on hover
                                textDecoration: "underline",
                              },
                            }}
                          >
                            <Typography variant="body2_nunito">
                              {subitem}
                            </Typography>
                          </Link>
                        ))}
                      </Box>
                    ))}
                  </Stack>
                )}
              </Grid>
            </Box>
          ))}
          <Grid item xs={5}>
            <Box
              component="img"
              src={img}
              width="300px"
            ></Box>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Section4;
