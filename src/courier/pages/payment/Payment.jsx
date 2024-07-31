import React from 'react';
import { Container, Grid, Paper, Typography, Button, Tabs, Tab, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, TextField } from '@mui/material';
import { Send, RequestQuote, CompareArrows } from '@mui/icons-material';
import BalanceCard from './BalanceCard';
import TransactionTable from './TransactionTable';
import Card from './Card';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Payment = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container sx={{p: { xs: 2, sm: 3 }}}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <CreditCardIcon />
        <Typography variant="h5" sx={{ marginLeft: 1 }}>Payment Details</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <BalanceCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card/>
        </Grid>
        <Grid item xs={12}>
            <TransactionTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Payment;
