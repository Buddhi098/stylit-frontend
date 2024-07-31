import * as React from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import img1 from "../../../public/assets/images/men_page/s11.png"
import img2 from "../../../public/assets/images/men_page/s12.png"
import img3 from "../../../public/assets/images/men_page/s13.png"
import img4 from "../../../public/assets/images/men_page/s14.png"

const products = [
  {
    name: 'Blue Denim Jacket',
    desc: 'Size M',
    price: '$59.99',
    image: img1, // Replace with actual image URL
  },
  {
    name: 'White T-Shirt',
    desc: 'Size L',
    price: '$19.99',
    image: img2, // Replace with actual image URL
  },
  {
    name: 'Black Jeans',
    desc: 'Size 32',
    price: '$45.00',
    image: img3, // Replace with actual image URL
  },
  {
    name: 'Red Scarf',
    desc: 'One Size',
    price: '$12.50',
    image: img4, // Replace with actual image URL
  },
];

function Info({ totalPrice }) {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        {totalPrice}
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemAvatar>
              <Avatar
                alt={product.name}
                src={product.image}
                sx={{ width: 56, height: 56 ,borderRadius:0 , mr: 2}}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
            <Typography variant="body1" fontWeight="medium">
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

Info.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default Info;
