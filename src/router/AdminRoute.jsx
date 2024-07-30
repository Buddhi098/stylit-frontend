import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

import AdminLayout from '../admin/Admin';
import { element } from 'prop-types';


const Dashboard = Loadable(lazy(()=>import('../admin/pages/dashboard/index')))
const ShopRequest = Loadable(lazy(()=>import('../admin/pages/Shop/new-shop-request/ShopRequest')))
const AllShops = Loadable(lazy(()=>import('../admin/pages/Shop/all-shops/AllShops')))
const ShopPaymentRequests = Loadable(lazy(()=>import('../admin/pages/Shop/payment-requests/PaymentRequests')))
const ShopPaymentHistory = Loadable(lazy(()=>import('../admin/pages/Shop/shop-payment-history-copy/ShopPaymentHistory')))
const CourierPaymentHistory = Loadable(lazy(()=>import('../admin/pages/Courier/courier-payment-history-copy/CourierPaymentHistory')))
const CourierPaymentRequests = Loadable(lazy(()=>import('../admin/pages/Courier/courier-payment-requests/CourierPaymentRequests')))
const AllCouriers = Loadable(lazy(()=>import('../admin/pages/Courier/all-couriers/AllCouriers')))
const CourierRequest = Loadable(lazy(()=>import('../admin/pages/Courier/new-courier-request/CourierRequest')))
const Chat = Loadable(lazy(()=>import('../admin/pages/Chat/shop_chat/ShopChat')))




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
    { path: 'shop/new-account-request',element: <ShopRequest/>},
    { path: 'shop/all-shop-accounts', element: <AllShops/> },
    { path: 'shop/payment-requests', element: <ShopPaymentRequests/> },
    { path: 'shop/payment-history', element: <ShopPaymentHistory/> },

    { path: 'courier/new-courier-request', element: <CourierRequest/> },
    { path: 'courier/all-courier-accounts', element: <AllCouriers/> },
    { path: 'courier/payment-requests', element: <CourierPaymentRequests/> },
    { path: 'courier/payment-history', element: <CourierPaymentHistory/> },

    { path: 'chat/shop_chat', element: <Chat/> },

  ]
};

export default AdminRoutes;
