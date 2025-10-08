import { useEffect, useRef } from "react";

export default function NuestroPlus() {
  const plusItems = [
    "Importadores 100% → mejores precios.",
    "Instalación garantizada por personal especializado.",
    "Materiales exclusivos y modernos.",
    "Soluciones tanto para clientes residenciales como comerciales e industriales.",
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const elements = section?.querySelectorAll(".animate-on-scroll");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("opacity-100", "translate-y-0", "scale-100");
            el.classList.remove("opacity-0", "translate-y-8", "scale-95");
            obs.unobserve(entry.target); // se anima una sola vez, igual que viewport.once
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Título */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 scale-95 text-center mb-16 
          transition-all duration-[600ms] ease-out"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Nuestro <span className="text-[#EF9314]">Plus</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Lo que nos diferencia y hace únicos frente a la competencia.
          </p>
        </div>

        {/* Lista de Plus */}
        <div className="space-y-8">
          {plusItems.map((item, idx) => (
            <div
              key={idx}
              className={`animate-on-scroll opacity-0 translate-y-8 scale-95 
              flex items-start gap-4 bg-gray-50 rounded-xl p-6 shadow-md 
              hover:shadow-lg transition-all duration-[500ms] ease-out transform-gpu`}
              style={{
                willChange: "transform, opacity",
                transitionDelay: `${idx * 150}ms`,
              }}
            >
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                <span className="block w-full h-full bg-[#EF9314] rounded-full"></span>
              </div>
              <p className="text-gray-700 text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
