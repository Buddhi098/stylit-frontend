import React from 'react';
import { Box, Typography, Divider,LinearProgress} from '@mui/material';


const BalanceCard = () => {
  return (
      <Box p={3} sx={{border: '1px solid #6CB4EE',borderRadius: 3,background:'white',boxShadow:3,height: 258,overflow:'auto'}}>
        <Typography variant="body2" color='textSecondary' sx={{mt:2}}>Total balance</Typography>
    <Box >
    <Typography variant="h4" component="span">
      Rs 13,908 
    </Typography>
    <Typography variant="caption" color="text.secondary" component="span" sx={{ ml: 1 ,fontWeight:'bold'}}>
      As Of Today
    </Typography>
    </Box>
    <Box sx={{ mt: 2, mb: 1 }}>
  <Typography variant="caption" color="text.secondary" >
    You have earned an extra{' '}
    <Typography component="span" variant="caption" color="warning.main">
      Rs.2700
    </Typography>
  </Typography>
</Box>

        <Divider />
        <Box mt={4}>
          <Typography variant="body2">5 Days Left for Redemption</Typography>
          <LinearProgress variant="determinate" color='success' value={64.28} sx={{ height: 10, borderRadius: 5 }} />
        </Box>
      </Box>
  );
};

export default BalanceCard;
