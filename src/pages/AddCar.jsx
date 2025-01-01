import { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Helmet } from "react-helmet-async";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import { authContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedFile, setSelectedFile] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(authContext);
    const navigate = useNavigate();

    const handleAddCarForm = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        let imageUrl = null;
        if (selectedFile) {
            imageUrl = await handleImageUpload(selectedFile);
        }

        const carData = {
            carModel: formData.get('carModel'),
            dailyRentalPrice: parseFloat(formData.get('dailyRentalPrice')),
            availabilityDate: startDate,
            vehicleRegistrationNumber: formData.get('vehicleRegistrationNumber'),
            features: formData.get('features').split(",").map(feature => feature.trim()),
            description: formData.get('description'),
            bookingCount: 0,
            imageUrl: imageUrl,
            location: formData.get('location'),
            saveUserDetails: {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            },
            bookingStatus: "Pending"
        };

        try {
            const response = await axios.post('http://localhost:5000/cars', carData);
            if (response.data.insertedId) {
                Swal.fire({
                    title: "Car successfully added",
                    icon: "success",
                    draggable: true
                });
                form.reset();
                navigate('/available-cars');
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
                text: "Failed to add car. Please try again.",
            });
        }

        console.log("Form submitted with selected file:", selectedFile);
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
        <div className="bg-[#191919] pb-20">
            <Helmet>
                <title>Add Car | NeoDrive</title>
            </Helmet>

            <div className="w-11/12 md:w-1/2 mx-auto py-6 md:py-10 space-y-4">
                <h1 className="text-4xl font-bold text-center text-[#ff3700d7] ">Add Your Car</h1>
                <p className="text-center text-base-300 font-medium pb-5">List your car effortlessly, reach more renters, and maximize your earnings by joining our trusted car-sharing platform today!</p>
            </div>

            <div className="w-full md:w-3/5 mx-auto bg-[#060b17] p-8 space-y-3 rounded-xl">
                <h1 className="text-3xl font-bold text-center text-[#ff3700d7] ">Add Your Car</h1>
                <form onSubmit={handleAddCarForm} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="carModel" className="block text-white font-bold mb-2">Car Model</label>
                        <input type="text" name="carModel" id="carModel" placeholder="Enter car model" className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="dailyRentalPrice" className="block text-white font-bold mb-2">Daily Rental Price</label>
                        <input type="number" name="dailyRentalPrice" id="dailyRentalPrice" placeholder="Enter daily rental price" className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="availabilityDate" className="block text-white font-bold mb-2">Availability Date</label>
                        <DatePicker name="availabilityDate" id="availabilityDate" className="bg-[#1F2937] text-white px-4 py-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="vehicleRegistrationNumber" className="block text-white font-bold mb-2">Vehicle Registration Number</label>
                        <input type="text" name="vehicleRegistrationNumber" id="vehicleRegistrationNumber" placeholder="Enter vehicle registration number" className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="features" className="block text-white font-bold mb-2">Features</label>
                        <input type="text" name="features" id="features" placeholder="Enter features (comma-separated)" className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="description" className="block text-white font-bold mb-2">Description</label>
                        <textarea name="description" id="description" placeholder="Enter description" className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"></textarea>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="location" className="block text-white font-bold mb-2">Location</label>
                        <input type="text" name="location" id="location" placeholder="Enter location" className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="image" className="block text-white font-bold mb-2">Image</label>
                        <div {...getRootProps()} className={`border-dashed border-2 p-4 rounded-md text-center ${isDragActive ? "border-red-600" : "border-gray-500"}`}>
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p className="text-white">Drop the files here...</p>
                            ) : (
                                <p className="text-white">Drag and drop files here, or click to select a file</p>
                            )}
                        </div>
                        {selectedFile && <p className="text-sm text-green-500 mt-2">Selected file: {selectedFile.name}</p>}
                    </div>
                    <button className="block w-full p-2 text-center rounded-sm bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white font-bold hover:bg-gradient-to-l transition-all duration-300 border-none">Add Car</button>
                </form>
            </div>
        </div>
    );
};

export default AddCar;
