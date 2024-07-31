import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  IconButton,
  Typography,
  Grid,
  Button,
  DialogActions,
  Paper,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Download as DownloadIcon } from '@mui/icons-material';



const ShopDetailsDialog = ({ open, handleClose, selectedRow }) => {
  const paymentData = selectedRow;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ backgroundColor: '#C0A888' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            {paymentData && (
              <>
                <Typography variant="h6" component="span" ml={2} style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>
                  {paymentData.shopName}
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
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#0091EA' }}>
          Stylit
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Clothing Marketplace
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {new Date().toLocaleString()}
        </Typography>
      </Box>
      <Divider />
      <Typography variant="h5" component="div" mt={3} mb={3}>
        INTERNAL PAY NOW
      </Typography>
      <Box mb={2}>
        <Typography variant="body1">
          <strong>Reference Number:</strong> {paymentData.paymentId}
        </Typography>
        <Typography variant="body1">
          <strong>Transfer to:</strong> {paymentData.shopName}
        </Typography>
        <Typography variant="body1">
          <strong>Account Type:</strong> Internal
        </Typography>
        <Typography variant="body1">
          <strong>Account Number:</strong> {paymentData.accountNo}
        </Typography>
        <Typography variant="body1">
          <strong>Account Name:</strong> {paymentData.shopName}
        </Typography>
        <Typography variant="body1">
          <strong>Transfer From:</strong> ***********0027
        </Typography>
        <Typography variant="body1">
          <strong>Amount:</strong> Rs. {paymentData.amount.toFixed(2)}
        </Typography>
        <Typography variant="body1">
          <strong>Transfer When:</strong> {new Date(paymentData.paymentDate).toDateString()}
        </Typography>
        <Typography variant="body1">
          <strong>Purpose:</strong> Transaction is a general cash management instruction.
        </Typography>
      </Box>
      <Divider />
      <Typography variant="body2" color="textSecondary" mt={3}>
        This is computer generated receipt no signature required. Electronic Receipt owns no official legal effect, You may go to branch to get the paper receipt.
      </Typography>
    </Paper>
      </DialogContent>
      <DialogActions>
      <Button variant="contained" color="primary" startIcon={<DownloadIcon />} onClick={handleClose}>
        Download Receipt
      </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShopDetailsDialog;
