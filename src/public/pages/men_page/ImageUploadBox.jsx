// src/ImageUpload.js
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "10px",
      }}
    >
      <Typography variant="body1_alata" gutterBottom>
        Upload Image
      </Typography>
      <Box
        sx={{
          border: "2px dashed grey",
          borderRadius: "0px",
          padding: "20px",
          textAlign: "center",
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "200px",
            borderRadius: "0px",
            padding: "20px",
            position: "relative",
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <>
              <CloudUploadIcon fontSize="large" />
              <Typography variant="body1_alata" gutterBottom>
                Drag and drop an image here
              </Typography>
              <Button
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                Select an image
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </Button>
            </>
          )}
        </Box>
      </Box>
      <Typography
        variant="body2_nunito"
        color="textSecondary"
        sx={{ marginTop: "4px" }}
      >
        JPG, PNG / Max: 60 MB / Min: 224px x 224px
      </Typography>
      <Button variant="outlined" sx={{ marginTop: "16px" ,color:"#ffffff",background:"#000000",border:"1px solid #000000" , borderRadius:0 , "&:hover":{
        background:'#444444'
      } }}>
        <Typography variant="body2_nunito">Add Your Image</Typography>
      </Button>
    </Box>
  );
};

export default ImageUpload;
