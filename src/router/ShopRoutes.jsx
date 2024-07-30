import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

import ShopLayout from '../shop/Shop';
import { element } from 'prop-types';
import ManageProduct from '../shop/pages/manage_product/ManageProduct';
import ActorBasedRoute from './route_protector/ActorBasedRoute';

const Dashboard = Loadable(lazy(()=>import('../shop/pages/dashboard')))
const AddNewProduct = Loadable(lazy(()=>import('../shop/pages/add_new_products/AddNewProduct')))


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
    }

  ]
};

export default ShopRoutes;
