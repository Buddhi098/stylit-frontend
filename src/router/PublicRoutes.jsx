import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

const Home = Loadable(lazy(() => import('../public/pages/home_page/Home')));
const Women = Loadable(lazy(() => import('../public/pages/women_page/Women')));
const NotFound = Loadable(lazy(() => import('../not_found_page/NotFound')));
const PartnerWithUs = Loadable(lazy(() => import('../public/pages/partner_with_us_page/PartnerWithUs')));
const CourierSignUpPage = Loadable(lazy(() => import('../public/pages/courier_sign_up_page/CourierSignUpPage')));
const ShopSignUpPage = Loadable(lazy(() => import('../public/pages/shop_sign_up_page/ShopSignUpPage')));
const CourierSignUpForm = Loadable(lazy(() => import('../public/pages/courier_sign_up_form/CourierSignUpForm')));
const AdminLogin = Loadable(lazy(()=>import('../admin/pages/Login/Login')))


// ==============================|| MAIN ROUTING ||============================== //

export const BaseRoute={
  path:'/',
  element:<Home/>
}

const PublicRoutes = {
  path: '/public',
  children: [
    {
      path: '',
      element: <Home />
    },
    {
      path: 'women',
      element: <Women />
    },
    {
      path: 'partner_with_us',
      element: <PartnerWithUs />
    },
    {
      path: 'courier_signup',
      element: <CourierSignUpPage />
    },
    {
      path: 'shop_signup',
      element: <ShopSignUpPage />
    },
    {
      path: 'courier_signup_form',
      element: <CourierSignUpForm />
    },
    {
      path: '*',
      element: <NotFound />
    },
    {
      path: 'admin_login',
      element: <AdminLogin/>
    }
  ]
};

export default PublicRoutes;
