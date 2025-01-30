import SectionTitle from "../common/SectionTitle";

const RentalService = () => {
    return (
        <div>
            <SectionTitle title="Our Services" description="Explore our wide range of rental
                    services" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7 w-4/5 mx-auto mb-20">
                <div className="bg-[#1E2325] p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer aos-init aos-animate" data-aos="fade-up">
                    <div className="text-4xl mb-4">🚗</div>
                    <h3 className="text-lg font-semibold mb-2 text-base-300">Wide Variety of Cars</h3>
                    <p className="text-sm text-gray-400">From budget-friendly options to luxury vehicles, we have something for everyone.</p>
                </div>
                <div className="bg-[#1E2325] p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer aos-init aos-animate" data-aos="fade-up">
                    <div className="text-4xl mb-4">💰</div>
                    <h3 className="text-lg font-semibold mb-2 text-base-300">Affordable Prices</h3>
                    <p className="text-sm text-gray-400">Competitive daily rates you can count on, without hidden fees.</p>
                </div>
                <div className="bg-[#1E2325] p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer aos-init aos-animate" data-aos="fade-up">
                    <div className="text-4xl mb-4">🖱️</div>
                    <h3 className="text-lg font-semibold mb-2 text-base-300">Easy Booking Process</h3>
                    <p className="text-sm text-gray-400">Seamlessly book your ride in just a few clicks with our user-friendly interface.</p>
                </div>
                <div className="bg-[#1E2325] p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer aos-init aos-animate" data-aos="fade-up">
                    <div className="text-4xl mb-4">📞</div>
                    <h3 className="text-lg font-semibold mb-2 text-base-300">Customer Support</h3>
                    <p className="text-sm text-gray-400">Enjoy 24/7 assistance for all your queries, ensuring a hassle-free experience.</p>
                </div>
            </div>
        </div>
    );
};

export default RentalService;