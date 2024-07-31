import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import img from "../../../public/assets/images/women_page/cover.png";
import { useNavigate } from "react-router";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import logo from "../../../public/assets/images/logo/Stylit_logo.png";
import cover from "../../../public/assets/images/men_page/cover.png"

const sampleItems = [
  {
    id: 1,
    title: "White Off Shoulder Top",
    brand: "ALISA",
    price: 4500,
    color: "White",
    image: img,
  },
  {
    id: 2,
    title: "Black Turtleneck Sweater",
    brand: "JAMIE & ANNIE",
    price: 5500,
    color: "Black",
    image: img,
  },
  {
    id: 3,
    title: "Red Midi Dress",
    brand: "GFlock",
    price: 7500,
    color: "Red",
    image: img,
  },
  {
    id: 4,
    title: "Blue Denim Jacket",
    brand: "ALISA",
    price: 6000,
    color: "Blue",
    image: img,
  },
  {
    id: 5,
    title: "Green Maxi Dress",
    brand: "JAMIE & ANNIE",
    price: 8500,
    color: "Green",
    image: img,
  },
  {
    id: 6,
    title: "Yellow Summer Top",
    brand: "GFlock",
    price: 3500,
    color: "Yellow",
    image: img,
  },
  {
    id: 7,
    title: "Pink Skater Skirt",
    brand: "ALISA",
    price: 4000,
    color: "Pink",
    image: img,
  },
  {
    id: 8,
    title: "Grey Wool Coat",
    brand: "JAMIE & ANNIE",
    price: 9500,
    color: "Grey",
    image: img,
  },
  {
    id: 9,
    title: "Orange Blouse",
    brand: "GFlock",
    price: 5000,
    color: "Orange",
    image: img,
  },
];

export const FavoriteItems = () => {
  return (
    <>
      {sampleItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box sx={{ maxWidth: 220, position: "relative", height: "auto" }}>
            <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "white",
                "&:hover": { backgroundColor: "white" },
              }}
            >
              <FavoriteBorderIcon sx={{ color: "pink" }} />
            </IconButton>
            <Box
              component="img"
              width={"100%"}
              height={"240px"}
              src={item.image}
              alt={item.title}
              sx={{ objectFit: "cover" }}
            />
            <Box>
              <Typography variant="body1_alata" component="div">
                {item.title}
              </Typography>
              <Typography
                gutterBottom
                variant="body2_alata"
                color="text.secondary"
                component="div"
              >
                {item.brand}
              </Typography>
              <Typography variant="body1_alata" color="text.primary" sx={{ mt: 1 }}>
                Rs {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {item.color}
              </Typography>
              <Select
                variant="filled"
                size="small"
                fullWidth
                displayEmpty
                defaultValue=""
                sx={{ mt: 1, mb: 2 }}
              >
                <MenuItem value="" disabled>
                  Select Size
                </MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
              </Select>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#000000",
                  color: "white",
                  borderRadius: 0,
                  "&:hover": { backgroundColor: "grey.800" },
                }}
              >
                <Typography variant="body2_alata">ADD TO BAG</Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
};

const Store = ({ shopName, cover, logo, id, favorite }) => {
    const [isFavourite, setIsFavourite] = useState(favorite);
    const navigate = useNavigate();
  
    const handleFavourite = (e) => {
      e.stopPropagation(); // Prevents the navigation on favorite button click
      // add api logic here
      setIsFavourite(!isFavourite);
    };
  
    const handleNavigateToShopPage = (id) => {
      navigate(`/public/shop_page/${id}`);
    };
  
    return (
      <Box
        width="280px"
        height={"220px"}
        sx={{
          position: "relative",
          boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
          },
        }}
        onClick={() => handleNavigateToShopPage(id)}
      >
        <Box
          component={"img"}
          src={cover}
          sx={{ objectFit: "cover", width: "100%", height: "75%" }}
        />
        <Box
          height="25%"
          width={"100%"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Typography variant="body2_alata">{shopName}</Typography>
        </Box>
        <Box
          component={"img"}
          src={logo}
          sx={{
            position: "absolute",
            bottom: "30px",
            left: "39%",
            width: "60px",
            height: "60px ",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-17px",
            left: "85%",
            width: "60px",
            height: "60px ",
            borderRadius: "50%",
          }}
        >
          <IconButton disableFocusRipple disableRipple onClick={handleFavourite}>
            {!isFavourite ? (
              <FavoriteBorderIcon sx={{ fontSize: "25px", color: "#FA8072" }} />
            ) : (
              <FavoriteOutlinedIcon sx={{ fontSize: "25px", color: "#FA8072" }} />
            )}
          </IconButton>
        </Box>
      </Box>
    );
  };
  
  const sampleStores = [
    {
      id: 1,
      shopName: "ALISA",
      cover: cover,
      logo: logo,
      favorite: true,
    },
    {
      id: 2,
      shopName: "JAMIE & ANNIE",
      cover: cover,
      logo: logo,
      favorite: true,
    },
    {
      id: 3,
      shopName: "GFlock",
      cover: cover,
      logo: logo,
      favorite: true,
    },
    {
      id: 4,
      shopName: "XYZ Store",
      cover: cover,
      logo: logo,
      favorite: true,
    },
    {
      id: 5,
      shopName: "ABC Boutique",
      cover: cover,
      logo: logo,
      favorite: true,
    },
    {
      id: 6,
      shopName: "Fashion Hub",
      cover: cover,
      logo: logo,
      favorite: true,
    },
    {
      id: 7,
      shopName: "Style Corner",
      cover: cover,
      logo: logo,
      favorite: true,
    },
    {
      id: 8,
      shopName: "Chic Store",
      cover: cover,
      logo: logo,
      favorite: true,
    },
    {
      id: 9,
      shopName: "Trend Shop",
      cover: cover,
      logo: logo,
      favorite: true,
    },
    {
      id: 10,
      shopName: "Urban Fashion",
      cover: cover,
      logo: logo,
      favorite: true,
    },
  ];

  export const FavoriteStores = () => {
    return (
      <Grid container spacing={2}>
        {sampleStores.map((store) => (
          <Grid item xs={12} sm={6} md={4} key={store.id}>
            <Store {...store} />
          </Grid>
        ))}
      </Grid>
    );
  };