import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, FormControl, InputLabel, Select, MenuItem, Snackbar, Alert } from "@mui/material";
import api from "../../../../api/api";
import BreadCrumb from "./BreadCrumb";
import StarRating from "./StarRating";
import Section1Drawer from "./Section1Drawer/Section1Drawer";
import ClothAccordion from "./ClothAccordion";
import WebApi from "../../../../api/webApi";

const ProductDetails = ({ product, gender, color }) => {
  const [selectedColor, setColor] = useState(color);
  const [selectedSize, setSelectedSize] = useState(null); // New state for selected size
  const [shopName, setShopName] = useState("ALISA BOUTIQUE");
  const [colors, setColors] = useState([]);
  const [sizeChart, setSizeChart] = useState([]);
  const [stock, setStock] = useState({});
  const [variantId, setVariantId] = useState(null);
  const [cartStatus, setCartStatus] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [error, setError] = useState(""); // New state for error message

  useEffect(() => {
    const getShopId = async () => {
      if (!product) return;
      const shopId = product.shopId;
      try {
        const response = await api.get(`/public/user/getShopsNameById/${shopId}`);
        const variantBox = product.variantBoxes?.find((variant) => variant.colorVariant === color);
        const response2 = await WebApi.get(`/shopper/order/isInCart/${product.id}/${variantBox.id}/${localStorage.getItem("id")}`);
        if (response2.data === "yes") {
          setIsInCart(true);
        }
        setShopName(response.data.data.shopName);
      } catch (error) {
        console.error("Error fetching shop name:", error);
      }
    };

    const updateColors = () => {
      if (!product) return;
      const colorVariants = product.variantBoxes?.map((variant) => variant.colorVariant) || [];
      setColors(colorVariants);
      if (colorVariants.length > 0) {
        setColor(color); // Set the first color as default
      }
    };

    const updateSizeChart = () => {
      if (!product) return;
      const variantBox = product.variantBoxes?.find((variant) => variant.colorVariant === color);
      if (variantBox) {
        const sizeChartData = variantBox.sizeQuantityChart.map((size) => ({
          size: size.size,
          quantity: size.quantity,
        }));
        setSizeChart(sizeChartData);
        const stockData = sizeChartData.reduce((acc, item) => {
          acc[item.size] = item.quantity;
          return acc;
        }, {});
        setStock(stockData);
        setVariantId(variantBox.id);
      }
    };

    getShopId();
    updateColors();
    updateSizeChart();
  }, [product, color]);

  const handleAddToCart = async () => {
    if (!product || variantId === null || !selectedColor || !selectedSize) {
      setError("Please select both color and size before adding to the cart.");
      return;
    }
    setError(""); // Clear any previous errors

    const cartItem = {
      userId: localStorage.getItem("id"),
      cartItemsDto: [
        {
          productId: product.id,
          variantId: variantId,
          productName: product.generalInformation?.productName || "Unknown Product",
          color: selectedColor,
          size: selectedSize,
          price: product.pricing?.basePrice || 0,
          quantity: 1,
        },
      ],
    };

    try {
      await WebApi.post("/shopper/order/addItemToCart", cartItem);
      setCartStatus(true);
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const handleRemoveFromCart = () => {
    try {
      const variantBox = product.variantBoxes?.find((variant) => variant.colorVariant === color);
      WebApi.get(`/shopper/order/removeItemFromCart/${product.id}/${variantBox.id}/${localStorage.getItem("id")}`);
      setCartStatus(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Stack direction={"column"} spacing={2} paddingLeft={4}>
      <Box>
        <BreadCrumb gender={gender} />
      </Box>

      <Stack marginTop={2} spacing={0.3}>
        <Typography variant="subtitle_alata" fontSize={"20px"}>
          {product.generalInformation?.productName || "Product Name"}
        </Typography>
        <Typography variant="body2_nunito" fontSize={"10px"} color={"#999999"}>
          {shopName}
        </Typography>
      </Stack>

      <Stack marginTop={2} spacing={0.3}>
        <Typography variant="subtitle_alata" color={"#000000"}>
          ${product.pricing?.basePrice || "0.00"}
        </Typography>
        <Typography variant="body2_nunito" color={"#999999"}>
          Inclusive of all taxes
        </Typography>
        <StarRating ratings={product.ratings || 4.2} />
      </Stack>

      <Stack marginTop={2} spacing={0.3}>
        <Stack direction={"row"}>
          <Typography variant="body1_alata">Color: </Typography>
          <Typography variant="body1_alata" color={"#999999"} marginLeft={0.5}>
            {selectedColor || "Select a color"}
          </Typography>
        </Stack>
        <Stack direction={"row"} marginTop={1} spacing={1}>
          {colors.map((color) => (
            <Section1Drawer
              key={color}
              setColor={setColor}
              color={color}
              selectedColor={selectedColor}
            />
          ))}
        </Stack>
      </Stack>

      <Stack marginTop={2} spacing={0.3}>
        <Stack direction={"row"}>
          <Typography variant="body1_alata">Size: </Typography>
          <Typography variant="body1_alata" color={"#999999"} marginLeft={0.5}>
            {selectedSize || "Select a size"}
          </Typography>
        </Stack>
        <SizeChart id={product.id} sizeChart={sizeChart} stock={stock} setSelectedSize={setSelectedSize} />
      </Stack>

      {error && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          {error}
        </Alert>
      )}

      <Stack marginTop={4} spacing={0.3}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "100%",
            backgroundColor: (cartStatus || isInCart) ? "#FF0000" : "#000000",
            color: "#ffffff",
            borderRadius: "0",
          }}
          disableFocusRipple
          disableRipple
          onClick={(cartStatus || isInCart) ? handleRemoveFromCart : handleAddToCart}
        >
          <Typography variant="body2_nunito">
            {(cartStatus || isInCart) ? "REMOVE FROM BAG" : "ADD TO BAG"}
          </Typography>
        </Button>
      </Stack>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Item added to cart"
      />

      <Stack>
        <ClothAccordion product={product} />
      </Stack>
    </Stack>
  );
};

const SizeChart = ({ id, sizeChart, stock, setSelectedSize }) => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="size-select-label">Select Size</InputLabel>
      <Select
        label="Select Size"
        defaultValue=""
        onChange={(e) => setSelectedSize(e.target.value)}
      >
        {sizeChart.map((sizeData) => (
          <MenuItem
            key={sizeData.size}
            value={sizeData.size}
            disabled={stock[sizeData.size] === 0}
          >
            {sizeData.size} - {stock[sizeData.size] > 0 ? `${stock[sizeData.size]} in stock` : "Out of stock"}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProductDetails;
