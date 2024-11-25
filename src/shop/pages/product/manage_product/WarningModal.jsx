import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import {
  WarningAmber as WarningIcon,
  Delete as DeleteIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import WebApi from "../../../api/WebApi";

const DeleteWarningModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="delete-warning-title"
      aria-describedby="delete-warning-description"
    >
      <DialogTitle
        id="delete-warning-title"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <WarningIcon sx={{ color: "orange", mr: 1 }} />
        <Typography variant="h6">Delete Confirmation</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-warning-description">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          startIcon={<CancelIcon />}
          color="inherit"
          sx={{ color: "gray", textTransform: "none" }}
        >
          Cancel
        </Button>
        <Button
          onClick={onDelete}
          startIcon={<DeleteIcon />}
          color="error"
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Example usage
const WarningModal = ({id , setTrigger}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    try {
      const data = {
        productId: id,
        shopId: localStorage.getItem("id"),
      };
      console.log("Data:", data);
      const response = await WebApi.post("/shop/product/delete_product", data);

      if (response.status === 200) {
        console.log("Item deleted successfully:", response.data);
        setTrigger((prev) => !prev);
        setOpen(false);
      } else {
        console.error("Failed to delete item:", response.status, response.data);
      }
    } catch (error) {
      console.error("An error occurred while deleting the item:", error.response);
      // Optionally, you can display a user-friendly error message here
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{ margin: "3px", backgroundColor: "#BDBDBD" }}
        size="small"
        onClick={handleOpen}
      >
        Delete
      </Button>
      <DeleteWarningModal
        isOpen={open}
        onClose={handleClose}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default WarningModal;
