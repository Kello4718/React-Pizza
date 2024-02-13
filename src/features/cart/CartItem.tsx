import { FC } from "react";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { deleteItem } from "../../slices/cartSlice";
import { useAppDispatch } from "../../components/app/hooks";
import CartItemQuantity from "./CartItemQuantity";
import { Good } from "../../components/types/types";

type CartItemProps = {
    item: Good;
};

const CartItem: FC<CartItemProps> = ({ item }) => {
    const { id, name, quantity, totalPrice } = item;
    const dispatch = useAppDispatch();
    return (
        <li
            className="py-3 sm:flex sm:items-center sm:justify-between"
            id={String(id)}
        >
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                <CartItemQuantity id={id} quantity={quantity} />
                <Button type="small" onClick={() => dispatch(deleteItem(id))}>
                    Delete
                </Button>
            </div>
        </li>
    );
};

export default CartItem;
