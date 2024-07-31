import React from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import InventoryIcon from '@mui/icons-material/Inventory';

const data = [
  { name: 'Pending', value: 300, color: '#00bcd4' },
  { name: 'Accepted', value: 400, color: '#2196f3' },
  { name: 'Rejected', value: 100, color: '#3f51b5' },
  { name: 'Ongoing', value: 250, color: '#A8D8F7' },
  { name: 'Completed', value: 150, color: '#6CB4EE' },
];

const OrderLevelChart = () => {
  return (
    <Box sx={{ 
      width: 375, 
      height: 375,
      padding: 2, 
      border: '1px solid #e0e0e0', 
      borderRadius: 2,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Order Level</Typography>
      </Box>
      <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>This month statistics</Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ position: 'relative', display: 'inline-flex', justifyContent: 'center' }}>
          <PieChart width={200} height={250}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              startAngle={90}
              endAngle={-270}
              paddingAngle={1}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
              1.5K
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Typography variant="body1" color= 'secondary' component="div" sx={{ mt:5, textAlign: 'center' }}>
              New Packages
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ ml: 4 }}>
          {data.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box sx={{ width: 12, height: 12, backgroundColor: item.color, borderRadius: 6, mr: 1 }} />
              <Typography variant="body2">{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OrderLevelChart;
