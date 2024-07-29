import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


// icons
const icons = {
  PersonIcon,
  StoreIcon,
  ManageAccountsIcon
};

const chat = {
    id: "group-chat",
    title: "Chat",
    type: "group",
    children: [
      {
        id: "customers",
        title: "Customers",
        type: "item",
        url: "/courier/chat/customer_chat",
        icon: icons.PersonIcon,
        breadcrumbs: false,
      },
  
      {
        id: "shops",
        title: "Shops",
        type: "item",
        url: "/courier/chat/shop_chat",
        icon: icons.StoreIcon,
        breadcrumbs: false,
      },
      {
        id: "admin",
        title: "Admin",
        type: "item",
        url: "/courier/chat/admin_chat",
        icon: icons.ManageAccountsIcon,
        breadcrumbs: false,
      },
    ],
  };
  
  export default chat;