import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import {
  WarningAmber as WarningIcon,
  CheckCircle as ConfirmIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import { changeStatus } from "./TableConfig";

const StatusChangeModal = ({ isOpen, onClose, onConfirm, newStatus }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="status-change-title"
      aria-describedby="status-change-description"
    >
      <DialogTitle
        id="status-change-title"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <WarningIcon sx={{ color: "orange", mr: 1 }} />
        <Typography variant="h6">Status Change Confirmation</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="status-change-description">
          Are you sure you want to change the status to <strong>{newStatus}</strong>? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          startIcon={<CancelIcon />}
          color="inherit"
          sx={{ color: "gray", textTransform: "none" }}
        >
          No
        </Button>
        <Button
          onClick={onConfirm}
          startIcon={<ConfirmIcon />}
          color="primary"
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const StatusChangeComponent = ({ id, setTrigger, newStatus }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = async () => {
    try {
      const response = await changeStatus(id, newStatus);
      window.location.reload();
      if (response.status === 200) {
        console.log("Status updated successfully:", response.data);
        setTrigger((prev) => !prev);
        handleClose();
      } else {
        console.error("Failed to update status:", response.status, response.data);
      }
    } catch (error) {
      console.error("An error occurred while updating the status:", error?.response || error.message);
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: newStatus === "accepted" ? "#4CAF50" : "#f44336",
          color: "white",
          margin: "5px 2px",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: newStatus === "accepted" ? "#45a049" : "#d32f2f",
          },
        }}
      >
        {newStatus}
      </Button>
      <StatusChangeModal
        isOpen={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
        newStatus={newStatus}
      />
    </div>
  );
};

export default StatusChangeComponent;
