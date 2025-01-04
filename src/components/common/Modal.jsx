import React, { useContext, useEffect, useState } from 'react';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider';
import './modalStyles.css';

const Modal = ({ open, onClose, car, handleSaveChanges, myRef }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log(car)

    const [selectedFile, setSelectedFile] = useState(null);
    const [startDate, setStartDate] = useState(car ? new Date(car.availabilityDate) : new Date());
    const [carModel, setCarModel] = useState(car ? car.carModel : '');
    const [dailyRentalPrice, setDailyRentalPrice] = useState(car ? car.dailyRentalPrice : '');
    const [vehicleRegistrationNumber, setVehicleRegistrationNumber] = useState(car ? car.vehicleRegistrationNumber : '');
    const [features, setFeatures] = useState(car ? car.features.join(', ') : '');
    const [description, setDescription] = useState(car ? car.description : '');
    const [location, setLocation] = useState(car ? car.location : '');
    const { user } = useContext(authContext);

    const handleUpdateCarForm = async (e) => {
        e.preventDefault();

        console.log(car)

        let imageUrl = null;
        if (selectedFile) {
            imageUrl = await handleImageUpload(selectedFile);
        }

        const carData = {
            carModel,
            dailyRentalPrice: parseFloat(dailyRentalPrice),
            availabilityDate: startDate,
            vehicleRegistrationNumber,
            features: features.split(",").map(feature => feature.trim()),
            description,
            bookingCount: car.bookingCount,
            imageUrl: imageUrl || car.imageUrl,
            location,
            saveUserDetails: {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            },
            bookingStatus: "Pending"
        };

        try {
            const response = await axios.put(`http://localhost:3000/cars/${car._id}`, carData);
            if (response.data.updated) {
                Swal.fire({
                    title: "Car successfully updated",
                    icon: "success",
                    draggable: true
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to update car. Please try again.",
            });
        }
    };

    const onDrop = (acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]); // Get the first dropped file
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

    const handleImageUpload = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch(
                "https://api.imgbb.com/1/upload?key=74ea1ddd96327cb757effd0ab3f71192",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();
            if (data.success) {
                return data.data.url; // Getting the direct image URL
            } else {
                throw new Error("Image upload failed");
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Failed to upload image. Please try again.",
                icon: "error",
                confirmButtonText: "Close",
                confirmButtonColor: "#d33",
            });
            throw error;
        }
    };

    return (
        <ResponsiveModal
            open={open}
            onClose={onClose}
            center
            container={myRef.current}
        >
            {car && (
                <div className="w-full bg-[#060b17] p-8 space-y-3 rounded-xl">
                    <h1 className="text-3xl font-bold text-center text-[#ff3700d7] ">Update Your Car</h1>
                    <form onSubmit={handleUpdateCarForm} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="carModel" className="block text-white font-bold mb-2">Car Model</label>
                            <input
                                type="text"
                                name="carModel"
                                id="carModel"
                                placeholder="Enter car model"
                                value={carModel}
                                onChange={(e) => setCarModel(e.target.value)}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="dailyRentalPrice" className="block text-white font-bold mb-2">Daily Rental Price</label>
                            <input
                                type="number"
                                name="dailyRentalPrice"
                                id="dailyRentalPrice"
                                placeholder="Enter daily rental price"
                                value={dailyRentalPrice}
                                onChange={(e) => setDailyRentalPrice(e.target.value)}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="availabilityDate" className="block text-white font-bold mb-2">Availability Date</label>
                            <DatePicker
                                name="availabilityDate"
                                id="availabilityDate"
                                className="bg-[#1F2937] text-white px-4 py-2 rounded-md"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="vehicleRegistrationNumber" className="block text-white font-bold mb-2">Vehicle Registration Number</label>
                            <input
                                type="text"
                                name="vehicleRegistrationNumber"
                                id="vehicleRegistrationNumber"
                                placeholder="Enter vehicle registration number"
                                value={vehicleRegistrationNumber}
                                onChange={(e) => setVehicleRegistrationNumber(e.target.value)}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="features" className="block text-white font-bold mb-2">Features</label>
                            <input
                                type="text"
                                name="features"
                                id="features"
                                placeholder="Enter features (comma-separated)"
                                value={features}
                                onChange={(e) => setFeatures(e.target.value)}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="description" className="block text-white font-bold mb-2">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="location" className="block text-white font-bold mb-2">Location</label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                placeholder="Enter location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="image" className="block text-white font-bold mb-2">Image</label>
                            <div
                                {...getRootProps()}
                                className={`border-dashed border-2 p-4 rounded-md text-center ${
                                    isDragActive ? "border-red-600" : "border-gray-500"
                                }`}
                            >
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <p className="text-white">Drop the files here...</p>
                                ) : (
                                    <p className="text-white">Drag and drop files here, or click to select a file</p>
                                )}
                            </div>
                            {selectedFile && <p className="text-sm text-green-500 mt-2">Selected file: {selectedFile.name}</p>}
                            </div>
                            <img className='w-full h-32' src={`${car.imageUrl}`} alt={`${car.carModel} image`} />
                            <button className="block w-full p-2 text-center rounded-sm bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white font-bold hover:bg-gradient-to-l transition-all duration-300 border-none">Add Car</button>
                        </form>
                    </div>
            )}
        </ResponsiveModal>
    );
};

export default Modal;
