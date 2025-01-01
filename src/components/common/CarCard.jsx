import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    return (
        <div className="relative flex flex-col my-6 bg-black text-white shadow-sm border border-slate-200 rounded-lg">
            <div className="relative h-44 m-2.5 overflow-hidden text-white rounded-md">
                <img
                    className='w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110'
                    src={`${car.imageUrl}`}
                    alt="card-image"
                />
                <div className="absolute top-0 left-0 bg-[#FF3600] text-white font-bold text-sm p-2 rounded-br-lg">
                    ${car.dailyRentalPrice}/Day
                </div>
            </div>
            <div className="p-4">
                <h6 className="mb-2 text-red-600 text-xl font-semibold">
                    {car.carModel}
                </h6>
                <p className="leading-normal font-light text-sm">
                    <span className='font-bold'>Availability: </span>
                    {car.availabilityDate}
                </p>
                <p className="leading-normal font-light text-sm">
                    <span className='font-bold'>Booking Count: </span>
                    {car.bookingCount}
                </p>
                <p className="leading-normal font-light text-sm">
                    <span className='font-bold'>Location: </span>
                    {car.location}
                </p>
            </div>
            <Link to={`/cars/${car._id}`} className="px-4 pb-4 w-full">
                <button
                    className="w-full px-6 py-1 font-semibold bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white hover:bg-gradient-to-l  duration-300 border-none rounded-lg hover:scale-105 transition-transform text-sm"
                >
                    Rent Now
                </button>
            </Link>
        </div>
    );
};

CarCard.propTypes = {
    car: PropTypes.shape({
        carModel: PropTypes.string.isRequired,
        dailyRentalPrice: PropTypes.number.isRequired,
        availabilityDate: PropTypes.string.isRequired,
        vehicleRegistrationNumber: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired,
        bookingCount: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        saveUserDetails: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            photo: PropTypes.string.isRequired,
        }).isRequired,
        bookingStatus: PropTypes.string.isRequired,
    }).isRequired,
};

export default CarCard;
