import { FC } from "react";
import { TCart } from "./Cart";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

type CartItemProps = {
    cart: TCart;
};

const CartItem: FC<CartItemProps> = ({ cart }) => {
    const { pizzaId, name, quantity, totalPrice } = cart;
    return (
        <li
            className="py-3 sm:flex sm:items-center sm:justify-between"
            id={String(pizzaId)}
        >
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                <Button type="small">Delete</Button>
            </div>
        </li>
    );
};

export default CartItem;
