import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';


const RejectRequest= () =>  {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="error" // Changed to 'error' to indicate a negative action
        sx={{ margin: "3px" }}
        size="small"
        onClick={handleClickOpen}
      >
        Reject
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          sx: { // Added styling for the dialog paper
            minWidth: '400px', // Ensure the dialog is not too narrow
            padding: '24px', // Add some padding for aesthetics
          },
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            handleClose();
          },
        }}
      >
        <DialogTitle>
            <Typography variant="h6" component="h2" style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                Reject Request
            </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body1" component="p">
              Reasons for rejection:
            </Typography>
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="rejectMessage"
            name="rejectMessage"
            label="Message"
            type="text"
            fullWidth
            variant="outlined" // Changed to 'outlined' for a modern look
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">Cancel</Button>
          <Button type="submit" variant="contained" color="error">Reject</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default RejectRequest;