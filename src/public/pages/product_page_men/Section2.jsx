import React, { useState } from "react";
import {
  Stack,
  Box,
  Button,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Grid,
  Typography,
  Paper,
  Avatar,
  Pagination,
} from "@mui/material";
import DressCard from "../../components/dress_components_men/DressCard";
import img1 from "../../../temp_images/Men/img (1).jpeg";
import img2 from "../../../temp_images/Men/img (2).jpeg";
import img3 from "../../../temp_images/Men/img (3).jpeg";
import img4 from "../../../temp_images/Men/img (4).jpeg";
import img5 from "../../../temp_images/Men/img (5).jpeg";
import img6 from "../../../temp_images/Men/img (6).jpeg";
import img7 from "../../../temp_images/Men/img (7).jpeg";
import img8 from "../../../temp_images/Men/img (8).jpeg";
import img9 from "../../../temp_images/Men/img (9).jpeg";
import img10 from "../../../temp_images/Men/img (10).jpeg";
import img11 from "../../../temp_images/Men/img (11).jpeg";
import img12 from "../../../temp_images/Men/img (12).jpeg";
import img13 from "../../../temp_images/Men/img (13).jpeg";
import img14 from "../../../temp_images/Men/img (14).jpeg";
import img15 from "../../../temp_images/Men/img (15).jpeg";
import img16 from "../../../temp_images/Men/img (16).jpeg";
import img17 from "../../../temp_images/Men/img (17).jpeg";
import img18 from "../../../temp_images/Men/img (18).jpeg";
import img19 from "../../../temp_images/Men/img (19).jpeg";
import img20 from "../../../temp_images/Men/img (20).jpeg";
import img21 from "../../../temp_images/Men/img (21).jpeg";
import img22 from "../../../temp_images/Men/img (22).jpeg";
import img23 from "../../../temp_images/Men/img (23).jpeg";
import img24 from "../../../temp_images/Men/img (24).jpeg";
import img25 from "../../../temp_images/Men/img (25).jpeg";
import img26 from "../../../temp_images/Men/img (26).jpeg";
import img27 from "../../../temp_images/Men/img (27).jpeg";
import img28 from "../../../temp_images/Men/img (28).jpeg";
import img29 from "../../../temp_images/Men/img (29).jpeg";
import img30 from "../../../temp_images/Men/img (30).jpeg";

const Section2 = ({ image }) => {
  const [sort, setSort] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [appliedSort, setAppliedSort] = useState("");
  const [appliedColors, setAppliedColors] = useState([]);
  const [appliedSizes, setAppliedSizes] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 9; // Adjust this number based on your design

  const colors = [
    { name: "Black", color: "#000000" },
    { name: "White", color: "#FFFFFF" },
    { name: "Gray", color: "#BDBDBD" },
    { name: "Red", color: "#D21B28" },
    { name: "Pink", color: "#FFB6B6" },
    { name: "Orange", color: "#FFBA09" },
    { name: "Yellow", color: "#FFF72E" },
    { name: "Green", color: "#4ECB71" },
    { name: "Blue", color: "#6CB4EE" },
    { name: "Purple", color: "#A669B0" },
    { name: "Brown", color: "#C0A888" },
    { name: "Beige", color: "#F8E8DC" },
    {
      name: "Multicolor",
      color:
        "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
    },
    {
      name: "B&W",
      color:
        "repeating-linear-gradient(45deg, #000, #000 10px, #fff 10px, #fff 20px)",
    },
  ];

  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

  const sampleClothes = [
    { id: 1, name: "The Organic Cotton Tee Dress", price: 5400, colors: ["Black", "Gray"], size: "M", image: img1 },
    { id: 2, name: "Classic White Shirt", price: 4500, colors: ["White"], size: "L", image: img2 },
    { id: 3, name: "Casual Blue Jeans", price: 3200, colors: ["Blue"], size: "M", image: img3 },
    { id: 4, name: "Summer Yellow Top", price: 2500, colors: ["Yellow", "Red"], size: "S", image: img4 },
    { id: 5, name: "Elegant Gray Skirt", price: 4800, colors: ["Gray"], size: "XL", image: img5 },
    { id: 6, name: "Red Party Dress", price: 6200, colors: ["Red"], size: "S", image: img6 },
    { id: 7, name: "Casual Green Jacket", price: 5500, colors: ["Green"], size: "L", image: img7 },
    { id: 8, name: "Stylish Black Jeans", price: 3300, colors: ["Black"], size: "M", image: img8 },
    { id: 9, name: "Classic Blue Sweater", price: 4200, colors: ["Blue"], size: "M", image: img9 },
    { id: 10, name: "Chic Red Blouse", price: 3700, colors: ["Red"], size: "S", image: img10 },
    { id: 11, name: "Formal Black Suit", price: 7500, colors: ["Black"], size: "L", image: img11 },
    { id: 12, name: "Denim Shorts", price: 2900, colors: ["Blue"], size: "S", image: img12 },
    { id: 13, name: "Elegant White Gown", price: 8800, colors: ["White"], size: "M", image: img13 },
    { id: 14, name: "Comfy Grey Hoodie", price: 5000, colors: ["Grey"], size: "L", image: img14 },
    { id: 15, name: "Trendy Beige Coat", price: 6000, colors: ["Beige"], size: "M", image: img15 },
    { id: 16, name: "Casual Orange T-Shirt", price: 2200, colors: ["Orange"], size: "S", image: img16 },
    { id: 17, name: "Summer Green Dress", price: 4700, colors: ["Green"], size: "M", image: img17 },
    { id: 18, name: "Business Casual Pants", price: 3900, colors: ["Black"], size: "L", image: img18 },
    { id: 19, name: "Sporty White Jacket", price: 5300, colors: ["White"], size: "L", image: img19 },
    { id: 20, name: "Elegant Red Scarf", price: 2800, colors: ["Red"], size: "One Size", image: img20 },
    { id: 21, name: "Casual Light Blue Shirt", price: 3100, colors: ["Light Blue"], size: "M", image: img21 },
    { id: 22, name: "Sophisticated Black Dress", price: 6900, colors: ["Black"], size: "S", image: img22 },
    { id: 23, name: "Playful Pink Skirt", price: 2600, colors: ["Pink"], size: "M", image: img23 },
    { id: 24, name: "Cozy Maroon Sweater", price: 4400, colors: ["Maroon"], size: "L", image: img24 },
    { id: 25, name: "Classic Beige Trousers", price: 3500, colors: ["Beige"], size: "XL", image: img25 },
    { id: 26, name: "Trendy Black Shorts", price: 3100, colors: ["Black"], size: "S", image: img26 },
    { id: 27, name: "Smart Grey Blazer", price: 5800, colors: ["Grey"], size: "M", image: img27 },
    { id: 28, name: "Elegant Navy Dress", price: 7200, colors: ["Navy"], size: "S", image: img28 },
    { id: 29, name: "Comfortable White Pants", price: 3400, colors: ["White"], size: "L", image: img29 },
    { id: 30, name: "Casual Brown Vest", price: 4000, colors: ["Brown"], size: "M", image: img30 },
  ];

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleClear = () => {
    setSort("");
    setSelectedColors([]);
    setSelectedSizes([]);
    setAppliedSort("");
    setAppliedColors([]);
    setAppliedSizes([]);
  };

  const handleApply = () => {
    setAppliedSort(sort);
    setAppliedColors(selectedColors);
    setAppliedSizes(selectedSizes);
  };

  const filterAndSortClothes = () => {
    let filteredClothes = sampleClothes;

    if (appliedColors.length > 0) {
      filteredClothes = filteredClothes.filter((item) =>
        item.colors.some((color) => appliedColors.includes(color))
      );
    }

    if (appliedSizes.length > 0) {
      filteredClothes = filteredClothes.filter((item) =>
        appliedSizes.includes(item.size)
      );
    }

    if (appliedSort === "Low to High") {
      filteredClothes.sort((a, b) => a.price - b.price);
    } else if (appliedSort === "High to Low") {
      filteredClothes.sort((a, b) => b.price - a.price);
    }

    return filteredClothes;
  };

  const filteredClothes = filterAndSortClothes();

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredClothes.length / itemsPerPage);

  // Get the current page items
  const paginatedClothes = filteredClothes.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ width: "80%", margin: "80px auto" }}
    >
      <Stack spacing={2} sx={{ width: "15%" }}>
        <FormControl component="fieldset">
          <Typography variant="body2_alata" color={"#444444"}>
            Sort by
          </Typography>
          <RadioGroup value={sort} onChange={handleSortChange}>
            <FormControlLabel
              value="Featured"
              control={<Radio />}
              label={
                <Typography variant="body2_nunito" color={"#444444"}>
                  Featured (Default)
                </Typography>
              }
            />
            <FormControlLabel
              value="Newest"
              control={<Radio />}
              label={
                <Typography variant="body2_nunito" color={"#444444"}>
                  Newest
                </Typography>
              }
            />
            <FormControlLabel
              value="Low to High"
              control={<Radio />}
              label={
                <Typography variant="body2_nunito" color={"#444444"}>
                  Price: Low to High
                </Typography>
              }
            />
            <FormControlLabel
              value="High to Low"
              control={<Radio />}
              label={
                <Typography variant="body2_nunito" color={"#444444"}>
                  Price: High to Low
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>
        <Box>
          <Typography variant="body2_alata" color={"#444444"}>
            Color
          </Typography>
          <Grid container spacing={1} marginTop={1}>
            {colors.map((color) => (
              <Grid item xs={4} key={color.name} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                  onClick={() => handleColorChange(color.name)}
                >
                  <Box
                    sx={{
                      bgcolor:
                        color.name === "Multicolor" || color.name === "B&W"
                          ? "transparent"
                          : color.color,
                      background:
                        color.name === "Multicolor" || color.name === "B&W"
                          ? color.color
                          : color.color,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: selectedColors.includes(color.name)
                        ? "2px solid black"
                        : "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {selectedColors.includes(color.name) && (
                      <span>&#10003;</span>
                    )}
                  </Box>
                  <Typography variant="body2_nunito" fontSize={"10px"} color="">
                    {color.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          <Typography variant="body2_alata" color={"#444444"}>
            Size
          </Typography>
          <Grid container spacing={1} marginTop={1}>
            {sizes.map((size) => (
              <Grid item xs={4} key={size}>
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: selectedSizes.includes(size)
                      ? "2px solid black"
                      : "2px solid #f0f0f0",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSizeChange(size)}
                >
                  <Typography variant="body2_nunito">{size}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" size="small" sx={{ borderRadius: "0", color: "#000000", border: "1px solid #000000" }} onClick={handleClear}>
            <Typography variant="body2_nunito">Clear</Typography>
          </Button>
          <Button variant="contained" size="small" sx={{ borderRadius: "0", color: "#ffffff", background: "#000000" }} onClick={handleApply}>
            <Typography variant="body2_nunito">Apply</Typography>
          </Button>
        </Stack>
      </Stack>
      <Stack sx={{ width: "85%" }}>
        <Grid container spacing={2}>
          {paginatedClothes.map((item) => (
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end" }} key={item.id}>
              <DressCard colors={item.colors} name={item.name} price={item.price} img={item.image} id={item.id} />
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section2;
