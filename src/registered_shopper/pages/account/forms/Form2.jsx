import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddressModal = ({ open, handleClose, handleAddAddress }) => {
  const [formValues, setFormValues] = useState({
    street: "",
    apartment: "",
    city: "",
    postalCode: "",
    province: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleAddAddress(formValues);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: "50px 100px",
        }}
      >
        <Box mb={4} textAlign={"center"}>
          <Typography variant="subtitle_alata">New Shipping Address</Typography>
        </Box>
        <Stack component="form" sx={{ mt: 2 }} spacing={4}>
          <TextField
            variant="filled"
            size="small"
            fullWidth
            required
            label={
              <Typography variant="body2_nunito">Street Address</Typography>
            }
            name="street"
            value={formValues.street}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="filled"
            size="small"
            fullWidth
            label={
              <Typography variant="body2_nunito">
                Apartment, Building (Optional)
              </Typography>
            }
            name="apartment"
            value={formValues.apartment}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Stack direction="row" spacing={2} mb={2}>
            <TextField
              variant="filled"
              size="small"
              fullWidth
              required
              label={<Typography variant="body2_nunito">City</Typography>}
              name="city"
              value={formValues.city}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              variant="filled"
              size="small"
              fullWidth
              required
              label={
                <Typography variant="body2_nunito">Postal Code</Typography>
              }
              name="postalCode"
              value={formValues.postalCode}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          </Stack>

          <FormControl fullWidth required sx={{ mb: 2 }}>
            <InputLabel>Province</InputLabel>
            <Select
              variant="filled"
              size="small"
              name="province"
              value={formValues.province}
              onChange={handleChange}
            >
              <MenuItem value="Western Province">Western Province</MenuItem>
              <MenuItem value="Central Province">Central Province</MenuItem>
              {/* Add other provinces as needed */}
            </Select>
          </FormControl>
          <TextField
            variant="filled"
            size="small"
            fullWidth
            required
            label={<Typography variant="body2_nunito">Phone Number</Typography>}
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Button
            variant="outlined"
            color="primary"
            sx={{
              color: "#000000",
              border: "2px solid #999999",
              borderRadius: "0",
              "&:hover": {
                backgroundColor: "#000000",
                color: "#ffffff",
                border: "2px solid #ffffff",
              },
            }}
            onClick={handleSubmit}
          >
            <Typography variant="body2_nunito">
              Add New Shipping Address
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

const Form2 = () => {
  const [addresses, setAddresses] = useState([{
    street: "123 Sample Street",
    apartment: "Apt 1",
    city: "Sample City",
    postalCode: "12345",
    province: "Western Province",
    phoneNumber: "123-456-7890",
  },]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box component="form" sx={{ mt: 2, ml: "16px" }} height={"70vh"}>
      <Stack spacing={1} marginBottom={2}>
        <Typography variant="subtitle_nunito" gutterBottom>
          Account
        </Typography>
        <Divider />
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <Typography variant="body1_nunito" gutterBottom>
            Shipping Information
          </Typography>
          <Button
            variant="outlined"
            onClick={handleOpenModal}
            color="primary"
            sx={{
              color: "#000000",
              border: "2px solid #999999",
              borderRadius: "0",
              "&:hover": {
                backgroundColor: "#000000",
                color: "#ffffff",
                border: "2px solid #ffffff",
              },
            }}
          >
            <Typography variant="body2_nunito">Add New Address +</Typography>
          </Button>
        </Stack>
      </Stack>
      <Stack sx={{ overflowY: "scroll", maxHeight: "50vh" }}>
        <RadioGroup>
          {addresses.map((address, index) => (
            <Box
              key={index}
              sx={{
                mt: 2,
                border: "1px solid #ccc",
                p: 2,
                position: "relative",
              }}
            >
              <FormControlLabel
                value={index}
                control={<Radio />}
                label={
                  <Stack direction={"column"}>
                    <Typography variant="body2_nunito" fontSize="15px">
                      {address.street}
                    </Typography>
                    <Typography variant="body2_nunito" fontSize="15px">
                      {address.city}, {address.province}
                    </Typography>
                    <Typography variant="body2_nunito" fontSize="15px">
                      {address.postalCode}
                    </Typography>
                    <Typography variant="body2_nunito" fontSize="15px">
                      {address.phoneNumber}
                    </Typography>
                  </Stack>
                }
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  fontSize: "15px",
                }}
                onClick={() =>
                  setAddresses(addresses.filter((_, i) => i !== index))
                }
              >
                <CloseIcon />
              </IconButton>
            </Box>
          ))}
        </RadioGroup>
      </Stack>

      <AddressModal
        open={modalOpen}
        handleClose={handleCloseModal}
        handleAddAddress={handleAddAddress}
      />
    </Box>
  );
};

export default Form2;
