import { FC } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import {
    decreaseItemQuantity,
    deleteItem,
    increaseItemQuantity,
} from "../../slices/cartSlice";

type CartItemQuantityProps = {
    id: number;
    quantity: number;
};

const CartItemQuantity: FC<CartItemQuantityProps> = ({ id, quantity }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center gap-3">
            {quantity > 0 && (
                <Button
                    type="small"
                    onClick={() => {
                        if (quantity === 1) return dispatch(deleteItem(id));
                        dispatch(decreaseItemQuantity(id));
                    }}
                >
                    -
                </Button>
            )}
            <p className={`text-sm `}>{quantity}</p>
            <Button
                type="small"
                onClick={() => {
                    dispatch(increaseItemQuantity(id));
                }}
            >
                +
            </Button>
        </div>
    );
};

export default CartItemQuantity;
