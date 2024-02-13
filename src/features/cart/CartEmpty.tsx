import ButtonLink from "../../ui/ButtonLink";

const CartEmpty = () => {
    return (
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6 text-center">
            <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>
            <p className="mt-7 text-xl font-semibold">
                Your cart is still empty. Start adding some pizzas :)
            </p>
        </div>
    );
};

export default CartEmpty;
