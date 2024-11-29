import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

import CourierLayout from '../courier/Courier';
import { element } from 'prop-types';
// import DeliveryRequest from '../courier/pages/delivery_request/DeliveryRequest';
// import ApprovedDelivery from '../courier/pages/approved_delivery/ApprovedDelivery';
// import OngoingDelivery from '../courier/pages/ongoing_delivery/OngoingDelivery';
// import CompletedDelivery from '../courier/pages/completed_delivery/CompletedDelivery';
// import ManageConnections from '../courier/pages/manage_connections/ManageConnections';
// import CustomerChat from '../courier/pages/customer_chat/CustomerChat';
// import ShopChat from '../courier/pages/shop_chat/ShopChat';
// import AdminChat from '../courier/pages/admin_chat/AdminChat';
// import EditProfile from '../courier/pages/edit_profile/EditProfile';
// import Payment from '../courier/pages/payment/Payment';
// import ActorBasedRoute from './route_protector/ActorBasedRoute';

const Dashboard = Loadable(lazy(()=>import('../courier/pages/dashboard')))
const DeliveryRequest = Loadable(lazy(()=>import('../courier/pages/delivery_request/DeliveryRequest')))
const ApprovedDelivery = Loadable(lazy(()=>import('../courier/pages/approved_delivery/ApprovedDelivery')))
const OngoingDelivery = Loadable(lazy(()=>import('../courier/pages/ongoing_delivery/OngoingDelivery')))
const CompletedDelivery = Loadable(lazy(()=>import('../courier/pages/completed_delivery/CompletedDelivery')))
const ManageConnections = Loadable(lazy(()=>import('../courier/pages/manage_connections/ManageConnections')))
const CustomerChat = Loadable(lazy(()=>import('../courier/pages/customer_chat/CustomerChat')))
const ShopChat = Loadable(lazy(()=>import('../courier/pages/shop_chat/ShopChat')))
const AdminChat = Loadable(lazy(()=>import('../courier/pages/admin_chat/AdminChat')))
const EditProfile = Loadable(lazy(()=>import('../courier/pages/edit_profile/EditProfile')))
const Payment = Loadable(lazy(()=>import('../courier/pages/payment/Payment')))
const ActorBasedRoute = Loadable(lazy(()=>import('./route_protector/ActorBasedRoute')))


// ==============================|| MAIN ROUTING ||============================== //
const CourierRoutes = {
  path: '/courier',
  element:<CourierLayout/>,
  children: [
    {
      path: 'dashboard',
      element: <ActorBasedRoute element={Dashboard} requiredRoles={['courier']} />
    },
    {
      path:'delivery_request',
      element: <ActorBasedRoute element={DeliveryRequest} requiredRoles={['courier']} />
    },
    {
      path:'approved_delivery',
      element: <ActorBasedRoute element={ApprovedDelivery} requiredRoles={['courier']} />
    },
    {
      path:'ongoing_delivery',
      element: <ActorBasedRoute element={OngoingDelivery} requiredRoles={['courier']} />
    },
    {
      path:'completed_delivery',
      element: <ActorBasedRoute element={CompletedDelivery} requiredRoles={['courier']} />
    },
    {
      path:'manage_connection',
      element: <ActorBasedRoute element={ManageConnections} requiredRoles={['courier']} />
    },
    {
      path:'chat/customer_chat',
      element: <ActorBasedRoute element={CustomerChat} requiredRoles={['courier']} />
    },
    {
      path:'chat/shop_chat',
      element: <ActorBasedRoute element={ShopChat} requiredRoles={['courier']} />
    },
    {
      path:'chat/admin_chat',
      element: <ActorBasedRoute element={AdminChat} requiredRoles={['courier']} />
    },
    {
      path:'edit_profile',
      element: <ActorBasedRoute element={EditProfile} requiredRoles={['courier']} />
    },
    {
      path:'payment',
      element: <ActorBasedRoute element={Payment} requiredRoles={['courier']} />
    }


  ]
};

export default CourierRoutes;
