import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Rating } from '@mui/material';

const StarRating = ({ ratings }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h4" sx={{ mr: 1 }}>
        {ratings}
      </Typography>
      <Rating
        value={Number(ratings)}
        precision={0.5}
        readOnly
        icon={<StarIcon fontSize="inherit" />}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
};

export default StarRating;
