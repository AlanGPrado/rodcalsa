import { motion } from "framer-motion";
import { Home, Box, Settings } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import constructionSite from "../../assets/images/construction-site.png";

export default function Services() {
    const location = useLocation();
    const { t } = useLanguage();
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const divisions = [
        {
            title: t('services.construction.title'),
            icon: <Home className="w-10 h-10 text-[#EF9314]" />,
            content: (
                <div className="space-y-3 text-gray-700 text-base">
                    {(t('services.construction.items') as string[]).map((text, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            ),
        },
        {
            title: t('services.materials.title'),
            icon: <Box className="w-10 h-10 text-[#EF9314]" />,
            content: (
                <div className="space-y-3 text-gray-700 text-base">
                    {(t('services.materials.items') as string[]).map((text, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <span className="mt-2 w-3 h-3 bg-[#EF9314] rounded-full flex-shrink-0"></span>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            ),
        },
        {
            title: t('services.ourPlus.title'),
            icon: <Settings className="w-10 h-10 text-[#EF9314]" />,
            content: (
                <div className="space-y-3 text-gray-700 text-base">
                    {(t('services.ourPlus.items') as string[]).map((text, idx) => (
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

            <section key={location.pathname} className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    {/* Título principal */}
                    <div className="section-header">
                        <div className="decorative-line"></div>
                        <h1 className="section-title">
                            {t('services.title')} <span className="text-gradient">{t('services.titleHighlight')}</span>
                        </h1>
                        <p className="section-subtitle">
                            {t('services.subtitle')}
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
                                viewport={{ once: true, amount: 0.3 }}
                                className="group relative bg-white p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 flex flex-col border border-gray-100 hover:border-orange-200 card-3d overflow-hidden"
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

                    {/* Construction Site Image */}
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
                            src={constructionSite}
                            alt="Construction Site"
                            onLoad={() => setImageLoaded(true)}
                            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Texto adicional debajo de las tarjetas */}
                    {/* Texto adicional debajo de las tarjetas */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-20 text-center max-w-3xl mx-auto"
                    >
                        <div className="decorative-line"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('services.footer.title')}
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            {t('services.footer.subtitle')}
                        </p>

                        {/* Enhanced Button */}
                        <Link
                            to="/proyectos"
                            className="btn-primary"
                        >
                            {t('services.footer.button')}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </motion.div>

                </div>

            </section>

            <Footer />
        </main>

    );
}
