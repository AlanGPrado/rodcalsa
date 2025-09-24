import { motion } from "framer-motion";

export default function NuestroPlus() {
  const plusItems = [
    "Importadores 100% → mejores precios.",
    "Instalación garantizada por personal especializado.",
    "Materiales exclusivos y modernos.",
    "Soluciones tanto para clientes residenciales como comerciales e industriales.",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Título */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Nuestro <span className="text-[#EF9314]">Plus</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Lo que nos diferencia y hace únicos frente a la competencia.
          </p>
        </motion.div>

        {/* Lista de Plus */}
        <div className="space-y-8">
          {plusItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                <span className="block w-full h-full bg-[#EF9314] rounded-full"></span>
              </div>
              <p className="text-gray-700 text-lg font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
