import { Link } from "react-router-dom";

import OrderSearch from "../../features/order/OrderSearch";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <nav className={styles.HeaderNav}>
            <ul className={styles.HeaderNavList}>
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
                    <Link to={"/order/new"}>Заказ</Link>
                </li>
            </ul>
            <OrderSearch />
        </nav>
    );
};

export default Header;
