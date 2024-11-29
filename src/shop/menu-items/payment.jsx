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
  title: "Payment",
  type: "group",
  children: [
    {
      id: "payment_method",
      title: "Payment Methods",
      type: "item",
      url: "/shop/payment_method",
      icon: icons.PersonIcon,
      breadcrumbs: false,
    },

    {
      id: "withdraw_cash",
      title: "Withdraw Cash",
      type: "item",
      url: "/shop/withdraw_cash",
      icon: icons.LocalShippingIcon,
      breadcrumbs: false,
    },
  ],
};

export default orders;
