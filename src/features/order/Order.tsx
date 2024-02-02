// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import {
    calcMinutesLeft,
    formatCurrency,
    formatDate,
} from "../../utils/helpers";
import type { Params } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

type Cart = {
    addIngredients: string[];
    name: string;
    pizzaId: number;
    quantity: number;
    removeIngredients: string[];
    totalPrice: number;
    unitPrice: number;
};

type TOrder = {
    id: string;
    status: string;
    priority: boolean;
    priorityPrice: number;
    orderPrice: number;
    estimatedDelivery: string;
    cart: Cart[];
};

const loader = async ({ params }: { params: Params<"id"> }) =>
    params.id && (await getOrder(params.id));

const Order = () => {
    const order = useLoaderData() as TOrder;
    const {
        // id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery,
        // cart,
    } = order;

    const deliveryIn = calcMinutesLeft(estimatedDelivery);

    return (
        <div>
            <div>
                <h2>Status</h2>

                <div>
                    {priority && <span>Priority</span>}
                    <span>{status} order</span>
                </div>
            </div>

            <div>
                <p>
                    {deliveryIn >= 0
                        ? `Only ${calcMinutesLeft(
                              estimatedDelivery
                          )} minutes left 😃`
                        : "Order should have arrived"}
                </p>
                <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
            </div>

            <div>
                <p>Price pizza: {formatCurrency(orderPrice)}</p>
                {priority && (
                    <p>Price priority: {formatCurrency(priorityPrice)}</p>
                )}
                <p>
                    To pay on delivery:{" "}
                    {formatCurrency(orderPrice + priorityPrice)}
                </p>
            </div>
        </div>
    );
};

Order.loader = loader;
export default Order;
