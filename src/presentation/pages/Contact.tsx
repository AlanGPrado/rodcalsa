import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
    const location = useLocation();
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <main key={window.location.pathname}>
            <Header></Header>
            <section key={location.pathname} className="py-20 bg-white" id="contacto">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    {/* Título */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="decorative-line"></div>
                        <h2 className="section-title">
                            {t('contact.title')}
                        </h2>
                        <p className="section-subtitle">
                            {t('contact.subtitle')}
                        </p>
                    </motion.div>

                    {/* Información de contacto */}
                    <div className="grid md:grid-cols-3 gap-12 mb-20">
                        {/* Teléfono */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-gray-50 rounded-xl shadow p-8 hover:shadow-md transition flex flex-col items-center"
                        >
                            <Phone className="w-10 h-10 text-[#EF9314] mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                {t('contact.phone.title')}
                            </h3>
                            <p className="text-gray-600">
                                {t('contact.phone.description')}
                                <br />
                                <span className="font-semibold text-gray-800">
                                    {t('contact.phone.number')}
                                </span>
                            </p>
                        </motion.div>

                        {/* Correo */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="group bg-white p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 text-center border border-gray-100 hover:border-orange-200 hover-lift"
                        >
                            <Mail className="w-10 h-10 text-[#EF9314] mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                {t('contact.email.title')}
                            </h3>
                            <p className="text-gray-600">
                                {t('contact.email.description')}
                                <br />
                                <span className="font-semibold text-gray-800">
                                    {t('contact.email.address')}
                                </span>
                            </p>
                        </motion.div>

                        {/* Dirección */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-gray-50 rounded-xl shadow p-8 hover:shadow-md transition flex flex-col items-center"
                        >
                            <MapPin className="w-10 h-10 text-[#EF9314] mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                {t('contact.address.title')}
                            </h3>
                            <p className="text-gray-600">
                                {t('contact.address.description')}
                                <br />
                                <span className="font-semibold text-gray-800">
                                    {t('contact.address.location')}
                                </span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Formulario de contacto */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-gray-50 rounded-2xl shadow-lg p-10 mb-20"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                            <MessageSquare className="text-[#EF9314] w-6 h-6" />
                            {t('contact.form.title')}
                        </h3>
                        <form className="grid gap-6 md:grid-cols-2">
                            <input
                                type="text"
                                placeholder={t('contact.form.name')}
                                className="input-modern"
                            />
                            <input
                                type="email"
                                placeholder={t('contact.form.email')}
                                className="input-modern"
                            />
                            <input
                                type="text"
                                placeholder={t('contact.form.phone')}
                                className="input-modern"
                            />
                            <input
                                type="text"
                                placeholder={t('contact.form.subject')}
                                className="input-modern"
                            />
                            <textarea
                                placeholder={t('contact.form.message')}
                                rows={5}
                                className="input-modern md:col-span-2 resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="btn-primary md:col-span-2 w-full md:w-auto md:mx-auto"
                            >
                                {t('contact.form.submit')}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </button>
                        </form>
                    </motion.div>

                    {/* Mapa o imagen */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="overflow-hidden rounded-2xl shadow-lg"
                    >
                        <iframe
                            title="Ubicación"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5008097494317!2d-99.13320848513974!3d19.432607386886282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92dfdd9a0f9%3A0x36b6f8c53bfc12a7!2sCentro%20Hist%C3%B3rico%2C%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1672523273421!5m2!1ses!2smx"
                            className="w-full h-[400px] border-0"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
}
