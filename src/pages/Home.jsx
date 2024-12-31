import Banner from "../components/home/Banner";
import LuxuryRides from "../components/home/ExtraSections/LuxuryRides";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div>
                <WhyChooseUs />
            </div>
            <div>
                <LuxuryRides />
            </div>
        </div>
    );
};

export default Home;
