import React, { useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

const dataMap = {
  week: [
    { name: 'Filled', value: 50 },
    { name: 'Unfilled', value: 50 },
  ],
  month: [
    { name: 'Filled', value: 77 },
    { name: 'Unfilled', value: 23 },
  ],
  year: [
    { name: 'Filled', value: 90 },
    { name: 'Unfilled', value: 10 },
  ],
};

const COLORS = ['#79C3F3', '#b9dff8'];

const ProductChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <Box sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2, width: 380, backgroundColor: 'white' }}>
      <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
        <Typography variant="h5" fontWeight="bold">Selling Product</Typography>
      </Stack>
      
      <Stack direction="row" spacing={1.5} mb={5} mt={5}>
        <Button
          variant={selectedPeriod === 'week' ? 'contained' : 'outlined'}
          sx={{
            flex: 1,
            color: selectedPeriod === 'week' ? '#FFFFFF' : '#79C3F3',
            borderColor: '#79C3F3',
            py: 1,
            bgcolor: selectedPeriod === 'week' ? '#79C3F3' : 'transparent',
            '&:hover': {
              bgcolor: '#79C3F3',
              color: '#FFFFFF',
            },
          }}
          onClick={() => handlePeriodChange('week')}
        >
          Week
        </Button>
        <Button
          variant={selectedPeriod === 'month' ? 'contained' : 'outlined'}
          sx={{
            flex: 1,
            color: selectedPeriod === 'month' ? '#FFFFFF' : '#79C3F3',
            borderColor: '#79C3F3',
            py: 1,
            bgcolor: selectedPeriod === 'month' ? '#79C3F3' : 'transparent',
            '&:hover': {
              bgcolor: '#79C3F3',
              color: '#FFFFFF',
            },
          }}
          onClick={() => handlePeriodChange('month')}
        >
          Month
        </Button>
        <Button
          variant={selectedPeriod === 'year' ? 'contained' : 'outlined'}
          sx={{
            flex: 1,
            color: selectedPeriod === 'year' ? '#FFFFFF' : '#79C3F3',
            borderColor: '#79C3F3',
            py: 1,
            bgcolor: selectedPeriod === 'year' ? '#79C3F3' : 'transparent',
            '&:hover': {
              bgcolor: '#79C3F3',
              color: '#FFFFFF',
            },
          }}
          onClick={() => handlePeriodChange('year')}
        >
          Year
        </Button>
      </Stack>
      
      <Box sx={{ position: 'relative', height: 200 }}>
        <PieChart width={200} height={300} style={{ margin: 'auto' }}>
          <Pie
            data={dataMap[selectedPeriod]}
            cx={95}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={100}
            paddingAngle={0}
            dataKey="value"
          >
            {dataMap[selectedPeriod].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
         <Box sx={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <Typography variant="h6">Product</Typography>
          <Typography variant="h3" fontWeight="bold">11,549</Typography>
          <Typography variant="body1" color="error" fontSize="0.8rem">
            -7% <span style={{ color: 'grey' }}>vs 3000 expected</span>
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid #E0E0E0' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body1" color="textSecondary">Visitor Growth</Typography>
            <Typography variant="h4" fontWeight="bold">24.9K</Typography>
          </Box>
          <Typography variant="body1" color="error" fontSize="0.9rem" textAlign="right">
            -12% <br />
            <span style={{ color: 'grey' }}>Compare to 27K last month</span>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductChart;
