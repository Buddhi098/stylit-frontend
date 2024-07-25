import React from 'react';
import { Box, Typography, Container, Button, Divider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Form5 = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60 }} />
      </Box>
      <Typography variant="title_alata" component="h1" gutterBottom>
        Registration Complete
      </Typography>
      <Typography variant="body1_alata" sx={{ mb: 4 }} color="#999999">
        Your registration was successfully completed. We will activate your account within 24 hours. Please stay in touch.
      </Typography>
      <Divider sx={{margin:"10px 0px"}}/>
      <Button variant="contained" size="small" color="primary" href="/">
        <Typography variant='body2_alata'>Go to Homepage</Typography>
      </Button>
    </Container>
  );
};

export default Form5;
