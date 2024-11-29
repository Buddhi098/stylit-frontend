import { Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

import ProductImage from "./Section1/ProductImage";
import ProductDetails from "./Section1/ProductDetails";
import api from "../../../api/api";
import { storage } from "../../../../config/firebaseConfig";
import { getDownloadURL, listAll, ref } from "firebase/storage";

const Section1 = ({ gender, id , color}) => {
  const [images, setImages] = useState([]);
  const [product , setProduct] = useState({});

  const downloadAllImages = async (folderPath) => {
    try {
      const folderRef = ref(storage, folderPath);
      const folderSnapshot = await listAll(folderRef);

      const imageUrls = await Promise.all(
        folderSnapshot.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return url;
        })
      );

      return imageUrls; // Array of URLs for all images in the folder
    } catch (error) {
      console.error("Error fetching images from Firebase", error);
      return null;
    }
  };

  useEffect(() => {
    let isMounted = true;

    const getProductDetails = async () => {
      try {
        const response = await api.get(`/public/product/get_product_by_id/${id}`);
        console.log(response.data.data.product);
        const product = response.data.data.product;
        setProduct(product);
        const imageList = await downloadAllImages(`/productImages/${product.id}${color}`);

        if (isMounted && imageList) {
          setImages(imageList);
          console.log(imageList);
        }

      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    getProductDetails();

    return () => {
      isMounted = false; // Cleanup function to prevent state update on unmounted component
    };
  }, [id]);

  return (
    <Stack direction="row" width={"80%"} sx={{ margin: "20px auto", marginTop: "180px" }} minHeight={"600px"} spacing={2}>
      <ProductImage images={images}/>
      <ProductDetails product={product} gender={gender} color={color}/>
    </Stack>
  );
};

export default Section1;
