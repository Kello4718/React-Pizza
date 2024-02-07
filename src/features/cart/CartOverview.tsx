import { useAppSelector } from "../../components/app/hooks";
import { getCart } from "../../slices/cartSlice";
import ButtonLink from "../../ui/ButtonLink";
import { formatCurrency } from "../../utils/helpers";

const CartOverview = () => {
    const cart = useAppSelector(getCart);
    const pizzasQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const pizzasTotalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);
    if (!pizzasQuantity) return null
    return (
        <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
            <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
                <span>{pizzasQuantity} pizzas</span>
                <span>{formatCurrency(pizzasTotalPrice)}</span>
            </p>
            <ButtonLink to="/cart">Open cart &rarr;</ButtonLink>
        </div>
    );
};

export default CartOverview;
