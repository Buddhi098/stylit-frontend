import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MainCard from '../../../components/MainCard';
import IncomeAreaChart from './IncomeAreaChart';

const ExpectedEarningsCard = () => {
  return (
    <MainCard content={false} sx={{ width: '100%', height: '100%', p: 2, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#555', mb: 1 }}>
          Expected Earnings
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
          $682.5
        </Typography>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#D8BCA4', borderRadius: 2, px: 2, py: 0.5 }}>
          <Typography variant="body2" sx={{ color: '#fff' }}>
            +2.45%
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <IncomeAreaChart />
      </Box>
    </MainCard>
  );
};

export default ExpectedEarningsCard;
