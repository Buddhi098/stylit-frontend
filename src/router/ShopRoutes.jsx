import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

import ShopLayout from '../shop/Shop';
import { element } from 'prop-types';

const Dashboard = Loadable(lazy(()=>import('../shop/pages/dashboard')))


// ==============================|| MAIN ROUTING ||============================== //
const ShopRoutes = {
  path: '/shop',
  element:<ShopLayout/>,
  children: [
    {
      path: 'dashboard',
      element: <Dashboard/>
    },

  ]
};

export default ShopRoutes;
