import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';


// icons
const icons = {
  PaymentIcon,
  LocalAtmIcon
};

const payment = {
    id: "group-payment",
    title: "Payment",
    type: "group",
    children: [
      {
        id: "Payment Method",
        title: "Payment Methods",
        type: "item",
        url: "/courier/payment_method",
        icon: icons.PaymentIcon,
        breadcrumbs: false,
      },
  
      {
        id: "Withdraw Cash",
        title: "Withdraw Cash",
        type: "item",
        url: "/courier/withdraw_cash",
        icon: icons.LocalAtmIcon,
        breadcrumbs: false,
      },
    ],
  };
  
  export default payment;