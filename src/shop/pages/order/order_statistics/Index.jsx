import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PendingIcon from '@mui/icons-material/HourglassEmpty';
import InventoryIcon from '@mui/icons-material/Inventory';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import SyncIcon from '@mui/icons-material/Sync';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CourierPerformanceChart from './CourierStatisticsCard.jsx';
import TopCouriers from './TopCouriers.jsx';
import OrderLevels from './OrderLevels.jsx';
import FollowSuggestions from './FollowSuggestions.jsx'

const AnalyticEcommerce = ({ icon, title, count, color }) => {
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
    <Grid container spacing={3} sx={{p: { xs: 2, sm: 3 }}}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Order Statistics</Typography>
        <Typography variant="body2" gutterBottom sx={{ color: '#666', marginBottom: 2 }}>
          Summary of Orders
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<InventoryIcon sx={{ fontSize: 30, color: '#1976d2' }} />} 
              title="New Packages" 
              count="1.5K" 
              color="#1976d2"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<PendingIcon sx={{ fontSize: 30, color: '#ffb74d' }} />} 
              title="Pending Orders" 
              count="200" 
              color="#ffb74d"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<RemoveShoppingCartIcon sx={{ fontSize: 30, color: '#ed6c02' }} />} 
              title="Rejected Orders" 
              count="50" 
              color="#ed6c02"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<AutorenewIcon sx={{ fontSize: 30, color: '#2e7d32' }} />} 
              title="Ongoing Orders" 
              count="300" 
              color="#2e7d32"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AnalyticEcommerce 
              icon={<CheckCircleIcon sx={{ fontSize: 30, color: '#9c27b0' }} />}
              title="Completed Orders" 
              count="1.2K" 
              color="#9c27b0"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <CourierPerformanceChart />
      </Grid>
      <Grid item xs={12} md={7} lg={4}>
        <OrderLevels />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <TopCouriers />
      </Grid>
      <Grid item xs={12} md={7} lg={4}>
        <FollowSuggestions />
      </Grid>
      
    </Grid>
  );
}
