import { lazy } from 'react';
import Loadable from '../components/Loadable';
import ActorBasedRoute from './route_protector/ActorBasedRoute';


const Account = Loadable(lazy(() => import('../registered_shopper/pages/account/Account')));
const FavoritePage = Loadable(lazy(() => import('../registered_shopper/pages/favorite_page/FavoritePage')));

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
  ]
};

export default ShopperRoutes;
