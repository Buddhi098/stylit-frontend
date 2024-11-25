import React, { useEffect, useState } from 'react';
import { Modal, Typography, Stack, Button } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import CloseIcon from '@mui/icons-material/Close';


// Custom marker icon for Leaflet
const markerIcon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });



const ViewLocation = ({lat , lon}) => {
  const [open, setOpen] = useState(false);
  // const position = [7.4818, 80.3609];

  const [position, setPosition] = useState([]); 

  useEffect(()=>{
    setPosition([lat, lon])
  })

  const LocationMarker = () => {

    return position === null ? null : (
      <Marker position={position} icon={markerIcon}>
        <Typography variant="body2">Store Location</Typography>
      </Marker>
    );
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" size='small' onClick={() => setOpen(true)}>
        Location
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <div
          style={{
            minWidth: "50%",
            borderRadius: 'md',
            padding: 3,
            boxShadow: 'lg',
            background: 'white',
            height: '60vh',
          }}
        >
          <Button onClick={() => setOpen(false)} style={{ float: 'right', margin: 1 }}>
          <CloseIcon/>
          </Button>
          <Typography
            component="h2"
            variant='h3'
            id="modal-title"
            sx={{ fontWeight: 'bold', marginBottom: 1 }}
          >
            Store Location
          </Typography>
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
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ViewLocation;
