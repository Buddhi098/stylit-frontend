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
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';

const CourierDetailsDialog = ({ open, handleClose, selectedRow }) => {
  console.log("courier: ", selectedRow);
  const selectedCourier = selectedRow;

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
        <Typography variant="body2">Courier Location</Typography>
      </Marker>
    );
  };
  const position = [selectedCourier.courierLocation.latitude, selectedCourier.courierLocation.longitude];

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ backgroundColor: '#C0A888' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" component="span" style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>
            {selectedCourier.courierName}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
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
                </Grid>
              </>
            )}
          </Box>
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
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="success"
          sx={{ margin: "3px" }}
          size="small"
          onClick={handleClose}
        >
          Accept
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ margin: "3px" }}
          size="small"
          onClick={handleClose}
        >
          Reject
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CourierDetailsDialog;
