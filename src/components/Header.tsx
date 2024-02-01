import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <ul>
            <li>
                <Link to={"/"}>Главная</Link>
            </li>
            <li>
                <Link to={"/menu"}>Меню</Link>
            </li>
            <li>
                <Link to={"/cart"}>Корзина</Link>
            </li>
            <li>
                <Link to={"/order"}>Заказ</Link>
            </li>
        </ul>
    );
};

export default Header;
