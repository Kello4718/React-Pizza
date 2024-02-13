import { useFetcher } from "react-router-dom";
import Button from "../../../ui/Button";

const OrderUpdate = () => {
    const fetcher = useFetcher();
    return (
        <fetcher.Form method="PATCH" className="flex items-center gap-4">
            <p>Сделать приоритет заказа высоким?</p>
            <Button type="small">Да</Button>
        </fetcher.Form>
    );
};

export default OrderUpdate;
