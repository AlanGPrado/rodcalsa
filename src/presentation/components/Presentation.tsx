import { motion } from "framer-motion";
import { Globe, Eye, Lightbulb } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const Presentation = () => {
    const { t } = useLanguage();

    const sections = [
        {
            title: t('presentation.mision.title'),
            icon: <Globe className="w-10 h-10 text-[#EF9314]" />,
            content: t('presentation.mision.content'),
        },
        {
            title: t('presentation.vision.title'),
            icon: <Eye className="w-10 h-10 text-[#EF9314]" />,
            content: t('presentation.vision.content'),
        },
        {
            title: t('presentation.filosofia.title'),
            icon: <Lightbulb className="w-10 h-10 text-[#EF9314]" />,
            content: (
                <div className="space-y-4 text-gray-700 text-lg">
                    <div className="flex items-start gap-3">
                        <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                        <p>
                            <span className="font-semibold">{t('presentation.filosofia.confianza.label')}</span> {t('presentation.filosofia.confianza.text')}
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                        <p>
                            <span className="font-semibold">{t('presentation.filosofia.calidad.label')}</span> {t('presentation.filosofia.calidad.text')}
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                        <p>
                            <span className="font-semibold">{t('presentation.filosofia.cumplimiento.label')}</span> {t('presentation.filosofia.cumplimiento.text')}
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                        <p>
                            <span className="font-semibold">{t('presentation.filosofia.innovacion.label')}</span> {t('presentation.filosofia.innovacion.text')}
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                        <p>
                            <span className="font-semibold">{t('presentation.filosofia.flexibilidad.label')}</span> {t('presentation.filosofia.flexibilidad.text')}
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
                        {t('presentation.title')} <span className="text-[#EF9314]">{t('presentation.titleHighlight')}</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        {t('presentation.subtitle')}
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
