import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BreadCrumb from "./BreadCrumb";
import StarRating from "./StarRating";
import SizeChart from "./SizeChart";
import ClothAccordion from "./ClothAccordion";
import Section1Drawer from "./Section1Drawer/Section1Drawer";
import api from "../../../../api/api";

const ProductDetails = ({ product, gender, color }) => {
  const [selectedColor, setColor] = useState(color);
  const [shopName, setShopName] = useState("ALISA BOUTIQUE");
  const [colors, setColors] = useState([]);
  const [sizeChart, setSizeChart] = useState([]);

  useEffect(() => {
    const getShopId = async () => {
      if (!product) return;
      const shopId = product.shopId;
      try {
        const response = await api.get(
          `/public/user/getShopsNameById/${shopId}`
        );
        setShopName(response.data.data.shopName);
      } catch (error) {
        console.error("Error fetching shop name:", error);
      }
    };

    const updateColors = () => {
      if (!product) return;
      const colorVariants =
        product.variantBoxes?.map((variant) => variant.colorVariant) || [];
      setColors(colorVariants);
      if (colorVariants.length > 0) {
        setColor(color); // Set the first color as default
      }
    };

    const updateSizeChart = () => {
      if (!product) return;

      const variantBox = product.variantBoxes?.find(
        (variant) => variant.colorVariant === color
      );

      const sizeChart =
        variantBox?.sizeQuantityChart?.map((size) => size.size) || [];

      console.log(sizeChart);
      setSizeChart(sizeChart);
    };

    getShopId();
    updateColors();
    updateSizeChart();
  }, [product]);

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
            {selectedColor}
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

      <Stack spacing={0.3}>
        <SizeChart id={product.id} sizeChart={sizeChart}/>
      </Stack>

      <Stack marginTop={4} spacing={0.3}>
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
      </Stack>

      <Stack>
        <ClothAccordion />
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
