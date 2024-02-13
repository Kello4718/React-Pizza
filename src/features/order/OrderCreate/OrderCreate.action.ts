import { redirect } from "react-router-dom";
import { createOrder } from "../../../services/apiRestaurant";
import { clearCart } from "../../../slices/cartSlice";
import store from "../../../store";
import { TError } from "../../../components/types/types";

const isValidPhone = (str: string) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str,
    );

export const action = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const order = {
        ...data,
        status: "cooking",
        cart: JSON.parse(String(data.cart)),
        priority: data.priority === "on",
        priorityPrice: data.priority === "on" ? 25 : 0,
        estimatedDelivery: Date(),
        orderPrice: 147,
    };
    const error: TError = {};
    if (!isValidPhone(String(data.phone))) {
        error.phone = "Вы ввели некорректный телефон";
    }
    if (Object.keys(error).length > 0) {
        return error;
    }
    const newOrder = await createOrder(order);
    store.dispatch(clearCart());
    return redirect(`/order/${newOrder.id}`);
};
