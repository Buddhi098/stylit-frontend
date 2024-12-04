import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography, CircularProgress } from '@mui/material';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../../../../config/firebaseConfig';

const SizeChartModal = ({ open, handleClose, color, id }) => {
  const [sizeChart, setSizeChart] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const downloadImage = async () => {
      if (!id || !color) {
        console.warn("Missing `id` or `color` prop");
        return;
      }

      setIsLoading(true); // Start loading

      try {
        // Construct the direct file path
        const filePath = `/sizeChartImages/${id}${color}chart`;
        console.log(`Fetching image from: ${filePath}`);

        const fileRef = ref(storage, filePath);
        const url = await getDownloadURL(fileRef);

        setSizeChart(url); // Set the state with the image's URL
      } catch (error) {
        console.error("Error fetching image from Firebase:", error);
        setSizeChart(null); // Handle error cases
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    downloadImage();
  }, [id, color]); // Re-run when `id` or `color` changes

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
        {isLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '200px',
            }}
          >
            <CircularProgress />
          </Box>
        ) : sizeChart ? (
          <img
            src={sizeChart}
            alt="Size Chart"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          />
        ) : (
          <Typography variant="body2" color="textSecondary">
            No size chart available.
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default SizeChartModal;
