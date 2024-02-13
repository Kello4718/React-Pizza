import { Params } from "react-router-dom";
import { getOrder } from "../../../services/apiRestaurant";

export const loader = async ({ params }: { params: Params }) =>
    params.id && (await getOrder(params.id));
