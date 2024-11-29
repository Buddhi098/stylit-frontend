import { useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from '../../../components/MainCard';
import CourierPerformanceChart from './CourierPerformanceChart.jsx';

// ==============================|| DEFAULT - UNIQUE VISITOR ||============================== //

export default function CourierStatisticsCard() {
  return (
    <>
       <MainCard content={false} sx={{ width: '100%', height: '100%', p: 2, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#555', mb: 1 }}>
          Courier Statistics
        </Typography>
        </Box>
      <Box sx={{ mt: 1 }}>
        <CourierPerformanceChart />
      </Box>
    </MainCard>
    </>
  );
}
