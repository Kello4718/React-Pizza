import { FC } from "react";
import { Pizza } from "./Menu";
import { formatCurrency } from "../../utils/helpers";

type MenuItemProps = {
    pizza: Pizza;
};

const MenuItem: FC<MenuItemProps> = ({ pizza }) => {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    return (
        <li id={String(id)}>
            <img width="200" height="200" src={imageUrl} alt={name} />
            <div>
                <p>{name}</p>
                <p>{ingredients.join(", ")}</p>
                <p>{!soldOut ? formatCurrency(unitPrice) : "Sold out"}</p>
            </div>
        </li>
    );
};

export default MenuItem;
