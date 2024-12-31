const WhyChooseUs = () => {
    return (
        <div className="bg-black px-6 py-20">
            <h2 className="text-center text-2xl font-bold mb-4 text-[#FF3600]">Why Choose Us?</h2>
            <p className="text-center text-gray-300 mb-8 mt-5">
                Discover what makes our platform the best choice for your car rental needs. We provide <br /> exceptional service and features to ensure a smooth experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7 mb-10">
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

export default WhyChooseUs;