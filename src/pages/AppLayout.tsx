import React from "react";
import Header from "../components/Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Title</h1>
                <Outlet />
            </main>
            <CartOverview />
        </>
    );
};

export default AppLayout;
