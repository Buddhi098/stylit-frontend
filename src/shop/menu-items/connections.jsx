// assets
import PersonIcon from '@mui/icons-material/Person';

// icons
const icons = {
    PersonIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const orders = {
  id: "group-orders",
  title: "Connections",
  type: "group",
  children: [
    {
      id: "manage_connections",
      title: "Manage Connections",
      type: "item",
      url: "/shop/manage_connections",
      icon: icons.PersonIcon,
      breadcrumbs: false,
    },
  ],
};

export default orders;
