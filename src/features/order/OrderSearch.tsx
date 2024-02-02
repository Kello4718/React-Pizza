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
        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                value={order}
                onChange={handleOrder}
                placeholder="Введите номер заказа 😊"
            />
        </form>
    );
};

export default OrderSearch;
