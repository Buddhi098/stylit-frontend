import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { changeRequestStatus, createRequest } from '../TableConfig';
import { set } from 'lodash';

const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5, 3),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function ConnectButton({ tab, shopId, requestId}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const message =
    tab === 0
      ? "Are you sure you want to connect with this shop?"
      : tab === 1
      ? "Are you sure you want to cancel the shop?"
      : "Are you sure you want to disconnect with this shop?";

  const handleAction = async () => {
    if (tab === 0) {
      await createRequest(shopId);
    } else if (tab === 1 || tab === 2) {
      await changeRequestStatus(requestId, "REJECTED");
    }
    window.location.reload();
    handleClose();
  };

  return (
    <>
      <Button
        variant={tab === 1 ? "outlined" : "contained"}
        sx={{
          backgroundColor:
            tab === 0
              ? "#6CB4EE"
              : tab === 2
              ? "#4caf50"
              : "transparent",
          borderColor: tab === 1 ? "#C0A888" : "transparent",
          color: tab === 1 ? "#C0A888" : "#ffffff",
          '&:hover': {
            backgroundColor:
              tab === 0
                ? "#A8D8F7"
                : tab === 2
                ? "#2e7d32"
                : "transparent",
            borderColor: tab === 1 ? "#A68A6C" : "transparent",
            color: tab === 1 ? "#A68A6C" : "#ffffff",
          },
        }}
        onClick={handleClickOpen}
      >
        {tab === 0 ? "Connect" : tab === 1 ? "Requested" : "Connected"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-title" color={"#000000"}>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            No
          </Button>
          <Button onClick={handleAction} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}