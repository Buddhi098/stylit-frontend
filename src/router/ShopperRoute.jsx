import { lazy, useContext, useEffect } from 'react';
import Loadable from '../components/Loadable';
import ActorBasedRoute from './route_protector/ActorBasedRoute';
import { preferencePanelStateInitializer } from '@mui/x-data-grid/internals';
import AuthContext from '../context/auth_context/AuthContext';


const Account = Loadable(lazy(() => import('../registered_shopper/pages/account/Account')));
const FavoritePage = Loadable(lazy(() => import('../registered_shopper/pages/favorite_page/FavoritePage')));
const CheckoutPage = Loadable(lazy(() => import('../registered_shopper/pages/checkout_page/CheckoutPage')));



const ShopperRoutes = {
  path: '/shopper',
  children: [
    {
      path: 'account/:page',
      element: <ActorBasedRoute element={Account} requiredRoles={['shopper']} />
    },
    {
      path: 'favorite',
      element: <ActorBasedRoute element={FavoritePage} requiredRoles={['shopper']} />
    },
    {
      path: 'checkout',
      element: <ActorBasedRoute element={CheckoutPage} requiredRoles={['shopper']} />
    },
  ]
};

export default ShopperRoutes;
