import { Helmet } from "react-helmet-async";
import Banner from "../components/home/Banner";
import ExperiencedDrivers from "../components/home/ExtraSections/ExperiencedDrivers";
import LuxuryRides from "../components/home/ExtraSections/LuxuryRides";
import WhyChooseUs from "../components/home/WhyChooseUs";
import { useEffect } from "react";
import RecentListings from "../components/home/RecentListings";
import Testimonials from "../components/home/Testimonials";

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
                <RecentListings />
            </div>
            <div>
                <LuxuryRides />
            </div>
            <div>
                <ExperiencedDrivers />
            </div>
            <div>
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;
