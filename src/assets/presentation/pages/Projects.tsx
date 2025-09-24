import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../assets/data/projectsData";
import { Link } from "react-router-dom";

export default function ProjectCards() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Header />
            <section className="py-20 bg-white" id="proyectos">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    {/* Título */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Proyectos <span className="text-[#EF9314]">Realizados</span>
                        </h2>
                        <p className="mt-4 text-gray-600 text-lg">
                            Casas y almacenes destacados con fotos y descripción corta.
                        </p>
                    </div>

                    {/* Grid 2x2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
                            >
                                {/* Imagen */}
                                <Link to={String(project.link)} className="block overflow-hidden">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </Link>

                                {/* Info */}
                                <div className="p-6 bg-[#3C3C3C]">
                                    {project.location && (
                                        <p className="text-xs text-[#f9f9f9] opacity-[0.7]">{project.location}</p>
                                    )}
                                    <h3 className="text-xl font-semibold text-white mt-1">
                                        <Link to={String(project.link)}>{project.title}</Link>
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
