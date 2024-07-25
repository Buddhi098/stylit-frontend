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
      element: <Dashboard/>
    },
    {
      path:'manage_product',
      element: <ManageProduct/>
    },
    {
      path:'add_new_product',
      element: <AddNewProduct/>
    },
    {
      path:'product_statistics',
      element: <ProductStatistics/>
    },
    {
      path:'courier_request',
      element: <CourierRequest/>
    },
    {
      path:'manage_orders',
      element: <ManageOrders/>
    },
    {
      path:'order_statistics',
      element: <OrderStatistics/>
    },
    // {
    //   path:'approved_delivery',
    //   element: <ApprovedDelivery/>
    // }


  ]
};

export default ShopRoutes;
