import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { Box, Typography, TextField, Button, Grid, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

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

const Form3 = (props, ref) => {
  const savedPosition =
    props.form3Data.latitude && props.form3Data.longitude
      ? [props.form3Data.latitude, props.form3Data.longitude]
      : [51.505, -0.09];
  const [position, setPosition] = useState(savedPosition);

  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery") || ""
  );
  const [key, setKey] = useState(0);

  useEffect(() => {
    localStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    setKey(key + 1);
  }, [position]);

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      formik.handleSubmit();
    },
  }));

  const formik = useFormik({
    initialValues: {
      addressLine1: props.form3Data.addressLine1
        ? props.form3Data.addressLine1
        : "",
      addressLine2: props.form3Data.addressLine2
        ? props.form3Data.addressLine2
        : "",
      city: props.form3Data.city ? props.form3Data.city : "",
      province: props.form3Data.province ? props.form3Data.province : "",
      postalCode: props.form3Data.postalCode ? props.form3Data.postalCode : "",
      latitude: props.form3Data.latitude ? props.form3Data.latitude : "",
      longitude: props.form3Data.longitude ? props.form3Data.longitude : "",
    },
    validationSchema: Yup.object({
      addressLine1: Yup.string().required("Address is required"),
      addressLine2: Yup.string(),
      city: Yup.string().required("City is required"),
      province: Yup.string().required("Province is required"),
      postalCode: Yup.string().required("Postal Code is required").matches(/^[0-9]{4,5}$/,"Postal Code must be 4 or 5 digits"),
      latitude: Yup.number().required("Latitude is required"),
      longitude: Yup.number().required("Longitude is required"),
    }),
    onSubmit: (values) => {
      props.setForm3Data(values);
      console.log("Form values:", values);
    },
  });

  const handleSearch = async () => {
    const apiKey = process.env.REACT_APP_MAP_API_KEY || "pk.df54478a8054559ffed7468a229d26bd"; // Replace with your LocationIQ API key
    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${searchQuery}&format=json`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setPosition([lat, lon]);
        formik.setFieldValue("latitude", lat);
        formik.setFieldValue("longitude", lon);
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        formik.setFieldValue("latitude", lat);
        formik.setFieldValue("longitude", lng);
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={markerIcon}>
        <Typography variant="body2">Courier Location</Typography>
      </Marker>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "60vh",
      }}
    >
      {/* Left part with form fields */}
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          flex: 1,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "space-between",
          borderRight: "1px solid #f0f0f0",
        }}
      >
        <Typography variant="subtitle_alata">Location Information</Typography>
        <Typography variant="body1_nunito" color="#999999">
          Search and Pinpoint Location
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              id="addressLine1"
              name="addressLine1"
              label="Address Line 1"
              variant="filled"
              value={formik.values.addressLine1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.addressLine1 &&
                Boolean(formik.errors.addressLine1)
              }
              helperText={
                formik.touched.addressLine1 && formik.errors.addressLine1
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              id="addressLine2"
              name="addressLine2"
              label="Address Line 2"
              variant="filled"
              value={formik.values.addressLine2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.addressLine2 &&
                Boolean(formik.errors.addressLine2)
              }
              helperText={
                formik.touched.addressLine2 && formik.errors.addressLine2
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              id="city"
              name="city"
              label="City"
              variant="filled"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              id="province"
              name="province"
              label="Province"
              variant="filled"
              value={formik.values.province}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.province && Boolean(formik.errors.province)}
              helperText={formik.touched.province && formik.errors.province}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              id="postalCode"
              name="postalCode"
              label="Postal Code"
              variant="filled"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.postalCode && Boolean(formik.errors.postalCode)
              }
              helperText={formik.touched.postalCode && formik.errors.postalCode}
            />
          </Grid>
        </Grid>
      </Box>
      {/* Right part with map */}
      <Box
        sx={{
          flex: 1,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1_alata">Select Courier Location</Typography>
        <Typography variant="body2_alata" color="#999999" gutterBottom>
          These location details will be used to calculate courier charges.
        </Typography>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <TextField
            size="small"
            id="search"
            name="search"
            label="Search Location"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              formik.setFieldValue("latitude", null);
            }}
            sx={{ width: "60%" }}
            error={formik.touched.latitude && !formik.values.latitude}
            helperText={
              formik.touched.latitude && !formik.values.latitude
                ? "Please Save Location"
                : ""
            }
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{ mt: 2, width: "35%", p: "9px 0" }}
          >
            <Typography variant="body2_alata">Save Location</Typography>
          </Button>
        </Stack>
        <MapContainer
          key={key}
          center={position}
          zoom={13}
          style={{ height: "100%", marginTop: "20px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />
        </MapContainer>
      </Box>
    </Box>
  );
};

export default forwardRef(Form3);
