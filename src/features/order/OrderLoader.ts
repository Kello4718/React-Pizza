import { getOrder } from "../../services/apiRestaurant";
import type { Params } from "react-router-dom";

const orderLoader = async ({ params }: { params: Params<"id"> }) =>
    params.id && (await getOrder(params.id));

export default orderLoader;
