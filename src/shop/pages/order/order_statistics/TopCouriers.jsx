import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TimerIcon from '@mui/icons-material/Timer';
import PercentIcon from '@mui/icons-material/Percent';

const data = [
  { name: 'FedEx', totalDeliveries: 120, onTimeDeliveries: 114, performance: '+95%' },
  { name: 'Domex', totalDeliveries: 150, onTimeDeliveries: 135, performance: '+90%' },
  { name: 'DHL', totalDeliveries: 100, onTimeDeliveries: 85, performance: '+85%' },
  { name: 'Pronto Lanka', totalDeliveries: 130, onTimeDeliveries: 104, performance: '+80%' },
  { name: 'Aramex', totalDeliveries: 110, onTimeDeliveries: 82, performance: '+74%' },
];

const TopCouriers = () => {
  return (
    <Box sx={{ padding: 3, backgroundColor: '#fff', borderRadius: 2, boxShadow: '0 4px 8px rgba(0,0,0,0.1)', height:350 }}>
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', flexGrow: 1 }}>Top Couriers</Typography>
        <DeliveryDiningIcon sx={{ fontSize: 30, color: '#6CB4EE' }} />
      </Box>
      <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Courier Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Total Deliveries</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>On-Time Deliveries</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Performance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                  <Typography variant="body2" sx={{ color: '#333' }}>{row.name}</Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <DeliveryDiningIcon sx={{ mr: 1, color: '#6CB4EE' }} />
                    <Typography variant="body2">{row.totalDeliveries.toLocaleString()}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TimerIcon sx={{ mr: 1, color: '#6CB4EE' }} />
                    <Typography variant="body2">{row.onTimeDeliveries.toLocaleString()}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PercentIcon sx={{ mr: 1, color: '#6CB4EE' }} />
                    <Typography variant="body2" sx={{ color: row.performance.startsWith('+') ? 'green' : 'red' }}>
                      {row.performance}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopCouriers;
