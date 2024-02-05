import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderSearch = () => {
    const [order, setOrder] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (!order) return;
        navigate(`/order/${order}`);
        setOrder("");
    };

    const handleOrder = (evt: ChangeEvent<HTMLInputElement>) =>
        setOrder(evt.target.value);

    return (
        <form action="" className="flex items-center" onSubmit={handleSubmit}>
            <input
                type="text"
                value={order}
                onChange={handleOrder}
                placeholder="Введите номер заказа 😊"
                className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
            />
        </form>
    );
};

export default OrderSearch;
