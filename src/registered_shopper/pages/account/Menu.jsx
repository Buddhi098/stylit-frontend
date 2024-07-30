import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
  ButtonBase,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    {
      name: "Contact Information",
      link: "contact_information",
    },
    {
      name: "Shipping Information",
      link: "shipping_information",
    },
    {
      name: "Payment Methods",
      link: "payment_methods",
    },
    {
      name: "Orders & Returns",
      link: "orders_and_returns",
    }
  ];

  return (
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <List component="nav">
        {menuItems.map((item, index) => (
          <React.Fragment key={item}>
            <Link to={`/shopper/account/${item.link}`}>
              <ButtonBase component="li" sx={{ width: "100%" }}>
                <ListItem>
                  <ListItemText
                    primary={<Typography variant="body2">{item.name}</Typography>}
                  />
                </ListItem>
              </ButtonBase>
            </Link>
            {index < menuItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Stack>
  );
};

export default Menu;
