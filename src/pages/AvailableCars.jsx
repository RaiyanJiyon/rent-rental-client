import { useEffect, useState } from "react";
import Hero from "../components/availableCars/Hero";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import CarCard from "../components/common/CarCard";

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