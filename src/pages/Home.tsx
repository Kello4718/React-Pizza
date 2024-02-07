import UserCreate from "../features/user/UserCreate";
import { useAppSelector } from "../components/app/hooks";
import Button from "../ui/Button";
import { getUser } from "../slices/userSlice";

const Home = () => {
    const {name} = useAppSelector(getUser);
    return (
        <div className="my-10 text-center sm:my-16">
            <h1 className="mb-8 text-xl font-semibold md:text-3xl">
                The best pizza.
                <br />
                <span className="text-yellow-400">
                    Straight out of the oven, straight to you.
                </span>
            </h1>
            {!name ? (
                <UserCreate />
            ) : (
                <Button type="primary" to="/menu">
                    Continue the order, {name}
                </Button>
            )}
        </div>
    );
};

export default Home;
