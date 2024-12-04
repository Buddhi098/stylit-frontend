import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import WebApi from '../../api/WebApi'; // Update with correct path

function Info({cartItems , imageUrls , totalPrice}) {

  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        Rs {totalPrice}
      </Typography>
      <List disablePadding>
        {cartItems.map((item) => (
          <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
            <ListItemAvatar>
              <Avatar
                alt={item.productName}
                src={imageUrls[item.id] || '/path/to/placeholder.jpg'}
                sx={{ width: 56, height: 56, borderRadius: 0, mr: 2 }}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{ mr: 2 }}
              primary={item.productName}
              secondary={`Size ${item.size} | ${item.color}`}
            />
            <Typography variant="body1" fontWeight="medium">
              Rs {item.price.toFixed(2)}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

Info.propTypes = {
  shopperId: PropTypes.number.isRequired, // You might want to use this prop elsewhere if needed
  totalPrice: PropTypes.string, // This may be redundant as we calculate totalPrice within the component
};

export default Info;
