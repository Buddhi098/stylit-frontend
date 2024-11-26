import React, { useEffect } from "react";
import { Grid, Box } from "@mui/material";

import NotFound from "../../../../assets/images/product_page/not_found.jpg"

const ProductImage = ({images}) => {
  const [mainImage, setMainImage] = React.useState(null);

  useEffect(()=>{
    if(images.length>0){
      setMainImage(images[1]);
    }else{
      setMainImage(NotFound);
    }
  },[images])

  const handleImage = (image) => () => {
    setMainImage(image);
  };

  return (
    <Box sx={{ height: "600px", width: "700px" }}>
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
            alt="Not Found"
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
                onMouseEnter={handleImage(image)}
              >
                <Box
                  component={"img"}
                  src={image || NotFound}
                  alt=""
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
