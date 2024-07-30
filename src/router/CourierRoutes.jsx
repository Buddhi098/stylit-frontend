import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

import CourierLayout from '../courier/Courier';
import { element } from 'prop-types';
import ActorBasedRoute from './route_protector/ActorBasedRoute';

const Dashboard = Loadable(lazy(()=>import('../courier/pages/dashboard')))


// ==============================|| MAIN ROUTING ||============================== //
const CourierRoutes = {
  path: '/courier',
  element:<CourierLayout/>,
  children: [
    {
      path: 'dashboard',
      element: <ActorBasedRoute element={Dashboard} requiredRoles={['courier']} />
    },

  ]
};

export default CourierRoutes;
