import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import React from "react";
import router from "./router";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div>
      {/* <React.StrictMode>
      <AppRouter/>
      </React.StrictMode> */}
      <React.StrictMode>
        <ScrollTop>
          <RouterProvider router={router} />
        </ScrollTop>
      </React.StrictMode>
    </div>
  );
}

export default App;
