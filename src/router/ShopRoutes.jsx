import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

import ShopLayout from '../shop/Shop';
import { element } from 'prop-types';
// import ManageProduct from '../shop/pages/product/manage_product/ManageProduct';
// import ProductStatistics from '../shop/pages/product/product_statistics/ProductStatistics';
// import CourierRequest from '../shop/pages/order/courier_request/CourierRequest';
// import ManageOrders from '../shop/pages/order/manage_orders/ManageOrders';
// import OrderStatistics from '../shop/pages/order/order_statistics/OrderStatistics';
// import CourierChat from '../shop/pages/chat/courier_chat/CourierChat';
// import CustomerChat from '../shop/pages/chat/customer_chat/CustomerChat';
// import AdminChat from '../shop/pages/chat/admin_chat/AdminChat';
// import ManageConnections from '../shop/pages/manage_connections/ManageConnections';
// import PlacedOrders from '../shop/pages/order/recent_orders/RecentOrders';
// import EditProfile from '../shop/pages/profile/edit_profile/EditProfile';
// import Payment from '../shop/pages/profile/payment/Payment';
// import ActorBasedRoute from './route_protector/ActorBasedRoute';
// import ApprovedDelivery from '../shop/pages/approved_delivery/ApprovedDelivery';

const Dashboard = Loadable(lazy(()=>import('../shop/pages/dashboard')))
const ManageProduct = Loadable(lazy(()=>import('../shop/pages/product/manage_product/ManageProduct')))
const ProductStatistics = Loadable(lazy(()=>import('../shop/pages/product/product_statistics/ProductStatistics')))
const CourierRequest = Loadable(lazy(()=>import('../shop/pages/order/courier_request/CourierRequest')))
const ManageOrders = Loadable(lazy(()=>import('../shop/pages/order/manage_orders/ManageOrders')))
const OrderStatistics = Loadable(lazy(()=>import('../shop/pages/order/order_statistics/OrderStatistics')))
const CourierChat = Loadable(lazy(()=>import('../shop/pages/chat/courier_chat/CourierChat')))
const CustomerChat = Loadable(lazy(()=>import('../shop/pages/chat/customer_chat/CustomerChat')))
const AdminChat = Loadable(lazy(()=>import('../shop/pages/chat/admin_chat/AdminChat')))
const ManageConnections = Loadable(lazy(()=>import('../shop/pages/manage_connections/ManageConnections')))
const PlacedOrders = Loadable(lazy(()=>import('../shop/pages/order/recent_orders/RecentOrders')))
const EditProfile = Loadable(lazy(()=>import('../shop/pages/profile/edit_profile/EditProfile')))
const Payment = Loadable(lazy(()=>import('../shop/pages/profile/payment/Payment')))
const AddNewProduct = Loadable(lazy(()=>import('../shop/pages/product/add_new_products/AddNewProduct')))
const ActorBasedRoute = Loadable(lazy(()=>import('./route_protector/ActorBasedRoute')))
const UpdateProduct = Loadable(lazy(()=>import('../shop/pages/product/update_new_products/UpdateProduct')))


// ==============================|| MAIN ROUTING ||============================== //
const ShopRoutes = {
  path: '/shop',
  element:<ShopLayout/>,
  children: [
    {
      path: 'dashboard',
      element: <ActorBasedRoute element={Dashboard} requiredRoles={['shop']} />
    },
    {
      path:'manage_product',
      element: <ActorBasedRoute element={ManageProduct} requiredRoles={['shop']} />
    },
    {
      path:'add_new_product',
      element: <ActorBasedRoute element={AddNewProduct} requiredRoles={['shop']} />
    },
    {
      path:'product_statistics',
      element: <ActorBasedRoute element={ProductStatistics} requiredRoles={['shop']} />
    },
    {
      path:'recent_orders',
      element: <ActorBasedRoute element={PlacedOrders} requiredRoles={['shop']} />
    },
    {
      path:'courier_request',
      element: <ActorBasedRoute element={CourierRequest} requiredRoles={['shop']} />
    },
    {
      path:'manage_orders',
      element: <ActorBasedRoute element={ManageOrders} requiredRoles={['shop']} />
    },
    {
      path:'order_statistics',
      element: <ActorBasedRoute element={OrderStatistics} requiredRoles={['shop']} />
    },
    // {
    //   path:'approved_delivery',
    //   element: <ApprovedDelivery/>
    // }
    {
      path:'courier_chat',
      element: <ActorBasedRoute element={CourierChat} requiredRoles={['shop']} />
    },
    {
      path:'customer_chat',
      element: <ActorBasedRoute element={CustomerChat} requiredRoles={['shop']} />
    },
    {
      path:'admin_chat',
      element: <ActorBasedRoute element={AdminChat} requiredRoles={['shop']} />
    },
    {
      path:'manage_connections',
      element: <ActorBasedRoute element={ManageConnections} requiredRoles={['shop']} />
    },
    {
      path:'edit_profile',
      element: <ActorBasedRoute element={EditProfile} requiredRoles={['shop']} />
    },
    {
      path:'payment',
      element: <ActorBasedRoute element={Payment} requiredRoles={['shop']} />
    },
    {
      path:'update_product/:id',
      element: <ActorBasedRoute element={UpdateProduct} requiredRoles={['shop']} />
    },
   

  ]
};

export default ShopRoutes;
