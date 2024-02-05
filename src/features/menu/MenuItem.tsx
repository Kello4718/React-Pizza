import { FC } from "react";
import { Pizza } from "./Menu";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

type MenuItemProps = {
    pizza: Pizza;
};

const MenuItem: FC<MenuItemProps> = ({ pizza }) => {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    return (
        <li id={String(id)} className="flex gap-x-4 py-2">
            <img
                width="200"
                height="200"
                src={imageUrl}
                alt={name}
                className={`h-auto w-40 ${soldOut && "opacity-70 grayscale"}`}
            />
            <div className="flex grow flex-col pt-0.5">
                <p className="font-medium">{name}</p>
                <p className="text-sm capitalize italic text-stone-500">
                    {ingredients.join(", ")}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    <p
                        className={`${soldOut && "font-medium uppercase text-stone-500"} text-sm `}
                    >
                        {!soldOut ? formatCurrency(unitPrice) : "Sold out"}
                    </p>
                    <Button type="small">Add to cart</Button>
                </div>
            </div>
        </li>
    );
};

export default MenuItem;
