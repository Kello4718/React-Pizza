import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { Pizza } from "../../components/types/types";

const Menu = () => {
    const menu = useLoaderData() as Pizza[];
    return (
        <ul className="mx-auto w-full max-w-7xl divide-y divide-stone-200 px-2 ">
            {menu.map((item) => (
                <MenuItem pizza={item} key={item.id} />
            ))}
        </ul>
    );
};

export default Menu;
