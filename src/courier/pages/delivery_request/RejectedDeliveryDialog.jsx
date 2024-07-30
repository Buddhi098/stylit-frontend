import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Chip,
  DialogContentText,
  Divider,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import PersonIcon from '@mui/icons-material/Person';

const RejectedDeliveryDialog = ({ open, handleClose, selectedRow }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ backgroundColor: '#C0A888' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            {selectedRow && (
              <>
                <img
                  src={selectedRow.storeImage}
                  alt={selectedRow.storeName}
                  width={72}
                  height={69}
                  style={{
                    border: '1px solid black',
                    borderRadius: '10%',
                  }}  
                />
                <Typography variant="h6" component="div" ml={2} style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>
                  {selectedRow.storeName}
                </Typography>
                <Chip label="Rejected" color="error" sx={{textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize:'0.7rem',
                height:"26px",
                ml: 4}}/>
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
                <Typography variant="h6" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Order Info</Typography>
              </Box>
              {selectedRow && (
                <>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Order ID</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.orderId}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Total Amount (Rs.)</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.amount}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={1} ml={3} mt={0.25}>
                    <Grid item xs={3}><Typography variant="body2"><strong>Weight (g)</strong></Typography></Grid>
                    <Grid item xs={5.5}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.weight}</Typography></Grid>
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
                    <Grid item xs={7}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.orderedDate}</Typography></Grid>
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
          <Box>
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
                  <Grid item xs={2}><Typography variant="body2"><strong>Name</strong></Typography></Grid>
                  <Grid item xs={2.2}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.customerName}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={2}><Typography variant="body2"><strong>E-mail</strong></Typography></Grid>
                  <Grid item xs={2.2}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.customerEmail}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={2}><Typography variant="body2"><strong>Phone</strong></Typography></Grid>
                  <Grid item xs={2.2}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.customerPhone}</Typography></Grid>
                </Grid>
              </>
            )}
          </Box>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default RejectedDeliveryDialog;
