// assets
import InventoryIcon from "@mui/icons-material/Inventory";
import AddchartIcon from '@mui/icons-material/Addchart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArticleIcon from '@mui/icons-material/Article';
import PushPinIcon from '@mui/icons-material/PushPin';

// icons
const icons = {
  InventoryIcon,
  AddchartIcon,
  QueryStatsIcon,
  LocalShippingIcon,
  ArticleIcon,
  PushPinIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const orders = {
  id: "group-orders",
  title: "Orders",
  type: "group",
  children: [
    {
      id: "recent_orders",
      title: "Recent Orders",
      type: "item",
      url: "/shop/recent_orders",
      icon: icons.PushPinIcon,
      breadcrumbs: false,
    },
    {
      id: "courier_request",
      title: "Courier Request",
      type: "item",
      url: "/shop/courier_request",
      icon: icons.LocalShippingIcon,
      breadcrumbs: false,
    },
    {
      id: "manage_orders",
      title: "Manage Orders",
      type: "item",
      url: "/shop/manage_orders",
      icon: icons.ArticleIcon,
      breadcrumbs: false,
    },


    {
      id: "order_statistics",
      title: "Order Statistics",
      type: "item",
      url: "/shop/order_statistics",
      icon: icons.QueryStatsIcon,
      breadcrumbs: false,
    },
  ],
};

export default orders;
