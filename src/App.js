import React from 'react';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import router from './router';
import ScrollTop from './components/ScrollTop';
import { AuthProvider } from './context/auth_context/AuthContext'; // Ensure AuthProvider is imported

function App() {
  return (
    <React.StrictMode>
      <AuthProvider> {/* Ensure AuthProvider is used here */}
        <ScrollTop>
          <RouterProvider router={router} />
        </ScrollTop>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
