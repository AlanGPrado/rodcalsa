import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectsCTA() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-gradient-to-r from-[#fb923c] to-[#fcd34d] text-white text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 pattern-dots opacity-30"></div>
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                {/* Título animado */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    {t('seeMore.title')}{" "}
                    <span className="text-gray-800">
                        {t('seeMore.titleHighlight')}
                    </span>
                </motion.h2>


                {/* Texto animado */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-lg opacity-90 mb-8"
                >
                    {t('seeMore.subtitle')}
                </motion.p>

                {/* Botón animado */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Link
                        to="/proyectos"
                        className="inline-block bg-white text-[#EF9314] px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-100 transition-colors duration-300"
                    >
                        {t('seeMore.button')}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
