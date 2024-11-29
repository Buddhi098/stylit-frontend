import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

import img1 from "../../../../src/temp_images/Women/img (1).jpeg";
import img2 from "../../../../src/temp_images/Women/img (2).jpeg";
import img3 from "../../../../src/temp_images/Women/img (3).jpeg";
import img4 from "../../../../src/temp_images/Women/img (4).jpeg";
import img5 from "../../../../src/temp_images/Women/img (5).jpeg";
import img6 from "../../../../src/temp_images/Women/img (6).jpeg";
import img7 from "../../../../src/temp_images/Women/img (7).jpeg";

const CartItem = ({ image, name, size, color, price }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = (e) => {
    e.stopPropagation();
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <Card sx={{ display: "flex", mb: 2, boxShadow: "none" }}>
      <CardMedia
        component="img"
        sx={{ width: 180, height: 225, objectFit: "cover" }}
        image={image}
        alt={name}
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack direction={"column"}>
          <Typography variant="body1_alata">{name}</Typography>
          <Typography variant="body2_alata" color="text.secondary">
            Size {size} | {color}
          </Typography>
        </Stack>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1_alata">Rs {price}</Typography>
        </Box>
      </CardContent>

      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box sx={{ alignSelf: "flex-end" }}>
          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "135px",
            border: "1px solid #999999",
          }}
        >
          <IconButton size="small" onClick={handleDecrement}>
            <RemoveIcon />
          </IconButton>
          <Typography component="span" mx={1}>
            {quantity}
          </Typography>
          <IconButton size="small" onClick={handleIncrement}>
            <AddIcon />
          </IconButton>
        </Box>
      </Stack>
    </Card>
  );
};

const Section1 = () => {
  return (
    <Box sx={{ width: 500, mx: "auto", p: 2 }}>
      <Typography variant="subtitle_alata" gutterBottom>
        Your Cart
      </Typography>

      <Box sx={{ overflowY: "scroll", maxHeight: "65vh", margin: "32px 0px" }}>
        <CartItem
          image={img1}
          name="The Frolic Dress in Linen"
          size="XS"
          color="Dusty Pink"
          price="3500"
        />

        <CartItem
          image={img2}
          name="The Frolic Dress in Linen"
          size="XS"
          color="Dusty Pink"
          price="3500"
        />

        <CartItem
          image={img3}
          name="The Frolic Dress in Linen"
          size="XS"
          color="Dusty Pink"
          price="3500"
        />

        <CartItem
          image={img4}
          name="The Frolic Dress in Linen"
          size="XS"
          color="Dusty Pink"
          price="3500"
        />
        <CartItem
          image={img5}
          name="The Frolic Dress in Linen"
          size="XS"
          color="Dusty Pink"
          price="3500"
        />
        <CartItem
          image={img6}
          name="The Frolic Dress in Linen"
          size="XS"
          color="Dusty Pink"
          price="3500"
        />
        <CartItem
          image={img7}
          name="The Frolic Dress in Linen"
          size="XS"
          color="Dusty Pink"
          price="3500"
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="body1_alata">Subtotal (2 items)</Typography>
        <Typography variant="body1_alata">Rs 7000</Typography>
      </Box>

      <Link to="/shopper/checkout">
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ background: "#000000", color: "#ffffff", borderRadius: 0 }}
        >
          <Typography variant="body2_nunito">CONTINUE TO CHECKOUT</Typography>
        </Button>
      </Link>

      <Typography variant="body2" color="text.secondary" align="center" mt={1}>
        Buy now before they sell out!
      </Typography>
    </Box>
  );
};

export default Section1;
