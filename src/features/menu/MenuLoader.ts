import { getMenu } from "../../services/apiRestaurant";

const menuLoader = async () => await getMenu();

export default menuLoader;
