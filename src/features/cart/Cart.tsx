import Button from "../../ui/Button";
import ButtonLink from "../../ui/ButtonLink";
import CartItem from "./CartItem";
import { TCartItem, clearCart, getCart } from "../../slices/cartSlice";
import { useAppSelector } from "../../components/app/hooks";
import { getUser } from "../../slices/userSlice";
import { useDispatch } from "react-redux";
import CartEmpty from "./CartEmpty";

const Cart = () => {
    const { name } = useAppSelector(getUser);
    const cart = useAppSelector(getCart);
    const dispatch = useDispatch();
    if (!cart.length) return <CartEmpty />;
    return (
        <div className="mx-auto w-full max-w-screen-xl px-4 py-3">
            <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>
            <h2 className="mt-7 text-xl font-semibold">Your cart, {name}</h2>
            <ul className="mt-3 divide-y divide-stone-200 border-b">
                {cart.map((item: TCartItem) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </ul>
            <div className="mt-6 space-x-2">
                <Button type="primary" to="/order/new">
                    Make an order
                </Button>
                <Button
                    type="secondary"
                    onClick={() => {
                        dispatch(clearCart());
                    }}
                >
                    Clear cart
                </Button>
            </div>
        </div>
    );
};

export default Cart;
