import { motion } from "framer-motion";
import { Globe, Eye, Lightbulb } from "lucide-react";

const Presentation = () => {
    const sections = [
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
                <div className="space-y-4 text-gray-700 text-lg">
                    <div className="flex items-start gap-3">
                        <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                        <p>
                            <span className="font-semibold">Confianza:</span> trabajamos con un equipo de profesionales y proveedores confiables.
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                        <p>
                            <span className="font-semibold">Calidad:</span> importamos y fabricamos materiales que aseguran acabados únicos y de larga duración.
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                        <p>
                            <span className="font-semibold">Cumplimiento:</span> entregamos en tiempo y forma cada proyecto o instalación.
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                        <p>
                            <span className="font-semibold">Innovación:</span> integramos productos de vanguardia que diferencian a nuestros clientes.
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                        <p>
                            <span className="font-semibold">Flexibilidad:</span> atendemos tanto grandes obras como proyectos residenciales o comerciales de menor escala.
                        </p>
                    </div>
                </div>

            ),
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                {/* Título general */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Sobre <span className="text-[#EF9314]">Rocalsa</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Soluciones integrales en construcción y materiales premium, con instalación profesional que nos diferencia de la competencia.
                    </p>
                </div>

                {/* Secciones verticales */}
                <div className="space-y-12">
                    {sections.map((sec, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {sec.icon}
                                <h3 className="text-3xl md:text-4xl font-semibold text-[#EF9314]">
                                    {sec.title}
                                </h3>
                            </div>
                            <div className="text-gray-700 text-lg leading-relaxed">{sec.content}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Presentation;
