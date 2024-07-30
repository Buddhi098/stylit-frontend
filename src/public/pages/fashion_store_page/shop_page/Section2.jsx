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
} from "@mui/material";
import DressCard from "../../../components/dress_components/DressCard";
import img from "../../../assets/images/women_page/cover.png"

const Section2 = () => {
  const [sort, setSort] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const [appliedSort, setAppliedSort] = useState("");
  const [appliedColors, setAppliedColors] = useState([]);
  const [appliedSizes, setAppliedSizes] = useState([]);

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
    {
      id: 1,
      name: "The Organic Cotton Tee Dress",
      price: 5400,
      colors: ["Black", "Gray"],
      size: "M",
    },
    {
      id: 2,
      name: "Classic White Shirt",
      price: 4500,
      colors: ["White"],
      size: "L",
    },
    {
      id: 3,
      name: "Casual Blue Jeans",
      price: 3200,
      colors: ["Blue"],
      size: "M",
    },
    {
      id: 4,
      name: "Summer Yellow Top",
      price: 2500,
      colors: ["Yellow", "Red"],
      size: "S",
    },
    {
      id: 5,
      name: "Elegant Gray Skirt",
      price: 4800,
      colors: ["Gray"],
      size: "XL",
    },
    { id: 6, name: "Red Party Dress", price: 6200, colors: ["Red"], size: "S" },
  ];

  const handleSortChange = (event) => {
    // event.stopPropagation();
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
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    border: selectedSizes.includes(size)
                      ? "2px solid black"
                      : "2px solid #f0f0f0",
                    cursor:"pointer"
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
          <Button variant="outlined" size="small" sx={{borderRadius:"0" , color:"#000000" , border:"1px solid #000000"}} onClick={handleClear}>
            <Typography variant="body2_nunito">Clear</Typography>
          </Button>
          <Button variant="contained" size="small" sx={{borderRadius:"0" , color:"#ffffff" , background:"#000000"}} onClick={handleApply}>
          <Typography variant="body2_nunito">Apply</Typography>
          </Button>
        </Stack>
      </Stack>
      <Grid container spacing={2} sx={{ width: "85%" }}>
        {filteredClothes.map((item) => (
          <Grid item xs={4} sx={{display:"flex" , justifyContent:"flex-end"}}>
            <DressCard colors={item.colors} name={item.name} price={item.price} img={img} id={item.id}/>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Section2;
