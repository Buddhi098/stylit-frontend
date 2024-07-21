// assets
import InventoryIcon from "@mui/icons-material/Inventory";
import AddchartIcon from '@mui/icons-material/Addchart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

// icons
const icons = {
  InventoryIcon,
  AddchartIcon,
  QueryStatsIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const product = {
  id: "services",
  title: "Services",
  type: "group",
  children: [
    {
      id: "shoppers",
      title: "Shoppers",
      type: "item",
      url: "/admin/shopper",
      icon: icons.InventoryIcon,
      breadcrumbs: false,
    },
    {
      id: "shops",
      title: "Shops",
      type: "item",
      url: "/admin/shops",
      icon: icons.AddchartIcon,
      breadcrumbs: false,
    },

    {
      id: "courier",
      title: "Courier",
      type: "item",
      url: "/admin/courier",
      icon: icons.QueryStatsIcon,
      breadcrumbs: false,
    },
    {
      id: "finance",
      title: "Finance",
      type: "item",
      url: "/admin/finance",
      icon: icons.QueryStatsIcon,
      breadcrumbs: false,
    },
  ],
};

export default product;
