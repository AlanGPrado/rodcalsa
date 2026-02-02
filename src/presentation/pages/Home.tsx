import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import Divisions from "../components/Divisions";
import OurPlus from "../components/OurPlus";
import SeeMore from "../components/SeeMore";
import RotcalGroupSection from "../components/RotcalGroupSection";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header />
            <Slider />
            <Presentation />
            <Divisions />
            <RotcalGroupSection />
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
            <OurPlus />
            <SeeMore />
            <Footer />
        </div>
    );
}
