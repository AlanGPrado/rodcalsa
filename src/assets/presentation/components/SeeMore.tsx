import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectsCTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-[#fb923c] to-[#fcd34d] text-white text-center">
            <div className="max-w-3xl mx-auto px-6">
                {/* Título animado */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Conoce nuestros{" "}
                    <span className="text-gray-800">
                        Proyectos
                    </span>

                    {/* Animación inline */}
                    
                </motion.h2>


                {/* Texto animado */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg opacity-90 mb-8"
                >
                    Explora las casas y almacenes que hemos realizado con la más alta
                    calidad en diseño y construcción.
                </motion.p>

                {/* Botón animado */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/proyectos"
                        className="inline-block bg-white text-[#EF9314] px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-100 transition-colors duration-300"
                    >
                        Ver Proyectos
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
