import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router";

const colorCode = {
  Black: "#000000",
  White: "#FFFFFF",
  Gray: "#BDBDBD",
  Red: "#D21B28",
  Pink: "#FFB6B6",
  Orange: "#FFBA09",
  Yellow: "#FFF72E",
  Green: "#4ECB71",
  Blue: "#6CB4EE",
  Purple: "#A669B0",
  Brown: "#C0A888",
  Beige: "#F8E8DC",
  Multicolor:
    "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
  "B&W":
    "repeating-linear-gradient(45deg, #000, #000 10px, #fff 10px, #fff 20px)",
};

const ProductCard = ({ colors ,name , price , img , id}) => {
  const [selectedColor, setColor] = useState(colors[0]);
  const navigate = useNavigate();

  const handleNavigateToDressPage = (id) =>{
    navigate(`/public/dress/${id}`)
  }
  return (
    <Box
      sx={{
        width: "310px",
        padding: "0",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
        },
      }}

      onClick = {handleNavigateToDressPage(id)}
    >
      <Box
      component="img"
      src={img}
        sx={{
          backgroundColor: "#e0e0e0",
          height: "400px",
          width:"310px",
          marginBottom: "16px",
          objectFit: "cover",
        }}
      ></Box>
      <Stack spacing={1} padding={"4px"}>
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2_nunito">
            {name}
          </Typography>
          <Typography variant="body1" sx={{ color: "#777" }}>
            Rs. {price}
          </Typography>
        </Stack>
        <Typography variant="body2_nunito" color="#999999">
          {selectedColor}
        </Typography>
        <Stack direction="row" spacing={1}>
          {colors.map((color) => (
            <Box key={color} sx={{
              width:"24px",
              height:"24px",
              borderRadius:"50%",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              border: selectedColor === color ? "1px solid #000" : "none",
            }}>
              <Box
                key={color}
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: colorCode[color],
                }}
                onMouseEnter={() => setColor(color)}
              /> 
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductCard;
