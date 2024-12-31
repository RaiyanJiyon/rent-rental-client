import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AvailableCars from "../pages/AvailableCars";
import CarDetails from "../pages/CarDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddCar from "../pages/AddCar";
import MyCars from "../pages/MyCars";
import MyBookings from "../pages/MyBookings";
import ResetPassword from "../pages/ResetPassword";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "available-cars",
                element: <AvailableCars />
            },
            {
                path: "cars/:id",
                element: <CarDetails />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "forget-password",
                element: <ResetPassword />
            },
            {
                path: "dashboard",
                element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
                children: [
                    {
                        path: "add-car",
                        element: <AddCar />
                    },
                    {
                        path: "my-cars",
                        element: <MyCars />
                    },
                    {
                        path: "my-bookings",
                        element: <MyBookings />
                    }
                ]
            }
        ]
    }
]);


export default router;