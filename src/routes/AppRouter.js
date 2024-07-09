import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../public_shopper/pages/home_page/Home';
import Women from '../public_shopper/pages/women_page/Women';
import NotFound from '../not_found_page/NotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* All Public Routes */}
        <Route path="/public">
          <Route index element={<Home />} />
          <Route path="women" element={<Women />} />
        </Route>

        {/* All Registered Shopper Routes */}
        <Route path="/shopper">
        </Route>

        {/* All Registered Shop Routes */}
        <Route path="/shop">
        </Route>

        {/* All Registered Courier Routes */}
        <Route path="/courier">
        </Route>

        <Route path="*" element={<NotFound />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
