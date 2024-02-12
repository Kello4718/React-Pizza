import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader />}
            <Header />
            <main className=" overflow-y-scroll">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;
