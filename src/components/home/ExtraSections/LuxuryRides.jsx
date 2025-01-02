import { Link } from "react-router-dom";

const LuxuryRides = () => {
    return (
        <div className="bg-black px-6 py-20">
            <h2 className="text-3xl font-bold text-[#FF3600] text-center mb-5">Luxury Rides at Affordable Prices!</h2>
            <p className="text-center font-semibold text-gray-300 mb-12">
                Why wait? Take advantage of our incredible offers today!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
                <div className="bg-[#1E2325] cursor-pointer rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 aos-init aos-animate" data-aos="fade-right">
                    <h3 className="text-2xl font-bold mb-4 text-gray-300">
                        <span className="text-[#FF3600]">15%</span> Off Weekend Rentals!
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Book now and save 15% on all rentals this weekend. Perfect for your getaway!
                    </p>
                    <Link to={'/available-cars'} data-discover="true">
                        <button className="py-2 px-4 rounded font-semibold bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white hover:bg-gradient-to-l duration-300 border-none hover:scale-105 transition-transform">
                            Book Now
                        </button>
                    </Link>
                </div>
                <div className="bg-[#1E2325] cursor-pointer rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 aos-init aos-animate" data-aos="fade-up">
                    <h3 className="text-2xl font-bold mb-4 text-gray-300">
                        Luxury Cars at <span className="text-[#FF3600]">$99/day</span>!
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Experience luxury at an affordable price. Offer valid this holiday season!
                    </p>
                    <Link to={'/available-cars'} data-discover="true">
                        <button className="py-2 px-4 rounded font-semibold bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white hover:bg-gradient-to-l duration-300 border-none hover:scale-105 transition-transform">
                            Book Now
                        </button>
                    </Link>
                </div>
                <div className="bg-[#1E2325] rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 aos-init aos-animate" data-aos="fade-left">
                    <h3 className="text-2xl font-bold mb-4 text-gray-300">
                        <span className="text-[#FF3600]">Free Upgrade</span> on Rentals!
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Book a standard car and get upgraded to a luxury car for free!
                    </p>
                    <Link to={'/available-cars'} data-discover="true">
                        <button className="py-2 px-4 rounded font-semibold bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white hover:bg-gradient-to-l duration-300 border-none hover:scale-105 transition-transform">
                            Book Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default LuxuryRides;