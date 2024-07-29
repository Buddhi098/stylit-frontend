// assets
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';

// icons
const icons = {
    LocalShippingIcon,
    ManageAccountsIcon,
    PersonIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const orders = {
  id: "group-orders",
  title: "Chats",
  type: "group",
  children: [
    {
      id: "customer_chat",
      title: "Customer",
      type: "item",
      url: "/shop/customer_chat",
      icon: icons.PersonIcon,
      breadcrumbs: false,
    },

    {
      id: "courier_chat",
      title: "Courier",
      type: "item",
      url: "/shop/courier_chat",
      icon: icons.LocalShippingIcon,
      breadcrumbs: false,
    },

    {
      id: "admin_chat",
      title: "Administrator",
      type: "item",
      url: "/shop/admin_chat",
      icon: icons.ManageAccountsIcon,
      breadcrumbs: false,
    },
  ],
};

export default orders;
