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
  title: "Shopper",
  type: "group",
  children: [
    {
      id: "Order & Reviews",
      title: "View All Shoppers",
      type: "item",
      url: "/admin/shopper",
      icon: icons.InventoryIcon,
      breadcrumbs: false,
    },
    /*{
      id: "orders",
      title: "Orders",
      type: "item",
      url: "/courier/add_product",
      icon: icons.AddchartIcon,
      breadcrumbs: false,
    },

    {
      id: "order-statistics",
      title: "Order Statistics",
      type: "item",
      url: "/courier/product_Statistics",
      icon: icons.QueryStatsIcon,
      breadcrumbs: false,
    },*/
  ],
};

export default product;
