import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',    // Center vertically
        Height: '100vh',         // Full viewport height to center the spinner
        Width: '100%',           // Full width to ensure the spinner is centere
        boxShadow: 'none'
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;
