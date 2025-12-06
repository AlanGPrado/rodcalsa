import { useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function NuestroPlus() {
  const { t } = useLanguage();
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
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-mesh overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Título */}
        <div className="section-header">
          <div className="decorative-line"></div>
          <h2 className="section-title">
            {t('ourPlus.title')} <span className="text-gradient">{t('ourPlus.titleHighlight')}</span>
          </h2>
          <p className="section-subtitle">
            {t('ourPlus.subtitle')}
          </p>
        </div>

        {/* Lista de Plus */}
        <div className="space-y-8">
          {(t('ourPlus.items') as string[]).map((item: string, idx: number) => (
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
