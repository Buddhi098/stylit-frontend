import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const addresses = ['123 Fashion Street', 'Stylestown', 'Fashion City', '55555', 'USA'];
const payments = [
  { name: 'Card type:', detail: 'Visa' },
  { name: 'Card holder:', detail: 'Ms. Jane Doe' },
  { name: 'Card number:', detail: 'xxxx-xxxx-xxxx-5678' },
  { name: 'Expiry date:', detail: '08/2025' },
];

const products = [
  { name: 'Blue Denim Jacket', size: 'M', quantity: 1, price: 59.99 },
  { name: 'White T-Shirt', size: 'L', quantity: 2, price: 19.99 },
  { name: 'Black Jeans', size: '32', quantity: 1, price: 45.00 },
];

const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0) + 9.99;

export default function Review() {
  return (
    <Stack spacing={2}>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={`${product.quantity} x ${product.name}`} secondary={`Size: ${product.size}`} />
            <Typography variant="body2">${(product.price * product.quantity).toFixed(2)}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" secondary="Plus taxes" />
          <Typography variant="body2">$9.99</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${totalAmount.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Shipment details
          </Typography>
          <Typography gutterBottom>Jane Doe</Typography>
          <Typography color="text.secondary" gutterBottom>
            {addresses.join(', ')}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: '100%', mb: 1 }}
                >
                  <Typography variant="body1" color="text.secondary">
                    {payment.name}
                  </Typography>
                  <Typography variant="body2">{payment.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}
