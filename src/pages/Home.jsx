import { Helmet } from "react-helmet";
import Banner from "../components/home/Banner";
import ExperiencedDrivers from "../components/home/ExtraSections/ExperiencedDrivers";
import LuxuryRides from "../components/home/ExtraSections/LuxuryRides";
import WhyChooseUs from "../components/home/WhyChooseUs";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Home | NeoDrive</title>
            </Helmet>
            <div>
                <Banner />
            </div>
            <div>
                <WhyChooseUs />
            </div>
            <div>
                <LuxuryRides />
            </div>
            <div>
                <ExperiencedDrivers />
            </div>
        </div>
    );
};

export default Home;
