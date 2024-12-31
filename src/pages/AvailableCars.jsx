import { useEffect } from "react";
import Hero from "../components/availableCars/Hero";

const AvailableCars = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <Hero />
        </div>
    );
};

export default AvailableCars;