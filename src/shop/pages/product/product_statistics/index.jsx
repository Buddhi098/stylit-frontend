// material-ui
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from '../../../components/MainCard';
import AnalyticEcommerce from '../../../components/cards/statistics/AnalyticEcommerce';

// import ExpectedEarnings from './expected_earning'




// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
    return (
        <Grid container spacing={3}>
          {/* Product Statistics title */}
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Product Statistics
            </Typography>
          </Grid>
    
          {/* Product Statistics cards */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={2.4}>
                <AnalyticEcommerce title="Total Products" count="1.5K" percentage={10} isLoss={false} extra="10%" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2.4}>
                <AnalyticEcommerce title="Out of Stock" count="100" percentage={10} isLoss extra="10%" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2.4}>
                <AnalyticEcommerce title="Active Products" count="1.3K" percentage={15} isLoss extra="15%" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2.4}>
                <AnalyticEcommerce title="Products Sold" count="500" percentage={10} isLoss color="warning" extra="10%" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2.4}>
                <AnalyticEcommerce title="Return Products" count="52" percentage={10} isLoss color="warning" extra="10%" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

          {/* <Grid item xs={12} md={7} lg={8}>
            <ExpectedEarnings />
          </Grid> */}

        </Grid>
  );
}
