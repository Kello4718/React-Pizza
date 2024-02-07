import { useAppSelector } from "../../components/app/hooks";
import { getUser } from "../../slices/userSlice";

const User = () => {
    const {name} = useAppSelector(getUser);
    if (!name) return null;
    return <div className="hidden text-sm font-semibold md:block">{name}</div>;
};

export default User;
