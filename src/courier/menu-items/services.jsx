// assets
import InventoryIcon from "@mui/icons-material/Inventory";
import AddchartIcon from '@mui/icons-material/Addchart';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';

// icons
const icons = {
  InventoryIcon,
  AddchartIcon,
  DomainVerificationIcon,
  ChecklistRtlIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const services = {
  id: "group-services",
  title: "Services",
  type: "group",
  children: [
    {
      id: "Delivery Requests",
      title: "Delivery Requests",
      type: "item",
      url: "/courier/delivery_request",
      icon: icons.AddchartIcon,
      breadcrumbs: false,
    },
    {
      id: "Approved Deliveries",
      title: "Approved Deliveries",
      type: "item",
      url: "/courier/approved_delivery",
      icon: icons.ChecklistRtlIcon,
      breadcrumbs: false,
    },
    {
      id: "Ongoing Deliveries",
      title: "Ongoing Deliveries",
      type: "item",
      url: "/courier/ongoing_delivery",
      icon: icons.InventoryIcon,
      breadcrumbs: false,
    },

    {
      id: "Completed Deliveries",
      title: "Completed Deliveries",
      type: "item",
      url: "/courier/completed_delivery",
      icon: icons.DomainVerificationIcon,
      breadcrumbs: false,
    },
  ],
};

export default services;
