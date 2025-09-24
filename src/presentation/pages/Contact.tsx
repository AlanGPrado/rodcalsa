import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main key={window.location.pathname}>
            <Header></Header>
            <section className="py-20 bg-white" id="contacto">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    {/* Título */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                            Contáctanos
                        </h2>
                        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                            En <span className="text-[#EF9314] font-semibold">Rocalsa</span>
                            &nbsp;creemos en la comunicación directa con nuestros clientes.
                            Ya sea que necesites una cotización, agendar una visita a obra o simplemente resolver una duda, estamos disponibles para atenderte en todo momento.
                        </p>
                    </motion.div>

                    {/* Información de contacto */}
                    <div className="grid md:grid-cols-3 gap-12 mb-20">
                        {/* Teléfono */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-xl shadow p-8 hover:shadow-md transition flex flex-col items-center"
                        >
                            <Phone className="w-10 h-10 text-[#EF9314] mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                Teléfono / WhatsApp
                            </h3>
                            <p className="text-gray-600">
                                Llámanos o mándanos un mensaje directamente a nuestro WhatsApp.
                                <br />
                                <span className="font-semibold text-gray-800">
                                    +52 55 1234 5678
                                </span>
                            </p>
                        </motion.div>

                        {/* Correo */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-xl shadow p-8 hover:shadow-md transition flex flex-col items-center"
                        >
                            <Mail className="w-10 h-10 text-[#EF9314] mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                Correo electrónico
                            </h3>
                            <p className="text-gray-600">
                                Escríbenos para cotizaciones, dudas o seguimiento de proyectos.
                                <br />
                                <span className="font-semibold text-gray-800">
                                    contacto@rocalsa.com
                                </span>
                            </p>
                        </motion.div>

                        {/* Dirección */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-xl shadow p-8 hover:shadow-md transition flex flex-col items-center"
                        >
                            <MapPin className="w-10 h-10 text-[#EF9314] mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                Dirección
                            </h3>
                            <p className="text-gray-600">
                                Visítanos en nuestra oficina para atención personalizada:
                                <br />
                                <span className="font-semibold text-gray-800">
                                    Av. Ejemplo 123, Col. Centro, CDMX
                                </span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Formulario de contacto */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-2xl shadow-lg p-10 mb-20"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                            <MessageSquare className="text-[#EF9314] w-6 h-6" />
                            Envíanos un mensaje
                        </h3>
                        <form className="grid gap-6 md:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Nombre completo"
                                className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF9314] outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF9314] outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Teléfono (opcional)"
                                className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF9314] outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Asunto"
                                className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF9314] outline-none"
                            />
                            <textarea
                                placeholder="Escribe tu mensaje..."
                                rows={5}
                                className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF9314] outline-none md:col-span-2"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-[#EF9314] hover:bg-[#d77e0d] text-white px-8 py-4 rounded-lg font-semibold shadow-md transition-colors duration-300 md:col-span-2 w-[50%] m-auto"
                            >
                                Enviar mensaje
                            </button>
                        </form>
                    </motion.div>

                    {/* Mapa o imagen */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
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
