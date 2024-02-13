import { getMenu } from "../../services/apiRestaurant";

export const loader = async () => await getMenu();
