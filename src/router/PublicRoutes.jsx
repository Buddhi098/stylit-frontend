import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import { element } from 'prop-types';
import { Lazy } from 'yup';
import MenPage from '../public/pages/men_page/MenPage';

const Home = Loadable(lazy(() => import('../public/pages/home_page/Home')));
const Women = Loadable(lazy(() => import('../public/pages/women_page/WomenPage')));
const NotFound = Loadable(lazy(() => import('../not_found_page/NotFound')));
const PartnerWithUs = Loadable(lazy(() => import('../public/pages/partner_with_us_page/PartnerWithUs')));
const CourierSignUpPage = Loadable(lazy(() => import('../public/pages/courier_sign_up_page/CourierSignUpPage')));
const ShopSignUpPage = Loadable(lazy(() => import('../public/pages/shop_sign_up_page/ShopSignUpPage')));
const CourierSignUpForm = Loadable(lazy(() => import('../public/pages/courier_sign_up_form/CourierSignUpForm')));
const ShopSignUpForm = Loadable(lazy(() => import('../public/pages/shop_sign_up_form/ShopSignUpForm')));
const CourierLoginPage = Loadable(lazy(() => import('../public/pages/courier_login_page/CourierLoginPage')));
const Men = Loadable(lazy(()=> import('../public/pages/men_page/MenPage')));
const ShopLoginPage = Loadable(lazy(()=> import('../public/pages/shop_login_page/ShopLoginPage')));
const SearchPage = Loadable(lazy(()=>import('../public/pages/search_box_page/SearchBoxPage')));
const FashionStore = Loadable(lazy(()=>import('../public/pages/fashion_store_page/FashionStorePage')));
const FashionStoreCategoryPage = Loadable(lazy(()=>import('../public/pages/fashion_store_page/fashion_store_category/FashionStoreCategory')));
const AllFashionStore = Loadable(lazy(()=>import('../public/pages/fashion_store_page/all_fashion_store/AllFashionStore')));
const ShopPage = Loadable(lazy(()=>import('../public/pages/fashion_store_page/shop_page/ShopPage')));
const DressPage = Loadable(lazy(() => import("../public/components/dress_components/DressPage/DressPage")));
const ProductPage = Loadable(lazy(()=>import('../public/pages/product_page/ProductPage')));
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
      path:'shop_signup_form',
      element:<ShopSignUpForm/>
    },
    {
      path:'courier_login_page',
      element:<CourierLoginPage/>
    },
    {
      path:'shop_login_page',
      element:<ShopLoginPage/>
    },
    {
      path:'men',
      element:<Men/>
    },
    {
      path:'search',
      element:<SearchPage/>
    },
    {
      path:'fashion_store',
      element:<FashionStore/>
    },
    {
      path:'fashion_store_category',
      element:<FashionStoreCategoryPage/>
    },
    {
      path:'all_fashion_store',
      element:<AllFashionStore/>
    },
    {
      path:'all_fashion_store/:title',
      element:<AllFashionStore/>
    },
    {
      path:'shop_page/:id',
      element:<ShopPage/>
    },
    {
      path:'dress/:id',
      element:<DressPage/>
    },
    {
      path:'product/:gender',
      element:<ProductPage/>
    },
    {
      path: '*',
      element: <NotFound />
    },
  ]
};

export default PublicRoutes;
