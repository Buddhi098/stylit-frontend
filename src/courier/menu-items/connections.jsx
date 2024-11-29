import GroupIcon from '@mui/icons-material/Group';


// icons
const icons = {
  GroupIcon
};

const connections = {
    id: "group-connections",
    title: "Connections",
    type: "group",
    children: [
      {
        id: "Manage Connections",
        title: "Manage Connections",
        type: "item",
        url: "/courier/manage_connection",
        icon: icons.GroupIcon,
        breadcrumbs: false,
      },
    ],
  };
  
  export default connections;