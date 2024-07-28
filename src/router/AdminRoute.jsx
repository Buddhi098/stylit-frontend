import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

import AdminLayout from '../admin/Admin';
import { element } from 'prop-types';


const Dashboard = Loadable(lazy(()=>import('../admin/pages/dashboard/index')))
const ShopRequest = Loadable(lazy(()=>import('../admin/pages/Shop/new-shop-request/ShopRequest')))
const AllShops = Loadable(lazy(()=>import('../admin/pages/Shop/all-shops/AllShops')))
const ShopPaymentRequests = Loadable(lazy(()=>import('../admin/pages/Shop/payment-requests/PaymentRequests')))
const ShopPaymentHistory = Loadable(lazy(()=>import('../admin/pages/Shop/shop-payment-history/ShopPaymentHistory')))

// ==============================|| MAIN ROUTING ||============================== //
const AdminRoutes = {
  path: '/admin',
  element:<AdminLayout/>,
  children: [
    {
      path: 'dashboard',
      element: <Dashboard/>
    },
    {
      path: 'shopper',
      element: <Dashboard/>
    },
    {
      path: 'shop/new-account-request',
      element: <ShopRequest/>
    },
    { path: 'shop/all-shop-accounts', element: <AllShops/> },
    { path: 'shop/payment-requests', element: <ShopPaymentRequests/> },
    { path: 'shop/payment-history', element: <ShopPaymentHistory/> },

  ]
};

export default AdminRoutes;
