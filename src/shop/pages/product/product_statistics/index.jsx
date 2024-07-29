import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HighlightOffIcon from '@mui/icons-material/HighlightOff'; // Relevant icon for Out of Stock
import ExpectedEarningsCard from './ExpectedEarningsCard';
import StockLevelChart from './StockLevel';
import ProductAnalytics from './ProductAnalytics';
import PopularBrands from './PopularBrands';

const AnalyticEcommerce = ({ icon, title, count, bgColor, iconColor, borderColor }) => {
  return (
    <Card sx={{ 
      height: '100px', 
      display: 'flex', 
      alignItems: 'center', 
      borderRadius: '12px', 
      bgcolor: bgColor || 'rgba(250, 250, 250, 0.8)', 
      color: '#333', 
      border: `1px solid ${borderColor || '#ddd'}` 
    }}>
      <CardContent sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        width: '100%', 
        padding: '16px !important' 
      }}>
        <Box sx={{ 
          bgcolor: iconColor || '#FFF', 
          borderRadius: '50%', 
          width: 50, 
          height: 50, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginRight: 2 
        }}>
          {icon}
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontSize: '1.25rem', fontWeight: 600 }}>
            {count}
          </Typography>
          <Typography variant="body2" color="inherit" sx={{ fontSize: '0.775rem' }}>
            {title}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default function ProductCards() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Product Statistics</Typography>
        <Typography variant="body2" gutterBottom sx={{ color: '#666', marginBottom: 2 }}>
          Stock Summary
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<InventoryIcon sx={{ fontSize: 30, color: '#1976d2' }} />} 
              title="Total Products" 
              count="1.5K" 
              bgColor="rgba(25, 118, 210, 0.1)"
              borderColor="#1976d2"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<HighlightOffIcon sx={{ fontSize: 30, color: '#e57373' }} />} 
              title="Out of Stock" 
              count="100" 
              bgColor="rgba(229, 115, 115, 0.1)"
              borderColor="#e57373"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<ShoppingBagIcon sx={{ fontSize: 30, color: '#2e7d32' }} />} 
              title="Active Products" 
              count="1.3K" 
              bgColor="rgba(46, 125, 50, 0.1)"
              borderColor="#2e7d32"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<LocalShippingIcon sx={{ fontSize: 30, color: '#9c27b0' }} />} 
              title="Products Sold" 
              count="500" 
              bgColor="rgba(156, 39, 176, 0.1)"
              borderColor="#9c27b0"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<AutorenewIcon sx={{ fontSize: 30, color: '#ffb74d' }} />}
              title="Products Returned" 
              count="52" 
              bgColor="rgba(255, 183, 77, 0.1)"
              borderColor="#ffb74d"
            />
          </Grid>
        </Grid>
      </Grid>
      
      <Grid item xs={12} md={7} lg={8}>
        <ProductAnalytics />
      </Grid>
      <Grid item xs={12} md={7} lg={4}>
        <ExpectedEarningsCard />
      </Grid>

      <Grid item xs={12} md={7} lg={8}>
        <PopularBrands />
      </Grid>
      <Grid item xs={12} md={7} lg={4}>
        <StockLevelChart />
      </Grid>
      
    </Grid>
  );
}
