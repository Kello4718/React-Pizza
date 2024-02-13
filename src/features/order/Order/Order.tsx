import { useFetcher, useLoaderData } from "react-router-dom";
import {
    calcMinutesLeft,
    formatCurrency,
    formatDate,
} from "../../../utils/helpers";
import OrderItem from "../OrderItem";
import { useEffect } from "react";
import OrderUpdate from "../OrderUpdate/OrderUpdate";
import { Good, TOrder } from "../../../components/types/types";

const Order = () => {
    const order = useLoaderData() as TOrder;
    const fetcher = useFetcher();

    useEffect(() => {
        if (!fetcher.data && fetcher.state === "idle")
            return fetcher.load("/menu");
    }, [fetcher]);

    const {
        id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery,
        cart,
    } = order;

    const deliveryIn = estimatedDelivery && calcMinutesLeft(estimatedDelivery);
    return (
        <div className="space-y-8 px-4 py-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl font-semibold">Order #{id} status</h2>

                <div className="space-x-2">
                    {priority && (
                        <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
                            Приоритет: Высокий
                        </span>
                    )}
                    <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
                        {status} order
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
                <p className="font-medium">
                    {deliveryIn && deliveryIn >= 0
                        ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                        : "Order should have arrived"}
                </p>
                <p className="text-xs text-stone-500">
                    {estimatedDelivery &&
                        `Заказ оформили ${formatDate(estimatedDelivery)}`}
                </p>
            </div>

            <ul className="dive-stone-200 divide-y border-b border-t">
                {cart?.map((item) => (
                    <OrderItem
                        item={item}
                        key={item.id}
                        ingredients={
                            fetcher.data?.find((el: Good) => el.id === item.id)
                                .ingredients
                        }
                    />
                ))}
            </ul>

            <div className="space-y-2 bg-stone-200 px-6 py-5">
                <p className="text-sm font-medium text-stone-600">
                    {orderPrice && `Price pizza: ${formatCurrency(orderPrice)}`}
                </p>
                {priority && (
                    <p className="text-sm font-medium text-stone-600">
                        Price priority: {formatCurrency(priorityPrice)}
                    </p>
                )}
                <p className="font-bold">
                    {orderPrice &&
                        `To pay on delivery: ${formatCurrency(orderPrice + priorityPrice)}`}
                </p>
            </div>
            {!priority && <OrderUpdate />}
        </div>
    );
};

export default Order;
