import { createBrowserRouter } from 'react-router-dom';

// project import
import PublicRoutes, { BaseRoute } from './PublicRoutes';
import ShopRoutes from './ShopRoutes';
import CourierRoutes from './CourierRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([PublicRoutes , BaseRoute , ShopRoutes , CourierRoutes], { basename: process.env.VITE_APP_BASE_NAME });

export default router;
