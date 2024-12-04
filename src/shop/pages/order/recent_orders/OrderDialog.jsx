import React, { useState, useEffect } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Divider,
  IconButton,
  Typography,
  Grid,
  Button,
  DialogActions,
  Paper
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import PersonIcon from '@mui/icons-material/Person';
import WebApi from "../../../api/WebApi";
import { set } from "lodash";


const getStatusColor = (orderStatus) => {
  switch (orderStatus.toLowerCase()) {
    case 'pending':
      return "#C0A888";
    case 'rejected':
      return 'red';
    case 'accepted':
      return 'green';
    default:
      return 'black'; // Default color if status does not match any case
  }
};

const OrderDialog = ({ open, handleClose, selectedRow , order }) => {
  const [qrCodeValue, setQrCodeValue] = useState(null);
  const [showQrCode, setShowQrCode] = useState(false);

  // const [order , setOrder] = useState({});


  // useEffect(()=>{
  //   const fetchOrder = async () => {
  //     try {
  //       const response = await WebApi.get(`/shop/order/getOrderDetailsByOrderId/${selectedRow.orderId}`);
  //       console.log("Bu fetched: ", response.data);
  //       setOrder(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   }
  //   fetchOrder();
  // } , [])

  useEffect(()=>{
    console.log("selectedRow",selectedRow);
  } , [selectedRow])

  useEffect(() => {
    if (!open) {
      setQrCodeValue(null);
      setShowQrCode(false);
    }
  }, [open]);

  const handleGenerateQR = () => {
    setQrCodeValue(JSON.stringify(selectedRow));
    setShowQrCode(true);
  };

  const handleShowQR = () => {
    setQrCodeValue(JSON.stringify(selectedRow));
    setShowQrCode(true);
  };

  // Conditionally render the button based on the order status
  const showGenerateQRButton = selectedRow?.status.toLowerCase() === 'accepted';

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ backgroundColor: '#C0A888' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            {selectedRow && (
              <Typography variant="h6" component="div" ml={2} style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>
                {selectedRow.productName}
              </Typography>
            )}
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>
        <Box display="flex" justifyContent="space-between" mb={2}>
            <Box flex={1} mr={1}>
              <Box display="flex" alignItems="center">
                <Box sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  backgroundColor: "#D9D9D9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <ShoppingCartIcon fontSize="small" sx={{ color: "black" }} />
                </Box>
                <Typography variant="h6" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Product Info</Typography>
              </Box>
              {selectedRow && (
                <>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Order ID</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.id}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Product Name</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.productName}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Color</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.color}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Size</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.size}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Brand</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.price}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Color</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.color}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Size</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.size}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Quantity</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.quantity}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Unit Price(Rs.)</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.unit_price}</Typography></Grid>
                  </Grid>
                </>
              )}
            </Box>
            <Box flex={1} ml={1}>
              <Box display="flex" alignItems="center">
                <Box sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  backgroundColor: "#D9D9D9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <LocalShippingIcon fontSize="small" sx={{ color: "black" }} />
                </Box>
                <Typography variant="h6" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Delivery Info</Typography>
              </Box>
              {selectedRow && (
                <>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Ordered Date</strong></Typography></Grid>
                    <Grid item xs={7}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{order.createdAt}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Delivery Address</strong></Typography></Grid>
                    <Grid item xs={7}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{`${order.shippingAddress.addressLine1} , ${order.shippingAddress.addressLine2} \n ${order.shippingAddress.province}`}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>totalCost</strong></Typography></Grid>
                    <Grid item xs={7}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{order.totalCost}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Order Status</strong></Typography></Grid>
                    <Grid item xs={7}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          textAlign: 'right', 
                          color: getStatusColor(selectedRow.status) // Apply dynamic color based on status
                        }}
                      >
                        {selectedRow.status}
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              )}
            </Box>
          </Box>

           <Box display="flex" justifyContent="space-between" mb={2}>
            <Box flex={1} mr={1}>
              <Box display="flex" alignItems="center">
                <Box sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  backgroundColor: "#D9D9D9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <PersonIcon fontSize="small" sx={{ color: "black" }} />
                </Box>
                <Typography variant="h6" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Customer Info</Typography>
              </Box>
              {selectedRow && (
                <>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Customer Name</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{order?.shippingAddress?.customerName}</Typography></Grid>
                  </Grid>
                </>
              )}
            </Box>
            <Box flex={1} ml={1}>
              <Box display="flex" alignItems="center">
                <Box sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  backgroundColor: "#D9D9D9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <LocalShippingIcon fontSize="small" sx={{ color: "black" }} />
                </Box>
              </Box>
              
            </Box>
          </Box>

        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
