import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Grid, Select, MenuItem, IconButton,Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { fontWeight } from '@mui/system';

const AddAddressDialog = ({ open, onClose, onAddAddress }) => {
  const [newAddress, setNewAddress] = useState({
    street: '',
    building: '',
    city: '',
    postalCode: '',
    country:'Srilanka'
  });

  const handleChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleAddAddress = () => {
    onAddAddress(newAddress);
    setNewAddress({ street: '', building: '', city: '', postalCode: '' });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ m: 0, p: 2, bgcolor: '#bdbdbd'}}>
        <Typography variant="h5">
        NEW SHIPPING ADDRESS
        </Typography>
        
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12}>
            <TextField
              label="Apartment/Building No."
              name="building"
              fullWidth
              value={newAddress.building}
              onChange={handleChange}
              variant="outlined"
              sx={{ bgcolor: '#f5f5f5' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Street Address"
              name="street"
              fullWidth
              value={newAddress.street}
              onChange={handleChange}
              variant="outlined"
              sx={{ bgcolor: '#f5f5f5' }}
            />
          </Grid>
         
          <Grid item xs={6}>
          <TextField
              label="City"
              name="city"
              fullWidth
              value={newAddress.city}
              onChange={handleChange}
              variant="outlined"
              sx={{ bgcolor: '#f5f5f5' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Postal Code"
              name="postalCode"
              fullWidth
              value={newAddress.postalCode}
              onChange={handleChange}
              variant="outlined"
              sx={{ bgcolor: '#f5f5f5' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Country"
              name="country"
              fullWidth
              value={newAddress.country}
              variant="outlined"
              sx={{ bgcolor: '#f5f5f5' }}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              onClick={handleAddAddress} 
              variant="contained" 
              fullWidth
              sx={{ 
                bgcolor: 'black', 
                color: 'white', 
                '&:hover': { bgcolor: 'black' } 
              }}
            >
              ADD NEW SHIPPING ADDRESS
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AddAddressDialog;
