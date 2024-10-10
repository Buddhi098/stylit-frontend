import React, { useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';

const SizeChartModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="size-chart-modal-title"
      aria-describedby="size-chart-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="size-chart-modal-title" variant="h6" component="h2">
          Size Chart
        </Typography>
        <img
          src="/path/to/your/image/qwwwww.png"
          alt="Size Chart"
          style={{ width: '100%' }}
        />
      </Box>
    </Modal>
  );
};

export default SizeChartModal;
