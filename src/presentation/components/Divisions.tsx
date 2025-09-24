import { motion } from "framer-motion";

export default function DivisionesVertical() {
    const buildItems = [
        "Obras completas (casas, bodegas, clínicas, departamentos).",
        "Remodelaciones residenciales y comerciales.",
        "Proyectos llave en mano: diseño, ingeniería, gestión y ejecución.",
    ];

    const materialsItems = [
        "Ventanas y ventanales de vidrio templado.",
        "Puertas y cancelería de aluminio.",
        "Deck y pisos de madera sintética.",
        "Lambrín decorativo.",
        "Piedra y revestimientos de pared.",
        "Papel tapiz de cualquier tipo.",
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                {/* Título */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Nuestras <span className="text-[#EF9314]">Divisiones</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Ofrecemos soluciones integrales en construcción y materiales premium,
                        con instalación profesional que nos diferencia de la competencia.
                    </p>
                </motion.div>

                {/* División Construcción */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl md:text-4xl font-semibold text-[#EF9314] mb-6">
                        División Construcción
                    </h3>
                    <div className="space-y-4 text-gray-700 text-lg">
                        {buildItems.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <span className="mt-1 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* División Materiales & Acabados Premium */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl md:text-4xl font-semibold text-[#EF9314] mb-6">
                        División Materiales & Acabados Premium
                    </h3>
                    <div className="space-y-4 text-gray-700 text-lg">
                        {materialsItems.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <span className="mt-1 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-gray-600 italic text-lg">
                        No solo vendemos el material, también lo instalamos profesionalmente,
                        un plus enorme frente a la competencia.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
