import { useEffect } from "react";
import Hero from "../components/availableCars/Hero";
import { Helmet } from "react-helmet-async";

const AvailableCars = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Available Cars | NeoDrive</title>
            </Helmet>
            <div>
                <Hero />
            </div>
        </div>
    );
};

export default AvailableCars;