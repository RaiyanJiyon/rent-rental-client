import { useEffect, useState } from "react";
import Hero from "../components/availableCars/Hero";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import CarCard from "../components/common/CarCard";
import { Select, Option } from "@material-tailwind/react";
import SearchBar from "../components/cars/SearchBar";

const AvailableCars = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/cars')
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error(error.message);
            })
    }, []);

    console.log(cars)

    return (
        <div className="bg-[#191919]">
            <Helmet>
                <title>Available Cars | NeoDrive</title>
            </Helmet>
            <div>
                <Hero />
            </div>
            <div className="flex justify-between items-center space-x-4 w-11/12 mx-auto my-10">
                <select className="px-4 py-2 rounded-lg w-full md:w-auto bg-gray-950 text-white font-semibold border border-slate-200">
                    <option value="default">Sort By</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="dateNewest">Availability: Soonest</option>
                    <option value="dateOldest">Availability: Latest</option>
                </select>

                <SearchBar />
                <div className="flex-shrink-0">
                    <button className="btn btn-sm mr-2 bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white font-bold hover:bg-gradient-to-l transition-all duration-300 border-none">
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>
                        List View
                    </button>
                </div>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto">
                {
                    cars.map((car, _id) => (
                        <CarCard key={_id} car={car} />
                    ))
                }
            </div>

        </div>
    );
};

export default AvailableCars;