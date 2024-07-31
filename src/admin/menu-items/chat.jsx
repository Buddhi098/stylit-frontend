import LocalShipping from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


// icons
const icons = {
  LocalShipping,
  StoreIcon,
  ManageAccountsIcon
};

const chat = {
    id: "group-chat",
    title: "Chat",
    type: "group",
    children: [
      // {
      //   id: "customers",
      //   title: "Customers",
      //   type: "item",
      //   url: "/courier/chat/customer_chat",
      //   icon: icons.PersonIcon,
      //   breadcrumbs: false,
      // },
  
      {
        id: "shops",
        title: "Shops",
        type: "item",
        url: "/admin/chat/shop_chat",
        icon: icons.StoreIcon,
        breadcrumbs: false,
      },
      {
        id: "couriers",
        title: "Couriers",
        type: "item",
        url: "/admin/chat/courier_chat",
        icon: icons.LocalShipping,
        breadcrumbs: false,
      },
    ],
  };
  
  export default chat;