import { Helmet } from "react-helmet-async";
import Banner from "../components/home/Banner";
import ExperiencedDrivers from "../components/home/ExtraSections/ExperiencedDrivers";
import LuxuryRides from "../components/home/ExtraSections/LuxuryRides";
import { useEffect } from "react";
import RecentListings from "../components/home/RecentListings";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import RentalService from "../components/home/RentalService";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Home | RentRental</title>
            </Helmet>
            <div>
                <Banner />
            </div>
            <div>
                <RentalService />
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
            <div>
                <FAQ />
            </div>
        </div>
    );
};

export default Home;
