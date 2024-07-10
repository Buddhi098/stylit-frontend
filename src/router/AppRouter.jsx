// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from '../public_shopper/pages/home_page/Home';
// import Women from '../public_shopper/pages/women_page/Women';
// import NotFound from '../not_found_page/NotFound';
// import PartnerWithUs from '../public_shopper/pages/partner_with_us_page/PartnerWithUs';
// import CourierSignUpPage from '../public_shopper/pages/courier_sign_up_page/CourierSignUpPage';
// import ShopSignUpPage from '../public_shopper/pages/shop_sign_up_page/ShopSignUpPage';

// // import Dashboard from '../shop/src/layout/Dashboard';

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         {/* All Public Routes */}
//         <Route path="/public">
//           <Route index element={<Home />} />
//           <Route path="women" element={<Women />} />
//           <Route path="partner_with_us" element={<PartnerWithUs />} />
//           <Route path="courier_signup" element={<CourierSignUpPage />}/>
//           <Route path="shop_signup" element={<ShopSignUpPage/>}/>
//         </Route>

//         {/* All Registered Shopper Routes */}
//         <Route path="/shopper">
//         </Route>

//         {/* All Registered Shop Routes */}
//         <Route path="/shop">
//         <Route path="dashboard" element={<Dashboard/>}></Route>
//         </Route>

//         {/* All Registered Courier Routes */}
//         <Route path="/courier">
//         </Route>

//         <Route path="*" element={<NotFound />} />
      
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;
