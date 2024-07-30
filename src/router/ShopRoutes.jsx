import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

import ShopLayout from '../shop/Shop';
import { element } from 'prop-types';
import ManageProduct from '../shop/pages/product/manage_product/ManageProduct';
import ProductStatistics from '../shop/pages/product/product_statistics/ProductStatistics';
import CourierRequest from '../shop/pages/order/courier_request/CourierRequest';
import ManageOrders from '../shop/pages/order/manage_orders/ManageOrders';
import OrderStatistics from '../shop/pages/order/order_statistics/OrderStatistics';
import CourierChat from '../shop/pages/chat/courier_chat/CourierChat';
import CustomerChat from '../shop/pages/chat/customer_chat/CustomerChat';
import AdminChat from '../shop/pages/chat/admin_chat/AdminChat';
import ManageConnections from '../shop/pages/manage_connections/ManageConnections';
import PaymentMethods from '../shop/pages/payment/payment_method/PaymentMethod';
import WithdrawCash from '../shop/pages/payment/withdraw_cash/WithdrawCash';
import ActorBasedRoute from './route_protector/ActorBasedRoute';
// import ApprovedDelivery from '../shop/pages/approved_delivery/ApprovedDelivery';

const Dashboard = Loadable(lazy(()=>import('../shop/pages/dashboard')))
const AddNewProduct = Loadable(lazy(()=>import('../shop/pages/product/add_new_products/AddNewProduct')))


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
      path:'payment_method',
      element: <ActorBasedRoute element={PaymentMethods} requiredRoles={['shop']} />
    },
    {
      path:'withdraw_cash',
      element: <ActorBasedRoute element={WithdrawCash} requiredRoles={['shop']} />
    },

  ]
};

export default ShopRoutes;
