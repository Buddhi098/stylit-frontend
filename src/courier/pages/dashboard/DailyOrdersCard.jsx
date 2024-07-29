import { useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from '../../components/MainCard';
import IncomeAreaChart from './IncomeAreaChart';

// ==============================|| DEFAULT - UNIQUE VISITOR ||============================== //

export default function UniqueVisitorCard() {
  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Daily Orders</Typography>
        </Grid>
      </Grid>
      <MainCard content={false} sx={{ mt: 1.5, width: '100%', height: '95%' }}>
        <Box sx={{ pt: 1, pr: 2 }}>
          <IncomeAreaChart />
        </Box>
      </MainCard>
    </>
  );
}
