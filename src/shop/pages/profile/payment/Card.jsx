import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Dialog,
  Snackbar,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Avatar,
  MobileStepper,
  TextField,
  Alert,
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import sampath from "../../../assets/images/logo/sampath.png";
import commercial from "../../../assets/images/logo/commercial.png";
import CloseIcon from '@mui/icons-material/Close';

const CreditCard = () => {
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [cards, setCards] = useState([
    { 
      logo: sampath, 
      bankName: 'Sampath Bank',
      accountName: 'Arun Styles', 
      accountNumber: '8001546329', 
      branchName: 'Dehiwala' 
    },
    { 
      logo: commercial, 
      bankName: 'Commercial Bank',
      accountName: 'Arun Styles',  
      accountNumber: '8001543827', 
      branchName: 'Kollupitiya' 
    },
  ]);

  const maxSteps = cards.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = () => {
    setShowAlert(true);
    handleClose();
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowAlert(false);
  };

  return (
    <Box sx={{ p: 2, borderRadius: '10px', border: '1px solid rgba(108, 180, 238, 1)', background: 'white', boxShadow: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="h5" component="div">
          Bank Details
        </Typography>
        <IconButton
          size="small"
          sx={{ color: 'primary.main' }}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </IconButton>
      </Box>
      <Card sx={{ bgcolor: '#006666', color: 'white', borderRadius: '10px', position: 'relative', border: '1px solid black' }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar src={cards[activeStep].logo} sx={{ width: 50, height: 50, marginBottom: 1, border: '1px solid black' }} />
            </Grid>
            <Grid item xs>
              <Typography variant="h6">{cards[activeStep].bankName}</Typography>
              <Typography variant="body2">Account Holder Name: {cards[activeStep].accountName}</Typography>
              <Typography variant="body2">Account Number: {cards[activeStep].accountNumber}</Typography>
              <Typography variant="body2">Branch: {cards[activeStep].branchName}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
        sx={{ bgcolor: 'transparent', mt: 2 }}
      />
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ padding: 4 }}>
          <Typography variant="h5" gutterBottom>Bank Details</Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Provide essential details about your bank to redeem.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Typography variant="subtitle1" gutterBottom>Upload the front page of your Bankbook/Bank Statement/Mobile Banking Screen shot</Typography>
              <Box sx={{ 
                border: '1px solid #ccc', 
                borderRadius: 1, 
                display: 'flex', 
                alignItems: 'center', 
                p: 1 ,
                height: '300px',
                justifyContent: 'center',
              }}>
                <Button 
                  variant="text" 
                  component="label" 
                  sx={{ 
                    color: 'primary.main', 
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    mr: 1
                  }}
                >
                  Upload Screenshot
                  <input type="file" hidden accept=".pdf,.jpg,.jpeg,.png" />
                </Button>
                <Typography variant="body2" color="text.secondary">No file chosen</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <TextField
                label="Bank Name"
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                label="Account Holder Name"
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                label="Account Number"
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                label="Branch Name"
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ padding: 3, justifyContent: 'flex-end' }}>
          <Button 
            onClick={handleSave} 
            color="primary" 
            variant="contained"
            sx={{ 
              textTransform: 'uppercase',
              backgroundColor: '#D2B48C',
              color: 'white',
              '&:hover': {
                backgroundColor: '#C19A6B'
              }
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleAlertClose} severity="info" sx={{ width: '100%' }}>
          Our team will verify your bank details and let you know.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreditCard;
