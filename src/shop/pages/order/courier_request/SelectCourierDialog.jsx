import React from "react";
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

const courierOptions = ["FedEx", "Domex", "Pronto Lanka", "UPS", "DHL"];

export default function SelectCourierDialog({ open, handleClose, selectedRow }) {
  const [selectedCourier, setSelectedCourier] = React.useState("");

  const handleCourierSelect = (courier) => {
    setSelectedCourier(courier);
  };

  const handleRequest = () => {
    // Handle the courier request logic here
    console.log("Requested courier:", selectedCourier);
    handleClose();
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
            {courierOptions.map((option) => (
              <ListItemButton
                key={option}
                selected={selectedCourier === option}
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
                  primary={option}
                  primaryTypographyProps={{ fontWeight: 'medium' }}
                />
                {selectedCourier === option && (
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
  selectedRow: PropTypes.object,
};
