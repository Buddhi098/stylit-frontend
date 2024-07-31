import * as React from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DownloadIcon from '@mui/icons-material/Download';

export default function StoreDetails() {
  return (
    <Box sx={{ p: 3 }}>
      <Button startIcon={<ArrowBackIosIcon />}>Back</Button>
      <Typography variant="h5" sx={{ mb: 3, mt: 1 }}>
        Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            defaultValue="Fashion store 5"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            defaultValue="fashionstore5@gmail.com"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Mobile Number"
            defaultValue="0770 697 697"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Store address"
            defaultValue="No 123, Galle road, Kaluthara"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Legal / Business Owner Name"
            defaultValue="H. D. A. Mendis"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Business Registration Number"
            defaultValue="00124646"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="success"
            startIcon={<DownloadIcon />}
            fullWidth
            sx={{ height: '56px' }}
          >
            Download Now
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Bank Account Holder Name"
            defaultValue="H. D. A. Mendis"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Bank Name"
            defaultValue="People's Bank"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Bank Code"
            defaultValue="7922"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Branch Name"
            defaultValue="Ambalangoda"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Account Number"
            defaultValue="455952359629"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="success"
            startIcon={<DownloadIcon />}
            fullWidth
            sx={{ height: '56px' }}
          >
            Download Now
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Accept
        </Button>
        <Button variant="contained" color="secondary">
          Remove
        </Button>
      </Box>
    </Box>
  );
}
