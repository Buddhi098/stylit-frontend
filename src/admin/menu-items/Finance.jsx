import BarChartIcon from "@mui/icons-material/BarChart";

// icons
const icons = {
  BarChartIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const finance = {
  id: "finance",
  title: "Finance",
  type: "group",
  children: [
    {
      id: "stylitStatistics",
      title: "Stylit Statistics",
      type: "item",
      url: "/admin/finance/stylit-statistics",
      icon: icons.BarChartIcon,
      breadcrumbs: false,
    },
  ],
};

export default finance;