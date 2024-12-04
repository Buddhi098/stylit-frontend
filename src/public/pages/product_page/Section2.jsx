import React, { useEffect, useState } from "react";
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
import DressCard from "../../components/dress_component/DressCard";
import { colors } from "./Color";
import notFoundImg from "../../assets/images/product_page/not_found.jpg";
import api from "../../api/api";
import { storage } from "../../../config/firebaseConfig";
import { getDownloadURL, ref } from "firebase/storage";

const Section2 = ({ image, data }) => {
  const [sort, setSort] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [appliedSort, setAppliedSort] = useState("");
  const [appliedColors, setAppliedColors] = useState([]);
  const [appliedSizes, setAppliedSizes] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 9; // Adjust this number based on your design
  const [sampleClothes, setSampleClothes] = useState([]);
  const [totalCloth, setTotalCloth] = useState(0);

  const getImageFromFirebase = async (imagePath) => {
    try {
      const imageRef = ref(storage, imagePath);
      const url = await getDownloadURL(imageRef);
      return url;
    } catch (error) {
      console.error("Error fetching image from Firebase", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        for (const key in data) {
          if (data[key] !== undefined) {
            formData.append(key, data[key]);
          }
        }
        formData.append("page", page - 1);

        const response = await api.post('/public/product/get_filtered_product', formData);

        const productArray = response.data;

        // Use Promise.all to handle asynchronous operations in map
        const mappedProducts = await Promise.all(
          productArray.map(async (product) => {
            const variantData = await Promise.all(
              product.variantBoxes.map(async (variant) => {
                const imageUrl = await getImageFromFirebase(
                  `productImages/${product.id}${variant.colorVariant}/img0`
                );
                return {
                  variantId: variant.id,
                  id: product.id,
                  name: product.generalInformation.productName,
                  price: parseInt(product.pricing.basePrice, 10),
                  colors: variant.colorVariant ? [variant.colorVariant] : [],
                  image: imageUrl || notFoundImg, // Fallback image if not found
                };
              })
            );
            return variantData; // Return all the variant data for this product
          })
        );

        // Flatten the array of arrays if necessary
        const flattenedMappedProducts = mappedProducts.flat();

        if (mappedProducts.length === 9) {
          setTotalCloth((page * 9) + 1);
        } else {
          setTotalCloth(page * 9);
        }

        setSampleClothes(flattenedMappedProducts);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    };

    fetchData();
  }, [page, data]);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
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
  const totalPages = Math.ceil(totalCloth / itemsPerPage);

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
              label={<Typography variant="body2_nunito" color={"#444444"}>Featured (Default)</Typography>}
            />
            <FormControlLabel
              value="Newest"
              control={<Radio />}
              label={<Typography variant="body2_nunito" color={"#444444"}>Newest</Typography>}
            />
            <FormControlLabel
              value="Low to High"
              control={<Radio />}
              label={<Typography variant="body2_nunito" color={"#444444"}>Price: Low to High</Typography>}
            />
            <FormControlLabel
              value="High to Low"
              control={<Radio />}
              label={<Typography variant="body2_nunito" color={"#444444"}>Price: High to Low</Typography>}
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
                    {selectedColors.includes(color.name) && <span>&#10003;</span>}
                  </Box>
                  <Typography variant="body2_nunito" fontSize={"10px"}>
                    {color.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            size="small"
            sx={{ borderRadius: "0", color: "#000000", border: "1px solid #000000" }}
            onClick={handleClear}
          >
            <Typography variant="body2_nunito">Clear</Typography>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ borderRadius: "0", color: "#ffffff", background: "#000000" }}
            onClick={handleApply}
          >
            <Typography variant="body2_nunito">Apply</Typography>
          </Button>
        </Stack>
      </Stack>
      <Stack sx={{ width: "85%" }}>
        <Grid container spacing={2}>
          {filteredClothes.map((item) => (
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end" }} key={item.id}>
              <DressCard
                colors={item.colors}
                name={item.name}
                price={item.price}
                img={item.image}
                id={item.id}
                variantId={item.variantId}
                gender={data.gender}
              />
            </Grid>
          ))}
        </Grid>
        {filteredClothes.length === 0 && (
          <Paper
            elevation={0}
            sx={{
              textAlign: "center",
              padding: "20px",
              marginTop: "20px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Avatar
              src={notFoundImg}
              sx={{ width: 100, height: 100, margin: "0 auto 10px" }}
            />
            <Typography variant="h6" color="text.secondary">
              No products found
            </Typography>
          </Paper>
        )}
        <Box sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Section2;
