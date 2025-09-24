import { motion } from "framer-motion";
import { Home, Box, Settings } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const divisions = [
        {
            title: "División Construcción",
            icon: <Home className="w-10 h-10 text-[#EF9314]" />,
            content: (
                <div className="space-y-3 text-gray-700 text-base">
                    {[
                        "Obras completas (casas, bodegas, clínicas, departamentos).",
                        "Remodelaciones residenciales y comerciales.",
                        "Proyectos llave en mano: diseño, ingeniería, gestión y ejecución.",
                    ].map((text, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            ),
        },
        {
            title: "División Materiales & Acabados Premium",
            icon: <Box className="w-10 h-10 text-[#EF9314]" />,
            content: (
                <div className="space-y-3 text-gray-700 text-base">
                    {[
                        "Ventanas y ventanales de vidrio templado.",
                        "Puertas y cancelería de aluminio.",
                        "Deck y pisos de madera sintética.",
                        "Lambrín decorativo.",
                        "Piedra y revestimientos de pared.",
                        "Papel tapiz de cualquier tipo.",
                        "No solo vendemos el material, también lo instalamos profesionalmente, un plus enorme frente a la competencia.",
                    ].map((text, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            ),
        },
        {
            title: "Nuestro Plus",
            icon: <Settings className="w-10 h-10 text-[#EF9314]" />,
            content: (
                <div className="space-y-3 text-gray-700 text-base">
                    {[
                        "Importadores 100% → mejores precios.",
                        "Instalación garantizada por personal especializado.",
                        "Materiales exclusivos y modernos.",
                        "Soluciones tanto para clientes residenciales como comerciales e industriales.",
                    ].map((text, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            ),
        },
    ];


    return (
        <main className="bg-white">
            <Header />

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    {/* Título principal */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Nuestros <span className="text-[#EF9314]">Servicios</span>
                        </h1>
                        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                            Ofrecemos soluciones integrales en construcción y materiales premium, con instalación profesional que nos diferencia de la competencia.
                        </p>
                    </div>

                    {/* Tarjetas de Divisiones y Nuestro Plus */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {divisions.map((div, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gray-100 p-8 rounded-2xl shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300"
                            >
                                <div className="flex flex-col items-center mb-6 text-center">
                                    {/* Icon wrapper ensures same size for all */}
                                    <div className="flex items-center justify-center w-12 h-12 mb-3">
                                        {div.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 break-words">
                                        {div.title}
                                    </h3>
                                </div>
                                <div className="text-left">{div.content}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Texto adicional debajo de las tarjetas */}
                    {/* Texto adicional debajo de las tarjetas */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-20 text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Contamos con los mejores servicios
                        </h2>
                        <p className="text-gray-600 text-lg mb-6">
                            Cada servicio que ofrecemos refleja nuestra dedicación a la excelencia,
                            asegurando resultados de calidad, innovación y satisfacción total para
                            nuestros clientes.
                        </p>

                        {/* Botón */}
                        <Link
                            to="/proyectos"
                            className="inline-block px-8 py-3 bg-[#EF9314] text-white font-semibold rounded-full shadow-md hover:bg-[#d67f0f] transition-colors duration-300"
                        >
                            ¡Conoce nuestros proyectos!
                        </Link>
                    </motion.div>

                </div>

            </section>

            <Footer />
        </main>

    );
}
