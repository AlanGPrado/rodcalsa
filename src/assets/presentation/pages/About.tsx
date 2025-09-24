import { motion } from "framer-motion";
import { Globe, Eye, Lightbulb } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const divisions = [
        {
            title: "Misión",
            icon: <Globe className="w-10 h-10 text-[#EF9314]" />,
            content:
                "En Rocalsa ofrecemos soluciones integrales en construcción y acabados, desde proyectos completos hasta la importación e instalación de materiales premium. Nuestra misión es brindar confianza, calidad e innovación a cada cliente, garantizando resultados que combinan diseño, funcionalidad y durabilidad.",
        },
        {
            title: "Visión",
            icon: <Eye className="w-10 h-10 text-[#EF9314]" />,
            content:
                "Ser una empresa referente en construcción y suministro de materiales a nivel regional y nacional, reconocida por nuestra capacidad de ejecutar proyectos de principio a fin y por proveer materiales innovadores y exclusivos que marcan tendencia en el mercado.",
        },
        {
            title: "Filosofía",
            icon: <Lightbulb className="w-10 h-10 text-[#EF9314]" />,
            content: (
                <div className="space-y-3 text-gray-700 text-base">
                    {[
                        ["Confianza", "trabajamos con un equipo de profesionales y proveedores confiables."],
                        ["Calidad", "importamos y fabricamos materiales que aseguran acabados únicos y de larga duración."],
                        ["Cumplimiento", "entregamos en tiempo y forma cada proyecto o instalación."],
                        ["Innovación", "integramos productos de vanguardia que diferencian a nuestros clientes."],
                        ["Flexibilidad", "atendemos tanto grandes obras como proyectos residenciales o comerciales de menor escala."],
                    ].map(([title, desc], idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                            <p>
                                <span className="font-semibold">{title}:</span> {desc}
                            </p>
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
                            Conoce <span className="text-[#EF9314]">Rocalsa</span>
                        </h1>
                        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                            Soluciones integrales en construcción y materiales premium, con instalación profesional que nos diferencia de la competencia.
                        </p>
                    </div>

                    {/* Tarjetas de Misión, Visión y Filosofía */}
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

                    {/* Sección adicional opcional */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-20 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Calidad, innovación y compromiso
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
                            Cada proyecto que realizamos refleja nuestra dedicación por la excelencia y la atención al detalle, asegurando que nuestros clientes reciban soluciones únicas y duraderas.
                        </p>
                        <Link
                            to="/contacto"
                            className="inline-block px-8 py-3 bg-[#EF9314] text-white font-semibold rounded-full shadow-md hover:bg-[#d67f0f] transition-colors duration-300"
                        >
                            ¡Contáctanos!
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
