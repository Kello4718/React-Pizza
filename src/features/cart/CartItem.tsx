import { FC } from "react";
// import { formatCurrency } from "../../utils/helpers";

type CartItemProps = {
    item: object;
};

const CartItem: FC<CartItemProps> = () => {
    // const { pizzaId, name, quantity, totalPrice } = item;
    return (
        <li>
            <p>
                {/* {quantity}&times; {name}  */}
                1111
            </p>
            <div>
                {/* <p>{formatCurrency(totalPrice)}</p> */}222
            </div>
        </li>
    );
};

export default CartItem;
