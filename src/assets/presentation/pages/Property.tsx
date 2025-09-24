import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom"; // para leer la ruta
import { X, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects, type Project } from "../assets/data/projectsData";

export default function Property() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Estado para el carrusel de "Otros Proyectos"
    const [currentSlide, setCurrentSlide] = useState(0);
    const projectsPerSlide = 4;
    const totalSlides = Math.ceil(projects.length / projectsPerSlide);

    useEffect(() => {
        // Extraer el id de la URL: /property/1 → 1
        const match = location.pathname.match(/\/property\/(\d+)/);
        const projectId = match ? parseInt(match[1], 10) - 1 : 0;

        setCurrentProject(projects[projectId] || projects[0]);
        window.scrollTo(0, 0);
    }, [location]);

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const prevImage = () => {
        if (!currentProject) return;
        setCurrentIndex(
            currentIndex === 0 ? currentProject.images.length - 1 : currentIndex - 1
        );
    };

    const nextImage = () => {
        if (!currentProject) return;
        setCurrentIndex(
            currentIndex === currentProject.images.length - 1 ? 0 : currentIndex + 1
        );
    };

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && e.target === modalRef.current) closeModal();
    };

    // Funciones para el carrusel de "Otros Proyectos"
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    if (!currentProject) return null;

    return (
        <main>
            <Header />

            <div className="w-full">
                {/* Imagen principal */}
                <div className="relative w-full h-[400px] md:h-[650px] overflow-hidden">
                    <img
                        src={currentProject.images[0]}
                        alt="Propiedad principal"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 flex flex-col items-center justify-center text-center px-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4, ease: "easeOut" }}
                            className="text-white text-3xl md:text-5xl lg:text-5xl font-extrabold leading-tight drop-shadow-2xl"
                        >
                            {currentProject.title}
                        </motion.h2>
                    </div>
                </div>

                {/* Texto descriptivo */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            {currentProject.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            dapibus justo vitae elit faucibus, in tincidunt nisl tincidunt. Duis
                            condimentum lectus nec risus lacinia, sed consequat magna suscipit.
                            Aliquam erat volutpat. Curabitur ut tellus nec sapien tincidunt
                            placerat. Proin maximus, erat ut faucibus eleifend, sapien nulla
                            vehicula nisl, ut pretium lorem mauris in velit.
                        </p>
                    </div>
                </motion.div>

                {/* Collage de imágenes con hover zoom */}
                <div className="grid grid-cols-2 gap-0 w-[80%] m-auto">
                    {currentProject.images.map((img, idx) => (
                        <div
                            key={idx}
                            className="h-[250px] overflow-hidden cursor-pointer"
                            onClick={() => openModal(idx)}
                        >
                            <img
                                src={img}
                                alt={`Imagen ${idx + 1}`}
                                className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-105"
                            />
                        </div>
                    ))}

                    {/* Relleno si son impares */}
                    {currentProject.images.length % 2 !== 0 && (
                        <div className="h-[250px] bg-gray-100" />
                    )}
                </div>

                {/* Sección con íconos */}
                <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-4 p-6 bg-white shadow-lg rounded-xl"
                    >
                        <Home className="text-[#EF9314] w-12 h-12" />
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800">Dimensiones</h4>
                            <p className="text-gray-600">Área total: 350 m²</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-4 p-6 bg-white shadow-lg rounded-xl"
                    >
                        <Home className="text-[#EF9314] w-12 h-12" />
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800">Ciudad</h4>
                            <p className="text-gray-600">{currentProject.location}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Otros Proyectos */}
                <div className="bg-gray-100 py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8">Otros Proyectos</h3>
                        <section className="relative max-w-6xl mx-auto px-6 py-8 overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {projects.map((project, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                                        viewport={{ once: true }}
                                        className="min-w-[calc(100%/4)] px-2"
                                    >
                                        <div className="w-full bg-white shadow-lg overflow-hidden cursor-pointer relative flex flex-col rounded-sm">
                                            <a
                                                href={project.link}
                                                className="block w-full h-[200px] sm:h-[250px] relative"
                                            >
                                                <img
                                                    src={project.images[0]}
                                                    alt={`Blur fondo ${idx + 1}`}
                                                    className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
                                                    aria-hidden="true"
                                                />
                                                <img
                                                    src={project.images[0]}
                                                    alt={project.title}
                                                    className="relative z-20 w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                                />
                                            </a>
                                            <div className="relative z-30 bg-[#3C3C3C] text-white text-center py-4 flex items-center justify-center h-20">
                                                ◦ {project.title} ◦
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Flechas */}
                            <button
                                onClick={prevSlide}
                                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow z-30"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-800" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow z-30"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-800" />
                            </button>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />

            {/* Modal de galería */}
            {isOpen && currentProject && (
                <div
                    ref={modalRef}
                    onClick={handleBackgroundClick}
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-5 right-5 text-white bg-black/60 p-2 rounded-full"
                    >
                        <X size={28} />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-5 text-white bg-black/60 p-3 rounded-full"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <img
                        onClick={(e) => e.stopPropagation()}
                        src={currentProject.images[currentIndex]}
                        alt={`Imagen ${currentIndex + 1}`}
                        className="max-w-[90%] max-h-[80%] object-contain rounded-lg shadow-lg"
                    />

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-5 text-white bg-black/60 p-3 rounded-full"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            )}
        </main>
    );
}
