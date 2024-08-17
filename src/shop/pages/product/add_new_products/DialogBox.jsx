import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Typography } from "@mui/material";

const DialogBox = ({ formik }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = () => {
    formik.handleSubmit(); // Trigger the form submission
    handleClose(); // Close the dialog/modal
    setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to the top after the modal closes
    }, 0);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        startIcon={<SaveIcon />}
        onClick={handleClickOpen}
        sx={{ mt: 2, backgroundColor: "#C0A888" }}
      >
        Save Product
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        width="400px"
        height="300px"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h5">Add New Product</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to add this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleConfirm}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogBox;
