import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import OrderCreate from "./features/order/OrderCreate/OrderCreate";
import Order from "./features/order/Order/Order";
import AppLayout from "./pages/AppLayout";
import Error from "./pages/Error";

import { action as orderCreateAction } from "./features/order/OrderCreate/OrderCreate.action";
import { action as orderUpdateAction } from "./features/order/OrderUpdate/OrderUpdate.action";
import { loader as menuLoader } from "./features/menu/Menu.loader";
import { loader as orderLoader } from "./features/order/Order/Order.loader";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
                loader: menuLoader,
                errorElement: <Error />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/order/new",
                element: <OrderCreate />,
                action: orderCreateAction,
            },
            {
                path: "/order/:id",
                element: <Order />,
                loader: orderLoader,
                action: orderUpdateAction,
                // TODO
                errorElement: <Error />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
