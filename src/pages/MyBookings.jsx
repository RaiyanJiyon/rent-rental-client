import axios from "axios";
import { format } from "date-fns";
import { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import ModifyBookingDateModal from "../components/bookings/ModifyBookingDate";


const MyBookings = () => {
    const [bookingCars, setBookingCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBookingId, setSelectedBookingId] = useState(null);
    const myRef = useRef(null);

    const fetchCars = () => {
        axios
            .get("http://localhost:3000/booking-cars")
            .then((response) => {
                setBookingCars(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Failed to fetch booking cars",
                    text: "Please try again later",
                });
            });
    };

    const handleModifyDate = (id) => {
        setSelectedBookingId(id);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBookingId(null);
    };

    const handleSubmitDate = (newDate) => {
        axios
            .put(`http://localhost:3000/booking-cars/${selectedBookingId}`, { bookingDate: newDate })
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Booking date updated successfully",
                });
                fetchCars();
                handleCloseModal();
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Failed to update booking date",
                    text: "Please try again later",
                });
            });
    };

    useEffect(() => {
        fetchCars();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#191919] flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
            </div>
        );
    }

    return (
        <div className="bg-[#191919] min-h-screen border border-transparent py-20" ref={myRef}>
            <h1 className="text-4xl font-bold text-center text-white mb-10">My Bookings</h1>

            {bookingCars.length === 0 ? (
                <div className="text-center text-gray-400 text-xl">
                    You haven&apos;t booked any cars yet.
                </div>
            ) : (
                <div className="overflow-x-auto mt-6 w-11/12 mx-auto">
                    <table className="table-auto w-full bg-black border border-gray-700 rounded-lg shadow-lg animate__animated animate__fadeInUp">
                        <thead className="bg-black">
                            <tr>
                                <th className="px-4 py-4 text-white text-center text-xl">Car Image</th>
                                <th className="px-4 py-4 text-white text-center text-xl">Car Model</th>
                                <th className="px-4 py-4 text-white text-center text-xl">Booking Date</th>
                                <th className="px-4 py-4 text-white text-center text-xl">Total Price</th>
                                <th className="px-4 py-4 text-white text-center text-xl">Booking Status</th>
                                <th className="px-4 py-4 text-white text-center text-xl">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingCars.map((car) => (
                                <tr
                                    key={car._id}
                                    className="border-t border-gray-700 hover:bg-[#2C2C2C] transition-colors duration-200"
                                >
                                    <td className="px-4 py-4">
                                        <img
                                            src={car.imageUrl}
                                            alt={car.carModel}
                                            className="w-28 h-20 object-cover rounded mx-auto"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "/placeholder-car.png";
                                            }}
                                        />
                                    </td>
                                    <td className="px-4 py-4 text-gray-300 text-center font-semibold">
                                        {car.carModel}
                                    </td>
                                    <td className="px-4 py-4 text-gray-300 text-center font-semibold">
                                        {format(new Date(car.bookingDate), "dd-MM-yyyy HH:mm")}
                                    </td>
                                    <td className="px-4 py-4 text-gray-300 text-center font-semibold">
                                        ${car.dailyRentalPrice}
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-semibold ${car.bookingStatus === "Booked"
                                                    ? "bg-red-200 text-red-800"
                                                    : car.bookingStatus === "Pending"
                                                        ? "bg-yellow-200 text-yellow-800"
                                                        : "bg-green-200 text-green-800"
                                                }`}
                                        >
                                            {car.bookingStatus}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-center space-x-4">
                                        <button
                                            onClick={() => handleModifyDate(car._id)}
                                            className="inline-flex font-medium items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            Modify Date
                                        </button>
                                        <button className="inline-flex font-medium items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {isModalOpen && (
                        <ModifyBookingDateModal
                            onClose={handleCloseModal}
                            onSubmit={handleSubmitDate}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default MyBookings;
