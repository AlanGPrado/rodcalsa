import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import Divisions from "../components/Divisions";
import OurPlus from "../components/OurPlus";
import SeeMore from "../components/SeeMore";
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
            <OurPlus />
            <SeeMore />
            <Footer />
        </div>
    );
}
