import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Form, Link } from "react-router-dom";
import { authContext } from "../contexts/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { createUser } = useContext(authContext);

    const handleRegisterForm = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('name');
        const photoUrl = formData.get('photoUrl');
        const email = formData.get('email');
        const password = formData.get('password');

        const data = {
            name,
            photoUrl,
            email,
            password
        }
        console.log(data);

        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name,
                    photoURL: photoUrl
                }).then(() => {
                    console.log('Profile updated:', user);
                }).catch((error) => {
                    console.error('Error updating profile:', error);
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="bg-[#191919] py-10">
            <Helmet>
                <title>Register | NeoDrive</title>
            </Helmet>
            <div className="w-full max-w-md mx-auto bg-[#060b17] p-8 space-y-3 rounded-xl">
                <h1 className="text-3xl font-bold text-center text-[#ff3700d7]">Create an account</h1>
                <p className="text-center text-base-300 font-medium pb-5">Please fill in your details to create an account</p>
                <form onSubmit={handleRegisterForm} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-white font-bold">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full bg-[#1F2937] text-white px-4 py-3 rounded-md focus:border-red-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoUrl" className="block text-white font-bold">Photo URL</label>
                        <input type="url" name="photoUrl" id="photoUrl" placeholder="Enter your photo URL" className="w-full bg-[#1F2937] text-white px-4 py-3 rounded-md focus:border-red-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-white font-bold">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" className="w-full bg-[#1F2937] text-white px-4 py-3 rounded-md focus:border-red-600" />
                    </div>
                    <div className="space-y-1 text-sm pb-2">
                        <label htmlFor="password" className="block text-white font-bold">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full bg-[#1F2937] text-white px-4 py-3 rounded-md focus:border-red-600" />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white font-bold hover:bg-gradient-to-l transition-all duration-300 border-none">Register</button>
                </form>
                <p className="text-xs text-white text-center sm:px-6">Already have an account?
                    <Link to={'/login'} className="underline ml-1 text-red-600 font-bold">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
