import { Link } from "react-router-dom";

import OrderSearch from "../features/order/OrderSearch";
import User from "../features/user/User";

const Header = () => {
    return (
        <header className="border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
            <nav className="mb-5 flex justify-between">
                <ul className="flex justify-center gap-x-2.5 text-2xl tracking-widest font-pizza">
                    <li className="">
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
                <User />
            </nav>
        </header>
    );
};

export default Header;
