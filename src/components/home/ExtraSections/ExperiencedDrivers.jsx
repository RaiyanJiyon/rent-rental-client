const ExperiencedDrivers = () => {
    return (
        <div className="bg-[#191919] text-white py-20 px-4 text-center">
            <p className="text-[#FF3600] font-medium mb-2">★ Our Experienced Drivers</p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-16">
                Ensuring your safety and comfort <br /> on every journey
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer w-11/12 mx-auto">
                <div className="rounded-lg p-4 shadow-md aos-init aos-animate" data-aos="fade-right">
                    <img src="https://neodrive-be91c.web.app/assets/team1-DiVnwyeY.jpg" alt="John Smith" className="rounded-lg w-full mb-4 hover:scale-105 transition-transform" />
                    <h3 className="text-lg font-semibold">John Smith</h3>
                    <p className="text-sm text-gray-400">Senior Chauffeur</p>
                </div>
                <div className="rounded-lg p-4 shadow-md aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <img src="https://neodrive-be91c.web.app/assets/team2-BTMvrJwq.jpg" alt="Taylor Smith" className="rounded-lg w-full mb-4 hover:scale-105 transition-transform" />
                    <h3 className="text-lg font-semibold">Taylor Smith</h3>
                    <p className="text-sm text-gray-400">City Tour Guide</p>
                </div>
                <div className="rounded-lg p-4 shadow-md aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <img src="https://neodrive-be91c.web.app/assets/team3-CrbMcU2_.jpg" alt="Jordan Drown" className="rounded-lg w-full mb-4 hover:scale-105 transition-transform" />
                    <h3 className="text-lg font-semibold">Jordan Drown</h3>
                    <p className="text-sm text-gray-400">Distance Driver</p>
                </div>
                <div className="rounded-lg p-4 shadow-md aos-init aos-animate" data-aos="fade-left" data-aos-delay="300">
                    <img src="https://neodrive-be91c.web.app/assets/team4-BHCgJLUC.jpg" alt="Davis Casey" className="rounded-lg w-full mb-4 hover:scale-105 transition-transform" />
                    <h3 className="text-lg font-semibold">Davis Casey</h3>
                    <p className="text-sm text-gray-400">Travel Specialist</p>
                </div>
                <div className="rounded-lg p-4 shadow-md aos-init" data-aos="fade-right" data-aos-delay="300">
                    <img src="https://neodrive-be91c.web.app/assets/team5-B39BSTP3.jpg" alt="Morgan Lee" className="rounded-lg w-full mb-4 hover:scale-105 transition-transform" />
                    <h3 className="text-lg font-semibold">Morgan Lee</h3>
                    <p className="text-sm text-gray-400">Travel Consultant</p>
                </div>
                <div className="rounded-lg p-4 shadow-md aos-init" data-aos="fade-up">
                    <img src="https://neodrive-be91c.web.app/assets/team6-Dk81zHHp.jpg" alt="Carlos Mendes" className="rounded-lg w-full mb-4 hover:scale-105 transition-transform" />
                    <h3 className="text-lg font-semibold">Carlos Mendes</h3>
                    <p className="text-sm text-gray-400">Airport Transfer</p>
                </div>
                <div className="rounded-lg p-4 shadow-md aos-init" data-aos="fade-up" data-aos-delay="300">
                    <img src="https://neodrive-be91c.web.app/assets/team7-C8ttpmMl.jpg" alt="Riley Walker" className="rounded-lg w-full mb-4 hover:scale-105 transition-transform" />
                    <h3 className="text-lg font-semibold">Riley Walker</h3>
                    <p className="text-sm text-gray-400">Executive Chauffeur</p>
                </div>
                <div className="rounded-lg p-4 shadow-md aos-init" data-aos="fade-left" data-aos-delay="300">
                    <img src="https://neodrive-be91c.web.app/assets/team8-R2SJWnFU.jpg" alt="Avery Hall" className="rounded-lg w-full mb-4 hover:scale-105 transition-transform" />
                    <h3 className="text-lg font-semibold">Avery Hall</h3>
                    <p className="text-sm text-gray-400">Shuttle Driver</p>
                </div>
            </div>
        </div>
    );
};

export default ExperiencedDrivers;