import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

import AdminLayout from '../admin/Admin';
import { element } from 'prop-types';

const Dashboard = Loadable(lazy(()=>import('../admin/pages/dashboard')))


// ==============================|| MAIN ROUTING ||============================== //
const AdminRoutes = {
  path: '/admin',
  element:<AdminLayout/>,
  children: [
    {
      path: 'dashboard',
      element: <Dashboard/>
    },

  ]
};

export default AdminRoutes;
