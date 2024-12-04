import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PercentIcon from '@mui/icons-material/Percent';
import WebApi from '../../../api/WebApi';

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

  const [topProducts, setTopProducts] = useState([]);
  const shopId = localStorage.getItem("id");

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const response = await WebApi.get(`http://localhost:8081/shop/product/topProducts?shopId=${shopId}`);
        if (response.data && Array.isArray(response.data.topProducts)) {
          setTopProducts(response.data.topProducts);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching top products:", error);
      }
    };

    fetchTopProducts();
  }, [shopId]);
  console.log("topProducts :",topProducts);

  return (
    <Box sx={{ padding: 3, backgroundColor: '#fff', borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>High Quantitiies</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Pricing</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topProducts.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body2">{row.generalInformation.productName}</Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <InventoryIcon sx={{ mr: 1, color: '#6CB4EE' }} />
                    <Typography variant="body2">{row.generalInformation.category}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowForwardIcon sx={{ mr: 1, color: '#6CB4EE' }} />
                    <Typography variant="body2">{row.generalInformation.brand}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{row.generalInformation.gender}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{row.pricing.basePrice}</Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2">{row.totalQuantity.toLocaleString()}</Typography>
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
