import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";

import AdminLayout from "../admin/Admin";
import { element } from "prop-types";
import ActorBasedRoute from "./route_protector/ActorBasedRoute";

const Dashboard = Loadable(
  lazy(() => import("../admin/pages/dashboard/index"))
);
const ShopRequest = Loadable(
  lazy(() => import("../admin/pages/Shop/new-shop-request/ShopRequest"))
);
const AllShops = Loadable(
  lazy(() => import("../admin/pages/Shop/all-shops/AllShops"))
);
const ShopPaymentRequests = Loadable(
  lazy(() => import("../admin/pages/Shop/payment-requests/PaymentRequests"))
);
const ShopPaymentHistory = Loadable(
  lazy(
    () =>
      import("../admin/pages/Shop/shop-payment-history-copy/ShopPaymentHistory")
  )
);
const CourierPaymentHistory = Loadable(
  lazy(
    () =>
      import(
        "../admin/pages/Courier/courier-payment-history-copy/CourierPaymentHistory"
      )
  )
);
const CourierPaymentRequests = Loadable(
  lazy(
    () =>
      import(
        "../admin/pages/Courier/courier-payment-requests/CourierPaymentRequests"
      )
  )
);
const AllCouriers = Loadable(
  lazy(() => import("../admin/pages/Courier/all-couriers/AllCouriers"))
);
const CourierRequest = Loadable(
  lazy(
    () => import("../admin/pages/Courier/new-courier-request/CourierRequest")
  )
);
const ShopChat = Loadable(
  lazy(() => import("../admin/pages/Chat/shop_chat/ShopChat"))
);
const CourierChat = Loadable(
  lazy(() => import("../admin/pages/Chat/courier_chat/CourierChat"))
);

const AllShopper = Loadable(
  lazy(() => import("../admin/pages/shopper/AllShoppers"))
);

// ==============================|| MAIN ROUTING ||============================== //
const AdminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      path: "dashboard",
      element: <ActorBasedRoute element={Dashboard} requiredRoles={['admin']} />
    },
    {
      path: "shopper",
      element: <ActorBasedRoute element={AllShopper} requiredRoles={['admin']} />
    },
    { path: "shop/new-account-request",
      element: <ActorBasedRoute element={ShopRequest} requiredRoles={['admin']} />},

    { path: "shop/all-shop-accounts",
      element: <ActorBasedRoute element={AllShops} requiredRoles={['admin']} />},

    { path: "shop/payment-requests",
      element: <ActorBasedRoute element={ShopPaymentRequests} requiredRoles={['admin']} /> },

    { path: "shop/payment-history",element: <ActorBasedRoute element={ShopPaymentHistory} requiredRoles={['admin']} /> },

    { path: "courier/new-courier-request",element: <ActorBasedRoute element={CourierRequest} requiredRoles={['admin']} /> },

    { path: "courier/all-courier-accounts",element: <ActorBasedRoute element={AllCouriers} requiredRoles={['admin']} /> },

    { path: "courier/payment-requests",element: <ActorBasedRoute element={CourierPaymentRequests} requiredRoles={['admin']} /> },

    { path: "courier/payment-history",element: <ActorBasedRoute element={CourierPaymentHistory} requiredRoles={['admin']} /> },

    { path: "chat/shop_chat", element: <ActorBasedRoute element={ShopChat} requiredRoles={['admin']} /> },
    { path: "chat/courier_chat", element: <ActorBasedRoute element={CourierChat} requiredRoles={['admin']} />},
  ],
};

export default AdminRoutes;
