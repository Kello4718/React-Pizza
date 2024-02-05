import UserCreate from "../features/user/UserCreate";

const Home = () => {
    return (
        <div className="my-10 text-center sm:my-16">
            <h1 className="mb-8 text-xl font-semibold md:text-3xl">
                The best pizza.
                <br />
                <span className="text-yellow-400">
                    Straight out of the oven, straight to you.
                </span>
            </h1>
            <UserCreate />
        </div>
    );
};

export default Home;
