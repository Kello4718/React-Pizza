import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";

export type Pizza = {
    id: number;
    name: string;
    unitPrice: number;
    ingredients: string[];
    soldOut: boolean;
    imageUrl: string;
};

const loader = async () => await getMenu();

const Menu = () => {
    const menu = useLoaderData() as Pizza[];
    return (
        <ul className="divide-y divide-stone-200 px-2">
            {menu.map((item: Pizza) => (
                <MenuItem pizza={item} key={item.id} />
            ))}
        </ul>
    );
};

Menu.loader = loader;

export default Menu;
