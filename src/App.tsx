import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./pages/AppLayout";
import menuLoader from "./features/menu/MenuLoader";
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
                loader: menuLoader,
                errorElement: <Error />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/order/new",
                element: <CreateOrder />,
            },
            {
                path: "/order/:id",
                element: <Order />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
