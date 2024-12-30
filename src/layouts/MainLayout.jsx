import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#191919]">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;