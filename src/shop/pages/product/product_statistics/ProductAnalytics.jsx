import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PercentIcon from '@mui/icons-material/Percent';

const data = [
  {
    name: 'Casual T-Shirts',
    firstStock: 4159,
    sold: 878,
    dateAdded: 'Jul 14, 2023',
    pricing: 'Rs.2000',
    conversionRateValue: '20',
    conversionRate: '+20%',
  },
  {
    name: 'Slim Fit Jeans',
    firstStock: 1590,
    sold: 981,
    dateAdded: 'Aug 09, 2023',
    pricing: 'Rs.4000',
    conversionRateValue: '15',
    conversionRate: '+15%',
  },
  {
    name: 'Perfume',
    firstStock: 1090,
    sold: 184,
    dateAdded: 'Aug 12, 2023',
    pricing: 'Rs.2500',
    conversionRateValue: '-5',
    conversionRate: '-5%',
  },
  {
    name: 'Running Shoes',
    firstStock: 2590,
    sold: 995,
    dateAdded: 'Aug 24, 2023',
    pricing: 'Rs.11000',
    conversionRateValue: '10',
    conversionRate: '+10%',
  },
  {
    name: 'Woolen Scarf',
    firstStock: 4100,
    sold: 645,
    dateAdded: 'Nov 30, 2023',
    pricing: 'Rs.3500',
    conversionRateValue: '12',
    conversionRate: '+12%',
  },
  {
    name: 'Casual Shirt',
    firstStock: 3140,
    sold: 645,
    dateAdded: 'Dec 04, 2023',
    pricing: 'Rs.3250',
    conversionRateValue: '-2',
    conversionRate: '-2%',
  },
//   {
//     name: 'Apple Watch Ultra 2 Alphine',
//     firstStock: 2150,
//     sold: 167,
//     dateAdded: 'Dec 08, 2023',
//     pricing: '$799',
//     conversionRateValue: '5',
//     conversionRate: '+5%',
//   },
];

const ProductAnalytics = () => {
  return (
    <Box sx={{ padding: 3, backgroundColor: '#fff', borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Most Sales</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>First Stock</TableCell>
              <TableCell>Sold</TableCell>
              <TableCell>Date Added</TableCell>
              <TableCell>Pricing</TableCell>
              <TableCell>Conversion Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body2">{row.name}</Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <InventoryIcon sx={{ mr: 1, color: '#6CB4EE' }} />
                    <Typography variant="body2">{row.firstStock.toLocaleString()}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowForwardIcon sx={{ mr: 1, color: '#6CB4EE' }} />
                    <Typography variant="body2">{row.sold.toLocaleString()}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{row.dateAdded}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{row.pricing}</Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ color: row.conversionRate.startsWith('+') ? 'green' : 'red', mr: 1 }}>
                      {row.conversionRate}
                    </Typography>
                    <Typography variant="body2">{row.conversionRateValue}%</Typography>
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

export default ProductAnalytics;
