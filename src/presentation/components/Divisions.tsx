import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function DivisionesVertical() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-white relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 pattern-grid opacity-50"></div>
            <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Título */}
                <div className="section-header">
                    <div className="decorative-line"></div>
                    <h2 className="section-title">
                        {t('divisions.title')} <span className="text-gradient">{t('divisions.titleHighlight')}</span>
                    </h2>
                    <p className="section-subtitle">
                        {t('divisions.subtitle')}
                    </p>
                </div>

                {/* División Construcción */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl md:text-4xl font-semibold text-[#EF9314] mb-6">
                        {t('divisions.construction.title')}
                    </h3>
                    <div className="space-y-4 text-gray-700 text-lg">
                        {(t('divisions.construction.items') as string[]).map((item: string, idx: number) => (
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
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl md:text-4xl font-semibold text-[#EF9314] mb-6">
                        {t('divisions.materials.title')}
                    </h3>
                    <div className="space-y-4 text-gray-700 text-lg">
                        {(t('divisions.materials.items') as string[]).map((item: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-3">
                                <span className="mt-1 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
