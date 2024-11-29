import React, { useState } from "react";
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
  DialogActions
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SelectCourierDialog from "./SelectCourierDialog"; // Import the SelectCourierDialog component

const RequestDialog = ({ open, handleClose, selectedRow }) => {
  const [courierDialogOpen, setCourierDialogOpen] = useState(false);

  const handleOpenCourierDialog = () => {
    setCourierDialogOpen(true);
  };

  const handleCloseCourierDialog = () => {
    setCourierDialogOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ backgroundColor: '#C0A888' }}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              {selectedRow && (
                <>
                  <Typography variant="h6" component="div" ml={2} style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>
                    {selectedRow.info}
                  </Typography>
                </>
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
                      <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.orderId}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Product Name</strong></Typography></Grid>
                      <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.info}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Category</strong></Typography></Grid>
                      <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.category}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Sub Category</strong></Typography></Grid>
                      <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.subcategory}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Brand</strong></Typography></Grid>
                      <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.brand}</Typography></Grid>
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
                      <Grid item xs={7}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.ordered_date}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Approx. Delivery Date</strong></Typography></Grid>
                      <Grid item xs={7}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.deliveryDate}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Delivery Address</strong></Typography></Grid>
                      <Grid item xs={7}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.address}</Typography></Grid>
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
                      <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.customerName}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Customer Email</strong></Typography></Grid>
                      <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.customerEmail}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Customer Phone</strong></Typography></Grid>
                      <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.customerPhone}</Typography></Grid>
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
                  <Typography variant="h6" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Billing Info</Typography>
                </Box>
                {selectedRow && (
                  <>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Card No</strong></Typography></Grid>
                      <Grid item xs={7}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.cardNo}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Store Name</strong></Typography></Grid>
                      <Grid item xs={7}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.storeName}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Phone</strong></Typography></Grid>
                      <Grid item xs={7}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.phone}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Payment Method</strong></Typography></Grid>
                      <Grid item xs={7}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.payment_method}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={3}><Typography variant="body2"><strong>Total Amount(Rs.)</strong></Typography></Grid>
                      <Grid item xs={7}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.price}</Typography></Grid>
                    </Grid>
                  </>
                )}
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenCourierDialog} sx={{ backgroundColor: "#C0A888" }} variant="contained">Request Courier</Button>
        </DialogActions>
      </Dialog>
      
      {/* SelectCourierDialog */}
      <SelectCourierDialog
        open={courierDialogOpen}
        handleClose={handleCloseCourierDialog}
        selectedRow={selectedRow}
      />
    </>
  );
};

export default RequestDialog;
