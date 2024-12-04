import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Typography,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Chip
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import WebApi from "../../../api/WebApi";

export default function SelectCourierDialog({ open, handleClose, selectedRow }) {
  const [selectedCourier, setSelectedCourier] = React.useState(null);
  const [courierOptions, setCourierOptions] = React.useState([]);

  useEffect(() => {
    const fetchCourierOptions = async () => {
      try {
        const response = await WebApi.get("/public/user/getAllActiveCourier");
        const courierOptions = response.data.map((courier) => ({
          name: courier.courierName,
          id: courier.id,
        }));
        console.log("Courier options:", courierOptions);
        setCourierOptions(courierOptions); // Store fetched options
      } catch (error) {
        console.error("Error fetching courier options:", error);
      }
    };

    fetchCourierOptions();
  }, []);

  const handleCourierSelect = (courier) => {
    setSelectedCourier(courier);
  };

  const handleRequest = async () => {
    if (!selectedCourier) {
      console.error("No courier selected");
      return;
    }

    try {
      // Make API request to select the courier for the order
      const response = await WebApi.get(
        `/shop/order/selectCourierForOrder/${selectedRow.id}/${selectedCourier.id}/${encodeURIComponent(selectedCourier.name)}`
      );
      console.log("Response from selecting courier:", response.data);
      window.location.reload(); 
      handleClose(); 
    } catch (error) {
      console.error("Error submitting the courier request:", error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      sx={{ '& .MuiDialog-paper': { width: '90%', maxWidth: '400px', borderRadius: '12px' } }}
    >
      <DialogTitle sx={{ backgroundColor: '#C0A888', color: 'white', borderBottom: '1px solid #A67C56' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Select Courier Service
          </Typography>
          <IconButton onClick={handleClose} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Please select a courier from the list below:
          </Typography>
          <List>
            {courierOptions?.map((option) => (
              <ListItemButton
                key={option.id}
                selected={selectedCourier?.id === option.id}
                onClick={() => handleCourierSelect(option)}
                sx={{
                  borderRadius: '8px',
                  mb: 1,
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  '&.Mui-selected': {
                    backgroundColor: '#E0E0E0',
                    '&:hover': {
                      backgroundColor: '#D0D0D0',
                    },
                  },
                  '&:hover': {
                    backgroundColor: '#F5F5F5',
                  }
                }}
              >
                <ListItemText
                  primary={option.name}
                  primaryTypographyProps={{ fontWeight: 'medium' }}
                />
                {selectedCourier?.id === option.id && (
                  <Chip label="Selected" size="small" color="primary" sx={{ ml: 2 }} />
                )}
              </ListItemButton>
            ))}
          </List>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{ backgroundColor: "#C0A888", color: 'white', '&:hover': { backgroundColor: '#A67C56' } }}
          variant="contained"
        >
          Cancel
        </Button>
        <Button
          onClick={handleRequest}
          sx={{ backgroundColor: "#C0A888", color: 'white', '&:hover': { backgroundColor: '#A67C56' } }}
          variant="contained"
          disabled={!selectedCourier}
        >
          Request
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SelectCourierDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  selectedRow: PropTypes.object.isRequired,
};
