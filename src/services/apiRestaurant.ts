import { TOrder } from "../components/types/types";

const API_URL_MENU = "http://localhost:3004";
const API_URL_ORDER = "http://localhost:3005";

const getMenu = async () => {
    const res = await fetch(`${API_URL_MENU}/menu`);
    if (!res.ok) throw Error("Failed getting menu");
    return await res.json();
};

const getOrder = async (id: string) => {
    const res = await fetch(`${API_URL_ORDER}/order/${id}`);
    if (!res.ok) throw Error(`Couldn't find order #${id}`);
    return await res.json();
};

const createOrder = async (newOrder: TOrder) => {
    try {
        const res = await fetch(`${API_URL_ORDER}/order`, {
            method: "POST",
            body: JSON.stringify(newOrder),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) throw Error();
        return await res.json();
    } catch {
        throw Error("Failed creating your order");
    }
};

const updateOrder = async (id: string, updateObj: TOrder) => {
    try {
        const res = await fetch(`${API_URL_ORDER}/order/${id}`, {
            method: "PATCH",
            body: JSON.stringify(updateObj),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) throw Error();
    } catch (err) {
        throw Error("Failed updating your order");
    }
};

export { getMenu, getOrder, createOrder, updateOrder };
