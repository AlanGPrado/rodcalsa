import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../assets/data/projectsData";

const Slideshow = () => {
    // Build slides: one per project
    const slides = projects.map((project, idx) => ({
        image: project.images[0], // first image of each project
        link: project.link,
        title: project.title,
        alt: `Property_${idx + 1}`,
    }));

    const [current, setCurrent] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const startInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
        startInterval();
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
        startInterval();
    };

    const goToSlide = (index: number) => {
        setCurrent(index);
        startInterval();
    };

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <section className="relative w-full h-[400px] md:h-[650px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === current ? "opacity-100 z-20" : "opacity-0 z-10"
                    }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 flex flex-col items-center justify-center text-center px-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4, ease: "easeOut" }}
                            className="text-white text-3xl md:text-5xl lg:text-5xl font-extrabold leading-tight drop-shadow-2xl"
                        >
                            {slide.title}
                        </motion.h2>

                        <Link
                            to={slide.link ?? "#"}
                            className="mt-6 bg-[#EF9314] hover:bg-[#d77e0d] text-white px-6 py-3 rounded-lg text-lg md:text-xl font-semibold shadow-md transition-colors duration-300"
                        >
                            Descubre más
                        </Link>
                    </div>
                </div>
            ))}

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow z-30"
            >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow z-30"
            >
                <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            idx === current
                                ? "bg-white scale-125"
                                : "bg-white/60 hover:bg-white"
                        }`}
                        onClick={() => goToSlide(idx)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Slideshow;
