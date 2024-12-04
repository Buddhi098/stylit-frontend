import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import WebApi from '../../api/WebApi';

const OrderDetail = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [open, setOpen] = useState(false);

  // Fetch orders from API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await WebApi.get(`/shopper/order/getAllOrdersByShopperId/${localStorage.getItem('id')}`);
        const fetchedOrders = response.data.map((order) => ({
          id: order.id,
          date: new Date(order.createdAt).toLocaleDateString(),
          customerName: `${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`,
          totalAmount: order.totalCost,
          items: order.orderItems.map((item) => ({
            id: item.id,
            name: item.productName,
            color: item.color,
            size: item.size,
            price: item.price,
            quantity: item.quantity,
            status: item.status,
          })),
        }));
        setOrders(fetchedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  const handleOpen = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedOrder(null);
    setOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#FFCCCB'; // Light red
      case 'shipped':
        return '#FFFF99'; // Light yellow
      case 'delivered':
        return '#C8E6C9'; // Light green
      default:
        return '#D3D3D3'; // Default gray
    }
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ marginBottom: 1, textAlign: 'center' }}>
        Orders
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ marginBottom: 3, textAlign: 'center', color: 'text.secondary' }}
      >
        Manage and view the details of your orders
      </Typography>
      <Card sx={{ maxWidth: 900, margin: '0 auto', padding: 2 }}>
        <List>
          {orders.map((order, index) => (
            <React.Fragment key={index}>
              <ListItem button onClick={() => handleOpen(order)}>
                <ListItemText
                  primary={`Order ID: ${order.id}`}
                  secondary={`Customer: ${order.customerName} | Total: $${order.totalAmount.toFixed(2)}`}
                />
              </ListItem>
              {index < orders.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Card>

      {/* Order Details Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          {selectedOrder ? (
            <Box>
              <Typography variant="subtitle1" color="textSecondary">
                Order ID:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedOrder.id}
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                Customer Name:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedOrder.customerName}
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                Order Date:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedOrder.date}
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                Total Amount:
              </Typography>
              <Typography variant="body1" gutterBottom>
                ${selectedOrder.totalAmount.toFixed(2)}
              </Typography>

              <Divider sx={{ marginY: 3 }} />

              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Items
              </Typography>
              <List>
                {selectedOrder.items.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={`${item.name} (${item.color}, ${item.size})`}
                        secondary={`Quantity: ${item.quantity} | Price: $${item.price.toFixed(2)} | Status: ${item.status}`}
                      />
                    </ListItem>
                    {index < selectedOrder.items.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          ) : (
            <Typography>No details available.</Typography>
          )}
        </DialogContent>
        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default OrderDetail;
