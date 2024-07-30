import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Switch,
  Typography,
  Menu,
  MenuItem,
  Divider,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";
import { initialPaymentMethods } from './TableConfig';
import TitleComponent from './TitleComponent'; 

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.divider}`,
}));

const StatusText = styled(Typography)(({ theme }) => ({
  transition: 'color 0.5s ease-in-out',
}));

export default function PaymentMethodPage() {
    const [methods, setMethods] = useState(initialPaymentMethods);
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentMethodId, setCurrentMethodId] = useState(null);
    const [newMethod, setNewMethod] = useState({
      type: "",
      details: "",
      icon: null,
    });
    const [isAdding, setIsAdding] = useState(false);
  
    const handleMenuOpen = (event, methodId) => {
      setAnchorEl(event.currentTarget);
      setCurrentMethodId(methodId);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      setCurrentMethodId(null);
    };
  
    const handleToggle = (id) => {
      setMethods((prev) =>
        prev.map((method) =>
          method.id === id ? { ...method, enabled: !method.enabled } : method
        )
      );
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewMethod((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleFileChange = (e) => {
      setNewMethod((prev) => ({ ...prev, icon: e.target.files[0] }));
    };
  
    const handleAddPaymentMethod = () => {
      // Add logic to save the new payment method
      setMethods([...methods, { ...newMethod, id: methods.length + 1 }]);
      setIsAdding(false);
      setNewMethod({ type: "", details: "", icon: null });
    };

  return (
    <Container>
      <TitleComponent />
      {methods.map((method) => (
        <Card key={method.id}>
          <Box display="flex" alignItems="center">
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {method.type}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {method.details}
              </Typography>
            </Box>
            {method.icon && method.type === "Debit Card or Credit Card" && (
              <img src={method.icon} alt={`${method.type} icon`} style={{ width: 190, height: 80, marginLeft: 18 }} />
            )}
            {method.icon && method.type === "Cash On Delivery" && (
              <img src={method.icon} alt={`${method.type} icon`} style={{ width: 70, height: 70, marginLeft: 24 }} />
            )}
            {method.icon && method.type === "PayHere" && (
              <img src={method.icon} alt={`${method.type} icon`} style={{ width: 120, height: 50, marginLeft: 14 }} />
            )}
            {method.icon && method.type === "EzCash" && (
              <img src={method.icon} alt={`${method.type} icon`} style={{ width: 100, height: 55, marginLeft: 14 }} />
            )}
          </Box>
          <Box display="flex" alignItems="center">
            <Button
              variant="outlined"
              aria-controls={`menu-${method.id}`}
              aria-haspopup="true"
              onClick={(event) => handleMenuOpen(event, method.id)}
              endIcon={<MoreVertIcon />}
            >
              Actions
            </Button>
            <Menu
              id={`menu-${method.id}`}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl) && currentMethodId === method.id}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <EditIcon sx={{ mr: 1 }} />
                Edit
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <DeleteIcon sx={{ mr: 1 }} />
                Delete
              </MenuItem>
            </Menu>
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
            <Switch
              checked={method.enabled}
              onChange={() => handleToggle(method.id)}
              color="success"
            />
            <StatusText
              variant="body1"
              color={method.enabled ? "success.main" : "error.main"}
            >
              {method.enabled ? "Enabled" : "Disabled"}
            </StatusText>
          </Box>
        </Card>
      ))}

      {isAdding ? (
        <Paper sx={{ padding: 2, marginBottom: 2, borderRadius: '10px', border: '1px solid #C0A888' }}>
          <Typography variant="h5">Add New Payment Method</Typography>
          <TextField
            margin="dense"
            name="type"
            label="Payment Type"
            type="text"
            fullWidth
            variant="standard"
            value={newMethod.type}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            margin="dense"
            name="details"
            label="Details"
            type="text"
            fullWidth
            variant="standard"
            value={newMethod.details}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ backgroundColor: '#C0A888', "&:hover": { backgroundColor: '#A68A6C' }, marginBottom: 2 }}
          >
            Upload Icon
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
          </Button>
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={() => setIsAdding(false)} sx={{ marginRight: 1 }}>Cancel</Button>
            <Button onClick={handleAddPaymentMethod} sx={{ backgroundColor: '#C0A888',color:'white', "&:hover": { backgroundColor: '#A68A6C',color:'white' } }}>Add</Button>
          </Box>
        </Paper>
      ) : (
        <Box display="flex" justifyContent="flex-end" mb={4}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: "#C0A888",
              "&:hover": { backgroundColor: "#A68A6C" },
            }}
            onClick={() => setIsAdding(true)}
          >
            Add Payment Method
          </Button>
        </Box>
      )}
    </Container>
  );
}
