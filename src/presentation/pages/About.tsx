import { motion } from "framer-motion";
import { Globe, Eye, Lightbulb } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import engineerBlueprints from "../../assets/images/engineer-blueprints.png";

export default function About() {
    const location = useLocation();
    const { t } = useLanguage();
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const divisions = [
        {
            title: t('about.mision.title'),
            icon: <Globe className="w-10 h-10 text-[#EF9314]" />,
            content: t('about.mision.content'),
        },
        {
            title: t('about.vision.title'),
            icon: <Eye className="w-10 h-10 text-[#EF9314]" />,
            content: t('about.vision.content'),
        },
        {
            title: t('about.filosofia.title'),
            icon: <Lightbulb className="w-10 h-10 text-[#EF9314]" />,
            content: (
                <div className="space-y-3 text-gray-700 text-base">
                    {(t('about.filosofia.items') as Array<{ label: string, text: string }>).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                            <p>
                                <span className="font-semibold">{item.label}:</span> {item.text}
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

            <section key={location.pathname} className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    {/* Título principal */}
                    <div className="section-header">
                        <div className="decorative-line"></div>
                        <h1 className="section-title">
                            {t('about.title')} <span className="text-gradient">{t('about.titleHighlight')}</span>
                        </h1>
                        <p className="section-subtitle">
                            {t('about.subtitle')}
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
                                viewport={{ once: true, amount: 0.3 }}
                                className="group bg-white p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 flex flex-col border border-gray-100 hover:border-orange-200 hover-lift"
                            >
                                <div className="flex flex-col items-center mb-6 text-center">
                                    {/* Icon wrapper with gradient background */}
                                    <div className="icon-container mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {div.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 break-words group-hover:text-[#EF9314] transition-colors duration-300">
                                        {div.title}
                                    </h3>
                                </div>
                                <div className="text-left">{div.content}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Team Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-20 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative"
                    >
                        {!imageLoaded && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />
                        )}
                        <img
                            src={engineerBlueprints}
                            alt="Engineering Team"
                            onLoad={() => setImageLoaded(true)}
                            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Sección adicional opcional */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-20 text-center"
                    >
                        <div className="decorative-line"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('about.footer.title')}
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                            {t('about.footer.subtitle')}
                        </p>
                        <Link
                            to="/contacto"
                            className="btn-primary"
                        >
                            {t('about.footer.button')}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
