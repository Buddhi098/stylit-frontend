import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography, Paper, IconButton, Avatar, Link, Checkbox, FormControlLabel } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CloseIcon from '@mui/icons-material/Close';
import defaultLogo from "../../../assets/images/stores/AS.jpg";
import { useNavigate } from 'react-router-dom';
import EditOutlined from '@mui/icons-material/EditOutlined';
import AddAddressDialog from './AddAddressDialog';

export default function EditProfilePage() {
  const [name, setName] = useState('Arun Styles');
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [email, setEmail] = useState('arunstyles@gmail.com');
  const [bio, setBio] = useState('Fashion Store');
  const [logo, setLogo] = useState(null);
  const [building, setBuilding] = useState('No.113/19');
  const [street, setStreet] = useState('Peradeniya Road');
  const [city, setCity] = useState('Kandy');
  const [postalCode, setPostalCode] = useState('20000');
  const [currentPassword, setCurrentPassword] = useState('********'); // Displayed in hash format
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAddAddressDialogOpen, setIsAddAddressDialogOpen] = useState(false);
  const [selectedAddresses, setSelectedAddresses] = useState([0]);
  const [addresses, setAddresses] = useState([
    {
      building: 'No.113/19',
      street:'Peradeniya Road',
      city: 'Kandy',
      postalCode: '20000',
      country: 'Sri Lanka',
    },
    {
        building: 'No.143/19',
        street:'Reid Avenue',
        city: 'Colombo-07',
        postalCode: '30000',
        country: 'Sri Lanka',
    }
  ]);

  const navigate = useNavigate();

  const handleSaveChanges = () => {
    console.log('Changes saved');
    navigate('/shop/dashboard');
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChangePasswordClick = () => {
    setIsChangingPassword(true);
  };

  const handleCancelChangePassword = () => {
    setIsChangingPassword(false);
  };

  const handleLogoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setLogo(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleOpenAddAddressDialog = () => {
    setIsAddAddressDialogOpen(true);
  };

  const handleCloseAddAddressDialog = () => {
    setIsAddAddressDialogOpen(false);
  };

  const handleAddAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  const handleAddressSelect = (index) => {
    if (selectedAddresses.includes(index)) {
      setSelectedAddresses(selectedAddresses.filter(i => i !== index));
    } else {
      setSelectedAddresses([...selectedAddresses, index]);
    }
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    setSelectedAddresses(selectedAddresses.filter(i => i !== index));
  };

  return (
    <Box sx={{ padding: 3, margin: 'auto', borderRadius: 3 }} fullWidth>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <EditOutlined />
        <Typography variant="h5" sx={{ marginLeft: 1 }}>Edit Profile</Typography>
      </Box>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3, border: '1px solid #6CB4EE' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
          <Avatar sx={{ width: 80, height: 80, marginRight: 2 }} src={logo || defaultLogo} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{name}</Typography>
            <Typography variant="body2">{bio}</Typography>
            <Typography variant="body2">{`${building} ${street}, ${city}`}</Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          component="label"
          startIcon={<PhotoCameraIcon />}
          sx={{ backgroundColor: '#6CB4EE', color: '#ffffff', '&:hover': { backgroundColor: '#A8D8F7', color: '#ffffff' } }}
        >
          Update Profile Picture
          <input
            accept="image/*"
            type="file"
            onChange={handleLogoChange}
            hidden
          />
        </Button>
      </Paper>

      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3, border: '1px solid #6CB4EE', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <Button variant="outlined" startIcon={<EditIcon />} onClick={handleEditClick}>
            {isEditing ? 'Cancel' : 'Edit'}
          </Button>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', paddingBottom: 1, marginBottom: 2 }}>
          Personal Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Store Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email Address"
              fullWidth
              value={email}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Current Password"
              fullWidth
              value={currentPassword}
              disabled={!isEditing}
              InputProps={{
                endAdornment: isEditing && !isChangingPassword ? (
                  <Link
                    component="button"
                    variant="body2"
                    onClick={handleChangePasswordClick}
                    sx={{ color: 'primary.main', cursor: 'pointer' }}
                  >
                    Change
                  </Link>
                ) : null
              }}
            />
          </Grid>
          {isChangingPassword && (
            <>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="New Password"
                  fullWidth
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Confirm Password"
                  fullWidth
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleCancelChangePassword}>
                  Save
                </Button>
                <Button variant="outlined" onClick={handleCancelChangePassword} sx={{ marginLeft: 2 }}>
                  Cancel
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3, border: '1px solid #6CB4EE', position: 'relative' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', paddingBottom: 1, marginBottom: 2 }}>
          Address Information
        </Typography>
        {addresses.map((address, index) => (
          <Paper key={index} elevation={2} sx={{ padding: 2, marginBottom: 2, position: 'relative', border: '1px solid #e0e0e0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedAddresses.includes(index)}
                    onChange={() => handleAddressSelect(index)}
                    disabled={!isEditing}
                  />
                }
                label={
                  <Box>
                    <Typography variant="body2">{address.building}</Typography>
                    <Typography variant="body2">{address.street}</Typography>
                    <Typography variant="body2">{address.city}, {address.postalCode}</Typography>
                    <Typography variant="body2">{address.country}</Typography>
                  </Box>
                }
              />
              <IconButton onClick={() => handleRemoveAddress(index)} disabled={!isEditing} sx={{ position: 'absolute', top: 8, right: 8 }}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Paper>
        ))}
        <Button variant="contained" sx={{ backgroundColor: '#6CB4EE', color: '#ffffff', '&:hover': { backgroundColor: '#A8D8F7', color: '#ffffff' } }}
        onClick={handleOpenAddAddressDialog}>
          Add New Address +
        </Button>
      </Paper>

      <AddAddressDialog
        open={isAddAddressDialogOpen}
        onClose={handleCloseAddAddressDialog}
        onAddAddress={handleAddAddress}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveChanges}
          sx={{
            backgroundColor: '#C0A888',
            color: '#ffffff',
            '&:hover': { backgroundColor: '#A68A6C', color: '#ffffff' },
            margin: "3px"
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}
