import StoreIcon from "@mui/icons-material/Store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaymentIcon from "@mui/icons-material/Payment";
import HistoryIcon from "@mui/icons-material/History";

// icons
const icons = {
  StoreIcon,
  AccountCircleIcon,
  PaymentIcon,
  HistoryIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const shop = {
  id: "shop",
  title: "Shops",
  type: "group",
  children: [
    {
      id: "newShoptRequest",
      title: "New Shop Request",
      type: "item",
      url: "/admin/shop/new-account-request",
      icon: icons.AccountCircleIcon,
      breadcrumbs: false,
    },
    {
      id: "allShopAccounts",
      title: "All Shop Accounts",
      type: "item",
      url: "/admin/shop/all-shop-accounts",
      icon: icons.StoreIcon,
      breadcrumbs: false,
    },
    // {
    //   id: "shopPaymentRequests",
    //   title: " Shop Payment Requests",
    //   type: "item",
    //   url: "/admin/shop/payment-requests",
    //   icon: icons.PaymentIcon,
    //   breadcrumbs: false,
    // },
    {
      id: "shopPaymentHistory",
      title: "Shop Payment History",
      type: "item",
      url: "/admin/shop/payment-history",
      icon: icons.HistoryIcon,
      breadcrumbs: false,
    },
  ],
};

export default shop;