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
  id: "group-product",
  title: "Product",
  type: "group",
  children: [
    {
      id: "manage-product",
      title: "Manage Product",
      type: "item",
      url: "/shop/manage_product",
      icon: icons.InventoryIcon,
      breadcrumbs: false,
    },
    {
      id: "add-product",
      title: "Add Products",
      type: "item",
      url: "/shop/add_product",
      icon: icons.AddchartIcon,
      breadcrumbs: false,
    },

    {
      id: "product-Statistics",
      title: "Product Statistics",
      type: "item",
      url: "/shop/product_Statistics",
      icon: icons.QueryStatsIcon,
      breadcrumbs: false,
    },
  ],
};

export default product;
