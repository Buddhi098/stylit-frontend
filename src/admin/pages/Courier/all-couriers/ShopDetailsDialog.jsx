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
  DialogActions
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Switch from '@mui/material/Switch';

<<<<<<< HEAD
const courierDetailsDialog = ({ open, handleClose, selectedRow }) => {
  const selectedcourier = selectedRow;
=======
const ShopDetailsDialog = ({ open, handleClose, selectedRow }) => {
  const selectedCourier = selectedRow;
>>>>>>> ae799b2 (all couriers updated.)

  const markerIcon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const LocationMarker = () => {
    return position === null ? null : (
      <Marker position={position} icon={markerIcon}>
        <Typography variant="body2">Store Location</Typography>
      </Marker>
    );
  };

  const position = [selectedRow.courierLocation.latitude, selectedRow.courierLocation.longitude];

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ backgroundColor: '#C0A888' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
<<<<<<< HEAD
            {selectedcourier && (
              <>
                {/* <img
                  src={selectedcourier.courierInformation.logo}
                  alt={selectedcourier.courierName}
                  width={72}
                  height={69}
                  style={{
                    border: '1px solid black',
                    borderRadius: '10%',
                  }}
                /> */}
                <Typography variant="h6" component="span" ml={2} style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>
                  {selectedcourier.courierName}
=======
            {selectedCourier && (
              <>
                <Typography variant="h6" component="span" ml={2} style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>
                  {selectedCourier.courierName}
>>>>>>> ae799b2 (all couriers updated.)
                </Typography>
              </>
            )}
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="body1" component="span" mr={1} style={{ color: 'white' }}>
              Status
            </Typography>
            <Switch
<<<<<<< HEAD
              checked={selectedcourier.isActive}
              // onChange={(event) => handleSwitchChange(event, selectedcourier.id)}
=======
              checked={selectedCourier.isActive}
              // onChange={(event) => handleSwitchChange(event, selectedShop.id)}
>>>>>>> ae799b2 (all couriers updated.)
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: 'green',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: 'green',
                },
              }}
            />
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <Divider />
      <DialogContent>
      <Box display="flex" flexDirection="column" mb={2}>
          <Box mb={2}>
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
                <EmailIcon fontSize="small" sx={{ color: "black" }} />
              </Box>
<<<<<<< HEAD
              <Typography variant="h6" component="span" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>courier Contact Info</Typography>
            </Box>
            {selectedcourier && (
              <>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Courier Name</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedcourier.courierName}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Email</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedcourier.courierEmail}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Contact Number</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedcourier.courierContactNumber}</Typography></Grid>
=======
              <Typography variant="h6" component="span" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Courier Contact Info</Typography>
            </Box>
            {selectedCourier && (
              <>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Email</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedCourier.courierEmail}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Contact Number</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedCourier.courierContactNumber}</Typography></Grid>
>>>>>>> ae799b2 (all couriers updated.)
                </Grid>
              </>
            )}
          </Box>
          <Box mb={2}>
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
                <LocationOnIcon fontSize="small" sx={{ color: "black" }} />
              </Box>
              <Typography variant="h6" component="span" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Courier Location</Typography>
            </Box>
<<<<<<< HEAD
            {selectedcourier && (
              <Stack>
                <MapContainer
                  center={position}
                  zoom={13}
                  style={{ height: "50vh", marginTop: "20px" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <LocationMarker />
                </MapContainer>
              </Stack>
=======
            {selectedCourier && (
              <>
                <Stack>
                  <MapContainer
                    center={position}
                    zoom={13}
                    style={{ height: "50vh", marginTop: "20px" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <LocationMarker />
                  </MapContainer>
                </Stack>
              </>
>>>>>>> ae799b2 (all couriers updated.)
            )}
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
                <BusinessIcon fontSize="small" sx={{ color: "black" }} />
              </Box>
              <Typography variant="h6" component="span" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Business Information</Typography>
            </Box>
<<<<<<< HEAD
            {selectedcourier && (
              <>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Registration No.</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedcourier.courierBusinessData.businessRegNo}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Registration Date</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedcourier.courierBusinessData.businessRegDate}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Business Type</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedcourier.courierBusinessData.businessType}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Business Email</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedcourier.courierBusinessData.businessEmail}</Typography></Grid>
=======
            {selectedCourier && (
              <>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Registration No.</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedCourier.courierBusinessData.businessRegNo}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Registration Date</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedCourier.courierBusinessData.businessRegDate}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Business Type</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedCourier.courierBusinessData.businessType}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Business Email</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedCourier.courierBusinessData.businessEmail}</Typography></Grid>
>>>>>>> ae799b2 (all couriers updated.)
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Business Document</strong></Typography></Grid>
                  <Grid item xs={8}>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      startIcon={<PictureAsPdfIcon />}
<<<<<<< HEAD
                      onClick={() => window.open(selectedcourier.courierBusinessData.businessDocument, '_blank')}
=======
                      onClick={() => window.open(selectedCourier.courierBusinessData.businessDocument, '_blank')}
>>>>>>> ae799b2 (all couriers updated.)
                    >
                      View PDF
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
          </Box>
<<<<<<< HEAD
=======
          <Box mt={2}>
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
                <DescriptionIcon fontSize="small" sx={{ color: "black" }} />
              </Box>
              <Typography variant="h6" component="span" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Courier Information</Typography>
            </Box>
            {selectedCourier && (
              <>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Description</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedCourier.courierBusinessData.businessType}</Typography></Grid>
                </Grid>
              </>
            )}
          </Box>
        </Box>
        <Box>
          <Box mt={2}>
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
                <AccountBalanceIcon fontSize="small" sx={{ color: "black" }} />
              </Box>
              <Typography variant="h6" component="span" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Bank Details</Typography>
            </Box>
            {selectedCourier && (
              <>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Bank Name</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedCourier.courierBankDetails.bankName}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Account Number</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedCourier.courierBankDetails.accountNo}</Typography></Grid>
                </Grid>
                <Grid container spacing={1} ml={3} mt={0.25}>
                  <Grid item xs={4}><Typography variant="body2" component="span"><strong>Branch</strong></Typography></Grid>
                  <Grid item xs={8}><Typography variant="body2" component="span" sx={{ textAlign: 'right', color: "black" }}>{selectedCourier.courierBankDetails.branchName}</Typography></Grid>
                </Grid>
              </>
            )}
          </Box>
>>>>>>> ae799b2 (all couriers updated.)
        </Box>
      
      </DialogContent>
    </Dialog>
  );
};

export default courierDetailsDialog;
