import { Params } from "../../../components/types/types";
import { updateOrder } from "../../../services/apiRestaurant";

export const action = async ({ params }: { params: Params }) => {
    const data = { priority: true, priorityPrice: 25 };
    return await updateOrder(params.id, data);
};
