import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import s11 from "../../assets/images/men_page/s11.png";
import s12 from "../../assets/images/men_page/s12.png";
import s13 from "../../assets/images/men_page/s13.png";
import s14 from "../../assets/images/men_page/s14.png";
import s15 from "../../assets/images/men_page/s15.png";
import { useNavigate } from "react-router";

const products = [
  { id: 1, name: "Concertina Phone Bag", image: s11 },
  { id: 2, name: "Classic Easy Zipper Tote", image: s12 },
  { id: 3, name: "Coat", image: s13 },
  { id: 4, name: "Beanie", image: s14 },
  { id: 5, name: "Cardigan", image: s15 },
];

const Section2 = () => {
  const navigate = useNavigate();

  const handleSeeMoreNavigation = () => {
    window.scroll(0,0);
    navigate("/public/product/men");
  }


  const handleNavigations = (id) => {
    window.scroll(0,0);
    navigate(`/public/dress/men/${id}`)
  }
  return (
    <Box sx={{ padding:"30px 90px" , marginTop:'30px' , marginBottom:'16px'}}>
      <Typography variant="subtitle_alata">
        Discover must-have styles at best prices
      </Typography>

      <Grid container spacing={2} marginTop={5}>
  {products.map((product) => (
    <Grid item xs={12} sm={6} md={2.4} key={product.id}>
      <Stack direction={"column"} onClick={()=>handleNavigations(product.id)}>
        <Card sx={{ position: "relative", boxShadow: "none" }}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{
              objectFit: "cover",
              width: '230px',
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)", // Zoom effect on hover
                cursor: "pointer", // Change cursor to pointer on hover
              },
            }}
          />
          <Typography
            variant="body1_nunito"
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              color: "#D21B28",
              fontWeight: "bold",
              backgroundColor: "white",
              padding: "5px 10px",
            }}
          >
            70% off
          </Typography>
        </Card>
        <Stack direction="row" sx={{display:'flex' , justifyContent:"space-between" , alignItems:'center' , width:"93%"}}>
          <Typography variant="body2_alata" sx={{ marginTop: 2 }}>
            {product.name}
          </Typography>
          <Typography variant="body2_alata" sx={{ color: "#D21B28" , marginTop: 2 }}>
            $99.99
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  ))}
</Grid>


      <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-start" }}>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: "#333",
            color: "white",
            borderRadius: "0",
            "&:hover": { backgroundColor: "#555" },
            marginTop:"16px"
          }}
          disableRipple
          disableFocusRipple
          onClick={handleSeeMoreNavigation}
        >
          <Typography variant="body2_alata" padding="5px 10px">See More</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Section2;
