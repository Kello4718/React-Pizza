import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import OrderCreate from "./features/order/OrderCreate";
import Order from "./features/order/Order";
import AppLayout from "./pages/AppLayout";
import Error from "./pages/Error";

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
                loader: Menu.loader,
                errorElement: <Error />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/order/new",
                element: <OrderCreate />,
                action: OrderCreate.action,
            },
            {
                path: "/order/:id",
                element: <Order />,
                loader: Order.loader,
                errorElement: <Error />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
