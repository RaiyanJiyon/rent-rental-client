const BookingModal = ({ carInformation, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-gray-300 p-6 rounded-lg shadow-lg max-w-sm w-full relative">
                <h2 className="text-2xl font-bold mb-4">Confirm Booking</h2>
                <p className="mb-2 font-semibold text-gray-800">Car Model: {carInformation.carModel}</p>
                <p className="mb-2 font-semibold text-gray-800">Price per Day: {carInformation.dailyRentalPrice}$</p>
                <p className="mb-4 font-semibold text-gray-800">Availability: {carInformation.availabilityDate}</p>
                <a href="/cardetails/676b27fbe13ab0ab79271ad0" data-discover="true">
                    <button className="block w-full px-4 py-2 bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] hover:bg-gradient-to-l font-semibold text-white rounded-lg text-lg mb-4">
                        Confirm Booking
                    </button>
                </a>
                <button onClick={onClose} className="block w-full px-4 py-2 bg-gray-400 text-white rounded-lg text-lg hover:bg-gray-500">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default BookingModal;
