import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

import CourierLayout from '../courier/Courier';
import { element } from 'prop-types';
import DeliveryRequest from '../courier/pages/delivery_request/DeliveryRequest';
import ApprovedDelivery from '../courier/pages/approved_delivery/ApprovedDelivery';
import OngoingDelivery from '../courier/pages/ongoing_delivery/OngoingDelivery';
import CompletedDelivery from '../courier/pages/completed_delivery/CompletedDelivery';
import ManageConnections from '../courier/pages/manage_connections/ManageConnections';
import CustomerChat from '../courier/pages/customer_chat/CustomerChat';
import ShopChat from '../courier/pages/shop_chat/ShopChat';
import AdminChat from '../courier/pages/admin_chat/AdminChat';

const Dashboard = Loadable(lazy(()=>import('../courier/pages/dashboard')))


// ==============================|| MAIN ROUTING ||============================== //
const CourierRoutes = {
  path: '/courier',
  element:<CourierLayout/>,
  children: [
    {
      path: 'dashboard',
      element: <Dashboard/>
    },
    {
      path:'delivery_request',
      element: <DeliveryRequest/>
    },
    {
      path:'approved_delivery',
      element: <ApprovedDelivery/>
    },
    {
      path:'ongoing_delivery',
      element:<OngoingDelivery/>
    },
    {
      path:'completed_delivery',
      element:<CompletedDelivery/>
    },
    {
      path:'manage_connection',
      element:<ManageConnections/>
    },
    {
      path:'chat/customer_chat',
      element:<CustomerChat/>
    },
    {
      path:'chat/shop_chat',
      element:<ShopChat/>
    },
    {
      path:'chat/admin_chat',
      element:<AdminChat/>
    }


  ]
};

export default CourierRoutes;
