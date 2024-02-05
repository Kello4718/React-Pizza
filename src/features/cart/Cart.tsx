import Button from "../../ui/Button";
import ButtonLink from "../../ui/ButtonLink";
import CartItem from "./CartItem";

export type TCart = {
    pizzaId: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
};

const fakeCart = [
    {
        pizzaId: 12,
        name: "Mediterranean",
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
    },
    {
        pizzaId: 6,
        name: "Vegetale",
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
    },
    {
        pizzaId: 11,
        name: "Spinach and Mushroom",
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
    },
];

function Cart() {
    const carts: TCart[] = fakeCart;
    return (
        <div className="px-4 py-3">
            <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>
            <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>
            <ul className="mt-3 divide-y divide-stone-200 border-b">
                {carts.map((cart) => (
                    <CartItem key={cart.pizzaId} cart={cart} />
                ))}
            </ul>
            <div className="mt-6 space-x-2">
                <Button type="primary" to="/order/new">
                    Order pizzas
                </Button>
                <Button type="secondary">Clear cart</Button>
            </div>
        </div>
    );
}

export default Cart;
