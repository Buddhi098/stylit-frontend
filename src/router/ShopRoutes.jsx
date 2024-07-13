import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

import ShopLayout from '../shop/Shop';
import { element } from 'prop-types';
import ManageProduct from '../shop/pages/manage_product/ManageProduct';

const Dashboard = Loadable(lazy(()=>import('../shop/pages/dashboard')))
const AddNewProduct = Loadable(lazy(()=>import('../shop/pages/add_new_products/AddNewProduct')))


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
    }

  ]
};

export default ShopRoutes;
