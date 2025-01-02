import axios from "axios";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentListings = () => {
    const [recentCars, setRecentCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/recent-cars')
            .then(response => {
                setRecentCars(response.data);
            })
            .catch(error => {
                console.error(error.message);
            })
    }, []);

    return (
        <div className="bg-[#191919] pb-16">
            <div className="w-11/12 md:w-1/2 mx-auto pt-20">
                <h2 className="text-3xl font-bold text-[#FF3600] text-center mb-5">Discover the Latest Arrivals</h2>
                <p className="text-center font-semibold text-gray-300 mb-12">
                    Explore our newly added vehicles, handpicked for your comfort and style.
                    Book your favorite ride today!
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto">
                {
                    recentCars.map((recentCar, _id) => (
                        <div key={_id} className="relative flex flex-col my-6 bg-black text-white shadow-sm border border-slate-200 rounded-lg">
                            <div className="relative h-44 m-2.5 overflow-hidden text-white rounded-md">
                                <img
                                    className='w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110'
                                    src={`${recentCar.imageUrl}`}
                                    alt="card-image"
                                />
                                <div className="absolute top-0 left-0 bg-[#FF3600] text-white font-bold text-sm p-2 rounded-br-lg">
                                    ${recentCar.dailyRentalPrice}/Day
                                </div>
                            </div>
                            <div className="p-4">
                                <h6 className="mb-2 text-red-600 text-xl font-semibold">
                                    {recentCar.carModel}
                                </h6>
                                <p className="leading-normal font-light text-sm">
                                    <span className='font-bold'>Date Posted: </span>
                                    {formatDistanceToNow(parseISO(recentCar.availabilityDate))} ago
                                </p>
                                <p className="leading-normal font-light text-sm">
                                    <span className='font-bold'>Booking Count: </span>
                                    {recentCar.bookingCount}
                                </p>
                                <p className="leading-normal font-light text-sm">
                                    <span className='font-bold'>Location: </span>
                                    {recentCar.location}
                                </p>
                            </div>
                            <Link to={`/cars/${recentCar._id}`} className="px-4 pb-4 w-full">
                                <button
                                    className="w-full px-6 py-1 font-semibold bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white hover:bg-gradient-to-l  duration-300 border-none rounded-lg hover:scale-105 transition-transform text-sm"
                                >
                                    Rent Now
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RecentListings;