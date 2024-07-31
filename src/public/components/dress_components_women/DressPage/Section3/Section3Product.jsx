import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Stack,
} from "@mui/material";
import img1 from "../../../../../temp_images/Women/img (19).jpeg";
import img2 from "../../../../../temp_images/Women/img (20).jpeg";
import img3 from "../../../../../temp_images/Women/img (21).jpeg";
import img4 from "../../../../../temp_images/Women/img (15).jpeg";
import img5 from "../../../../../temp_images/Women/img (14).jpeg";

const products = [
  {
    img: img1,
    title: "AMANI Pull on wide leg jean",
    brand: "JAMIE & ANNIE",
    price: "Rs 6350",
    color: "Black",
  },
  {
    img: img2,
    title: "SARA Skinny fit jeans",
    brand: "JAMIE & ANNIE",
    price: "Rs 7250",
    color: "Blue",
  },
  {
    img: img3,
    title: "EMMA Straight leg jeans",
    brand: "JAMIE & ANNIE",
    price: "Rs 5800",
    color: "Gray",
  },
  {
    img: img4,
    title: "AVA High waist jeans",
    brand: "JAMIE & ANNIE",
    price: "Rs 6900",
    color: "White",
  },
];

const Section3Product = () => {
  const [size, setSize] = useState("");
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleProductChange = (product) => {
    setCurrentProduct(product);
  };

  return (
    <Box
      sx={{
        width: "60%",
        height: "60%",
        background: "white",
        padding: "30px",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src={currentProduct.img}
            alt="Product"
            sx={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle_alata" fontWeight="bold" color={"#444444"}>
            {currentProduct.title}
          </Typography>
          <Typography variant="body1_alata" color="textSecondary">
            {currentProduct.brand}
          </Typography>
          <Typography variant="body1_alata" sx={{ marginY: 2 }}>
            {currentProduct.price}
          </Typography>
          <Typography variant="body2_alata">
            COLOR:{" "}
            <Typography variant="body2_alata" color="#999999">
              {currentProduct.color}
            </Typography>{" "}
          </Typography>
          <Stack width={"80%"} margin="16px 0px">
            <Select
              value={size}
              onChange={handleSizeChange}
              size="small"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                borderRadius: 0,
                border: "1px solid #000000",
                "& .MuiSelect-select": {
                  padding: "4px 14px",
                },
              }}
            >
              <MenuItem value="">
                <Typography variant="body2_nunito">Please Select</Typography>
              </MenuItem>
              <MenuItem value={"S"}>S</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"L"}>L</MenuItem>
              <MenuItem value={"XL"}>XL</MenuItem>
            </Select>
          </Stack>
          <Stack width="80%" direction={"row"} marginTop={1} spacing={0.3}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "0",
              }}
              disableFocusRipple
              disableRipple
            >
              <Typography variant="body2_nunito">ADD TO BAG</Typography>
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                width: "100%",
                border: "1px solid #000000",
                color: "#000000",
                borderRadius: "0",
              }}
              disableFocusRipple
              disableRipple
            >
              <Typography variant="body2_nunito">VIEW FULL DETAILS</Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        {products.map((product, index) => (
          <Grid item xs={3} key={index}>
            <Box
              component="img"
              src={product.img}
              alt="Related Product"
              sx={{ width: "100%", height: "130px", objectFit: "cover", cursor: "pointer" }}
              onClick={() => handleProductChange(product)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section3Product;
