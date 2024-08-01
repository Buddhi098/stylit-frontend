import React from "react";
import { Grid, Box } from "@mui/material";
import img from "../../../../../../../temp_images/Women/with_women/img (5).jpeg";
import img1 from "../../../../../../../temp_images/Women/with_women/img (6).jpeg";
import img2 from "../../../../../../../temp_images/Women/with_women/img (7).jpeg";
import img3 from "../../../../../../../temp_images/Women/with_women/img (8).jpeg";



const images = [
  {
    src: img, // Replace with the actual path
    alt: "Main Image",
  },
  {
    src: img1, // Replace with the actual path
    alt: "Small Image 1",
  },
  {
    src: img2, // Replace with the actual path
    alt: "Small Image 2",
  },
  {
    src: img3, // Replace with the actual path
    alt: "Small Image 3",
  },
];

const ProductImage = () => {
  const [mainImage, setMainImage] = React.useState(images[0].src);

  const handleImage = (image) => () => {
    setMainImage(image);
  };

  return (
    <Box sx={{ height: "600px", width: "100%" }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={mainImage}
            alt={images[0].alt}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container direction="column" spacing={2}>
            {images.map((image, index) => (
              <Grid
                item
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onMouseEnter={handleImage(image.src)}
              >
                <Box
                  component={"img"}
                  src={image.src}
                  alt={image.alt}
                  sx={{ width: "90%", height: "100px", objectFit: "cover" , "&:hover":{filter:"brightness(0.8)"} }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductImage;
