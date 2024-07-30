import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaymentIcon from "@mui/icons-material/Payment";
import HistoryIcon from "@mui/icons-material/History";

// icons
const icons = {
  LocalShippingIcon,
  AccountCircleIcon,
  PaymentIcon,
  HistoryIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const courier = {
  id: "courier",
  title: "Couriers",
  type: "group",
  children: [
    {
      id: "newCourierRequest",
      title: "New Courier Request",
      type: "item",
      url: "/admin/courier/new-courier-request",
      icon: icons.AccountCircleIcon,
      breadcrumbs: false,
    },
    {
      id: "allCourierAccounts",
      title: "All Courier Accounts",
      type: "item",
      url: "/admin/courier/all-courier-accounts",
      icon: icons.LocalShippingIcon,
      breadcrumbs: false,
    },
    // {
    //   id: "courierPaymentRequests",
    //   title: "Courier Payment Requests",
    //   type: "item",
    //   url: "/admin/courier/payment-requests",
    //   icon: icons.PaymentIcon,
    //   breadcrumbs: false,
    // },
    {
      id: "courierPaymentHistory",
      title: "Courier Payment History",
      type: "item",
      url: "/admin/courier/payment-history",
      icon: icons.HistoryIcon,
      breadcrumbs: false,
    },
  ],
};

export default courier;