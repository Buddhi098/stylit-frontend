import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Select,
  MenuItem
} from '@mui/material';

const initialData = {
  Week: [
    { rank: '01', name: 'Bear Appeal', popularity: 80, sales: 58 },
    { rank: '02', name: 'Levi\'s', popularity: 75, sales: 48 },
    { rank: '03', name: 'Tommy Hilfiger', popularity: 60, sales: 48 },
    { rank: '04', name: 'Givenchy', popularity: 55, sales: 44 },
    { rank: '05', name: 'SWX', popularity: 45, sales: 26 },
  ],
  Month: [
    { rank: '01', name: 'Levi\'s', popularity: 85, sales: 62 },
    { rank: '02', name: 'Bear Appeal', popularity: 78, sales: 56 },
    { rank: '03', name: 'Givenchy', popularity: 70, sales: 52 },
    { rank: '04', name: 'Lululemon', popularity: 65, sales: 38 },
    { rank: '05', name: 'Lenskart', popularity: 55, sales: 28 },
  ],
  Year: [
    { rank: '01', name: 'Jansport', popularity: 95, sales: 73 },
    { rank: '02', name: 'Nike', popularity: 88, sales: 56 },
    { rank: '03', name: 'Tommy Hilfiger', popularity: 80, sales: 50 },
    { rank: '04', name: 'Bear Appeal', popularity: 75, sales: 41 },
    { rank: '05', name: 'AllSaints', popularity: 65, sales: 30 },
  ],
};

const PopularBrands = () => {
  const [period, setPeriod] = useState('Week');
  const [products, setProducts] = useState(initialData[period]);

  useEffect(() => {
    setProducts(initialData[period]);
  }, [period]);

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <TableContainer component={Paper} sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          Popular Brands
        </Typography>
        <Select
          value={period}
          size="small"
          onChange={handleChange}
          sx={{ minWidth: 100, '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ddd' } }}
        >
          <MenuItem value="Week">Week</MenuItem>
          <MenuItem value="Month">Month</MenuItem>
          <MenuItem value="Year">Year</MenuItem>
        </Select>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', color: '#666' }}>RANK</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#666' }}>PRODUCT NAME</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#666' }}>POPULARITY</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#666' }}>SALES</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.rank} sx={{ '&:nth-of-type(odd)': { bgcolor: '#f9f9f9' } }}>
              <TableCell sx={{ padding: '8px 16px' }}>{product.rank}</TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>{product.name}</TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: `${product.popularity}%`,
                      height: '6px',
                      bgcolor: '#3f51b5',
                      borderRadius: '4px',
                      marginRight: '8px'
                    }}
                  />
                  <Typography variant="body2" sx={{ color: '#555' }}>{product.popularity}%</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Box
                  sx={{
                    backgroundColor: '#e0f7fa',
                    color: '#6CB4EE',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    display: 'inline-block',
                    fontWeight: 'bold'
                  }}
                >
                  {product.sales}%
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PopularBrands;
