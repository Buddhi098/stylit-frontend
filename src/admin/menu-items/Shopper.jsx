// assets
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


// icons
const icons = {
  ShoppingCartIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const shopper = {
  id: "shopper",
  title: "Shopper",
  type: "group",
  children: [
    {
      id: "shoppers",
      title: "All Shoppers",
      type: "item",
      url: "/admin/shopper",
      icon: icons.ShoppingCartIcon,
      breadcrumbs: false,
    },
    
  ],
};

export default shopper;
