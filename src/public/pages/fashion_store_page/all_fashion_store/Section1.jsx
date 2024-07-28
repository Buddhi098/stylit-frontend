import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
  Grid,
  Pagination,
  IconButton,
} from "@mui/material";
import s21 from "../../../assets/images/fashion_store_page/s21.png";
import s22 from "../../../assets/images/fashion_store_page/s22.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useNavigate } from "react-router";

const categories = [
  "Casual Wear Stores",
  "Formal Wear Stores",
  "Occasion Wear Stores",
  "Denim Stores",
  "Activewear Stores",
  "Outerwear Stores",
  "Bag Stores",
  "Footwear Stores",
  "Accessories Stores",
];

const stores = [
  { id: 1, name: "Gfock", category: "Casual Wear Stores", cover: s22, logo: s21, favorite: false },
  { id: 2, name: "Another Store", category: "Casual Wear Stores", cover: s22, logo: s21, favorite: false },
  { id: 3, name: "Another Store 2", category: "Casual Wear Stores", cover: s22, logo: s21, favorite: true },
  { id: 4, name: "Another Store 2", category: "Casual Wear Stores", cover: s22, logo: s21, favorite: true },
  { id: 5, name: "Another Store 2", category: "Casual Wear Stores", cover: s22, logo: s21, favorite: true },
  { id: 6, name: "Another Store 2", category: "Casual Wear Stores", cover: s22, logo: s21, favorite: true },
  { id: 7, name: "Another Store 2", category: "Casual Wear Stores", cover: s22, logo: s21, favorite: true },
  // Add more stores with unique ids as needed
];

const ShopBox = ({ shopName, cover, logo, id, favorite }) => {
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

const Section1 = () => {
  const [selectedCategory, setSelectedCategory] = useState("Casual Wear Stores");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.name);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (event, value) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
    setCurrentPage(value);
  };

  const filteredStores = stores.filter(
    (store) => store.category === selectedCategory
  );
  const displayedStores = filteredStores.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Stack
      direction={"column"}
      p={2}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack
        direction={"column"}
        p={3}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="subtitle_alata" gutterBottom>
          All Stores
        </Typography>
        <Typography variant="body1_nunito" color={"#999999"} gutterBottom>
          Explore our complete list of fashion stores and find your favorites
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2} width={"90%"} minHeight={"80vh"}>
        <Box width={"30%"}>
          <Typography variant="body1_alata">Categories</Typography>
          <Stack spacing={0.1}>
            {categories.map((category) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={selectedCategory === category}
                    onChange={handleCategoryChange}
                    name={category}
                  />
                }
                label={
                  <Typography variant="body2_alata" color={"black.800"}>
                    {category}
                  </Typography>
                }
              />
            ))}
          </Stack>
        </Box>
        <Grid container spacing={2} width={"100%"}>
          {displayedStores.map((store, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ShopBox
                shopName={store.name}
                cover={store.cover}
                logo={store.logo}
                id={store.id}
                favorite={store.favorite}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Pagination
        count={Math.ceil(filteredStores.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ marginTop: 3 }}
      />
    </Stack>
  );
};

export default Section1;
