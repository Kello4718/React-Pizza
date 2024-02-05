import ButtonLink from "../../ui/ButtonLink";

function EmptyCart() {
    return (
        <div>
            <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>
            <p>Your cart is still empty. Start adding some pizzas :)</p>
        </div>
    );
}

export default EmptyCart;
