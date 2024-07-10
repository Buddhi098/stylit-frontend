import { RouterProvider } from 'react-router-dom';

// project import
import router from '../router/ShopRoutes';
import ThemeCustomization from './themes';

import ScrollTop from '../components/ScrollTop';
import DashboardLayout from './layout/Dashboard';

import DashboardDefault from './pages/dashboard';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function Courier() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <DashboardLayout/>
      </ScrollTop>
    </ThemeCustomization>
  );
}
