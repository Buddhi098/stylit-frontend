import React from "react";
import { Box, Typography, Grid, Link, Stack } from "@mui/material";

const categories = [
  {
    title: "Dresses",
    items: [
      "Maxi Dresses",
      "Midi Dresses",
      "Mini Dresses",
      "Bodycon Dresses",
      "A-line Dresses",
      "Wrap Dresses",
    ],
  },
  {
    title: "Tops",
    items: [
      "Short Sleeve T-Shirts",
      "Long Sleeve T-Shirts",
      "Shirts",
      "Tank Tops",
      "Off-the-Shoulder Tops",
      "High-Neck Blouses",
    ],
  },
  {
    title: "Bottoms",
    subcategories: [
      {
        subtitle: "Pants",
        items: ["Jeans", "Palazzo Pants", "Joggers", "Leggings"],
      },
      {
        subtitle: "Skirts",
        items: ["A-line Skirts", "Pencil Skirts", "Dress Trousers"],
      },
      {
        subtitle: "Shorts",
        items: ["Denim Shorts" , "Shorts"],
      },
    ],
    items: ["Shop All Bottoms"],
  },
  {
    title: "Outwear",
    items: ["Jackets", "Coats", "Blazers" , "Cardigans"],
  },
  {
    title: "Suits",
    items: [
      "Two-Piece Suits",
      "Jumpsuits",
      "Blazer & Skirt Suits",
      "Blazer & Trouser Suits",
    ],
  },
];

const Section1 = () => {
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
                <Typography variant="body1_nunito" color="#999999" gutterBottom>
                  {category.title}
                </Typography>
                {category.items &&
                  category.items.map((item, idx) => (
                    <Link
                      width="150px"
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
                      <Typography variant="body2_nunito">{item}</Typography>
                    </Link>
                  ))}
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
        </Stack>
      </Grid>
    </Box>
  );
};

export default Section1;
