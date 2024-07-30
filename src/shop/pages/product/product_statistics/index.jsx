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
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ExpectedEarningsCard from './ExpectedEarningsCard';
import StockLevelChart from './StockLevel';
import ProductAnalytics from './ProductAnalytics';
import PopularBrands from './PopularBrands';

const AnalyticEcommerce = ({ icon, title, count }) => {
  return (
    <Card sx={{ height: '100px', display: 'flex', alignItems: 'center', borderRadius: '12px', boxShadow: 1, bgcolor: '#FAFAFA' }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', width: '100%', padding: '16px !important' }}>
        <Box sx={{ bgcolor: '#FFF', borderRadius: '50%', width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 2 }}>
          {icon}
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontSize: '1.25rem', fontWeight: 600, color: '#333' }}>
            {count}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.775rem' }}>
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
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<HighlightOffIcon sx={{ fontSize: 30, color: '#ed6c02' }} />} 
              title="Out of Stock" 
              count="100" 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<ShoppingBagIcon sx={{ fontSize: 30, color: '#2e7d32' }} />} 
              title="Active Products" 
              count="1.3K" 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<LocalShippingIcon sx={{ fontSize: 30, color: '#9c27b0' }} />} 
              title="Products Sold" 
              count="500" 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<AutorenewIcon sx={{ fontSize: 30, color: '#ffb74d' }} />}
              title="Products Returned" 
              count="52" 
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
