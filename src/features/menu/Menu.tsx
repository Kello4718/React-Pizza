import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

export type Pizza = {
    id: number;
    name: string;
    unitPrice: number;
    ingredients: string[];
    soldOut: boolean;
    imageUrl: string;
};

const Menu = () => {
    const menu = useLoaderData() as Pizza[];
    return (
        <ul>
            {menu.map((item: Pizza) => (
                <MenuItem pizza={item} key={item.id} />
            ))}
        </ul>
    );
};

export default Menu;
