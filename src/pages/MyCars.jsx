import React, { useContext, useEffect, useState, useRef } from "react";
import { authContext } from "../contexts/AuthProvider";
import axios from "axios";
import Modal from "../components/common/Modal";
import Swal from "sweetalert2";

const MyCars = () => {
    const { user } = useContext(authContext);
    const [addedCars, setAddedCars] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const myRef = useRef(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/my-cars/${user.email}`)
            .then(response => {
                setAddedCars(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [user.email]);

    const handleUpdateCar = car => {
        setSelectedCar(car);
        setOpen(true);
    };

    const handleSaveChanges = (id) => {
        if (selectedCar) {
            axios.put(`http://localhost:3000/cars/${selectedCar._id}`, selectedCar)
                .then(response => {
                    setOpen(false);
                    // Optionally refresh the car list here
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    const handleDeleteCar = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/cars/${id}`)
                    .then(response => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
    
                        // Remove the deleted car from the state
                        setAddedCars(prevCars => prevCars.filter(car => car._id !== id));
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });
    };
    

    return (
        <div className="bg-[#191919] border border-transparent py-20">
            <div className="overflow-x-auto mt-6 w-11/12 mx-auto">
                <table className="table-auto w-full bg-black border border-gray-700 rounded-lg shadow-lg animate__animated animate__fadeInUp">
                    <thead className="bg-black">
                        <tr>
                            <th className="px-4 py-4 text-white text-center text-xl">Car Image</th>
                            <th className="px-4 py-4 text-white text-center text-xl">Car Model</th>
                            <th className="px-4 py-4 text-white text-center text-xl">Daily Rental Price</th>
                            <th className="px-4 py-4 text-white text-center text-xl">Booking Count</th>
                            <th className="px-4 py-4 text-white text-center text-xl">Date Added</th>
                            <th className="px-4 py-4 text-white text-center text-xl">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedCars.map((car) => (
                                <tr key={car._id} className="border-t border-gray-700 hover:bg-[#2C2C2C]">
                                    <td className="px-4 py-2">
                                        <img src={`${car.imageUrl}`} alt="Car Image" className="w-28 h-20 rounded mx-auto" />
                                    </td>
                                    <td className="px-4 py-2 text-gray-300 text-center font-semibold">{car.carModel}</td>
                                    <td className="px-4 py-2 text-gray-300 text-center font-semibold">${car.dailyRentalPrice}</td>
                                    <td className="px-4 py-2 text-gray-300 text-center font-semibold">{car.bookingCount}</td>
                                    <td className="px-4 py-2 text-gray-300 text-center font-semibold">{car.availabilityDate}</td>
                                    <td className="px-4 py-2 text-center">
                                        <button onClick={() => handleUpdateCar(car)} className="flex items-center font-semibold text-blue-400 hover:text-blue-600 mx-auto">
                                            <span className="mr-2">
                                                <i className="text-lg">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path>
                                                    </svg>
                                                </i>
                                            </span>
                                            Update
                                        </button>
                                        <button onClick={() => handleDeleteCar(car._id)} className="flex items-center font-semibold text-red-400 hover:text-red-600 mt-2 mx-auto">
                                            <span className="mr-2">
                                                <i className="text-lg">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
                                                    </svg>
                                                </i>
                                            </span>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                car={selectedCar}
                handleSaveChanges={handleSaveChanges}
                myRef={myRef}
            />
        </div>
    );
};

export default MyCars;
