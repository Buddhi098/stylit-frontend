import { ref, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";
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
  Snackbar,
  Alert,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import WebApi from "../../api/WebApi";
import { storage } from "../../../config/firebaseConfig";


const Section1 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await WebApi.get(
          `/shopper/order/getCart/${localStorage.getItem("id")}`
        );
        const items = response.data.cartItems;


        const urls = {};
        for (const item of items) {
          const filePath = `/productImages/${item.productId}${item.color}/img0`; // Adjust path as needed
          const fileRef = ref(storage, filePath);

          try {
            const url = await getDownloadURL(fileRef);
            urls[item.id] = url;
          } catch (error) {
            console.error(`Error fetching image for product ${item.productId}:`, error);
            urls[item.id] = null; // Fallback if the image isn't found
          }
        }

        setCartItems(items);
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = (cartItemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDeleteItem = (cartItemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== cartItemId));
    setOpenSnackbar(true); // Show success message when item is deleted
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ width: 500, mx: "auto", p: 2 }}>
      <Typography variant="subtitle_alata" gutterBottom>
        Your Cart
      </Typography>

      <Box sx={{ overflowY: "scroll", maxHeight: "65vh", margin: "32px 0px" }}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            cartItemId={item.id}
            shopperId={localStorage.getItem("id")}
            image={imageUrls[item.id] || "/path/to/placeholder.jpg"} // Use a placeholder if URL isn't available
            name={item.productName}
            size={item.size}
            color={item.color}
            price={item.price}
            quantity={item.quantity}
            onQuantityChange={handleQuantityChange}
            onDelete={handleDeleteItem}
          />
        ))}
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="body1_alata">
          Subtotal ({totalQuantity} items)
        </Typography>
        <Typography variant="body1_alata">Rs {subtotal}</Typography>
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

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Item deleted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

const CartItem = ({
  cartItemId,
  shopperId,
  image,
  name,
  size,
  color,
  price,
  quantity,
  onQuantityChange,
  onDelete,
}) => {
  const handleIncrement = async (e) => {
    e.stopPropagation();
    try {
      const response = await WebApi.get(
        `/shopper/order/increment/${cartItemId}/${localStorage.getItem('id')}`
      );
      if (response.status === 200) {
        onQuantityChange(cartItemId, quantity + 1);
      }
    } catch (error) {
      console.error("Error incrementing quantity:", error);
    }
  };

  const handleDecrement = async (e) => {
    e.stopPropagation();
    if (quantity <= 1) return;
    try {
      const response = await WebApi.get(
        `/shopper/order/decrement/${cartItemId}/${localStorage.getItem('id')}`
      );
      if (response.status === 200) {
        onQuantityChange(cartItemId, quantity - 1);
      }
    } catch (error) {
      console.error("Error decrementing quantity:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await WebApi.delete(`/shopper/order/items/${cartItemId}/${shopperId}`);
      if (response.status === 200) {
        onDelete(cartItemId); // Notify parent to remove the item from the state
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
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
          <IconButton onClick={handleDelete}>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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

export default Section1;
