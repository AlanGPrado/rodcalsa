import { motion } from "framer-motion";
import { Layers, Building2, Home, ArrowRight } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import houseForSale from "../../assets/images/house-for-sale.png";
import rodcalGroupLogo from "../../assets/images/rodcal_group_logo.jpg";

export default function RotcalGroupSection() {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-24 mb-24 max-w-7xl mx-auto px-6 lg:px-12"
        >
            <div className="flex flex-col lg:flex-row items-start gap-16 relative">
                {/* Background accent - repositioned for new layout */}
                <div className="absolute top-10 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40 -z-10"></div>

                {/* Visual Structure Card (Now on Left/Top for nicer flow or kept Right but enhanced) -> Let's keep Right but make it pop */}

                <div className="flex-1 space-y-8 relative z-10 lg:sticky lg:top-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-[#EF9314] text-sm font-semibold tracking-wide border border-orange-100/50">
                        <Layers className="w-4 h-4" />
                        <span>Rodcal Group</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                        {t('about.rodcalGroup.title')}
                    </h2>
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        <p>{t('about.rodcalGroup.description')}</p>
                        <p>{t('about.rodcalGroup.description2')}</p>

                    </div>
                </div>

                <div className="flex-1 w-full relative z-10">
                    <div className="relative">
                        {/* Connection Lines Enhancement */}
                        <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-gray-200 via-orange-200 to-gray-200"></div>

                        <div className="space-y-8">
                            {/* Group Node */}
                            <div className="flex items-center gap-6 relative">
                                <div className="bg-white p-0 rounded-3xl shadow-xl shadow-gray-200 z-10 ring-4 ring-white w-20 h-20 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={rodcalGroupLogo}
                                        alt="Rodcal Group Logo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="font-bold text-gray-900 text-2xl tracking-tight">
                                    {t('about.rodcalGroup.structure.group')}
                                </span>
                            </div>

                            {/* Branch 1: Projects (Enhanced with Image) */}
                            <div className="relative pl-10 group">
                                <div className="bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-orange-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        {/* Mini Image */}
                                        <div className="w-full sm:w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden relative shadow-md">
                                            <img
                                                src={houseForSale}
                                                alt="Modern House For Sale"
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                            <div className="absolute bottom-2 right-2 bg-white/90 p-1.5 rounded-lg text-[#EF9314] backdrop-blur-sm">
                                                <Building2 className="w-4 h-4" />
                                            </div>
                                        </div>

                                        <div className="flex-1 py-1">
                                            <h4 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                                                {t('about.rodcalGroup.structure.projects.title')}
                                            </h4>
                                            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                                                {t('about.rodcalGroup.structure.projects.desc')}
                                            </p>
                                            <a href="https://www.rodcalgroup.mx/" target="_blank" className="inline-flex items-center text-sm font-bold text-[#EF9314] hover:text-orange-600 transition-colors">
                                                {t('about.rodcalGroup.structure.projects.cta')}
                                                <ArrowRight className="w-4 h-4 ml-1.5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Branch 2: Real Estate */}
                            <div className="relative pl-10">
                                <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5 hover:bg-gray-50 transition-colors">
                                    <div className="bg-orange-50 p-3 rounded-2xl text-[#EF9314]">
                                        <Home className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg leading-tight">
                                            {t('about.rodcalGroup.structure.realEstate.title')}
                                        </h4>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {t('about.rodcalGroup.structure.realEstate.desc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full mt-12 mb-6 pointer-events-none relative z-10">
                <div className="max-w-2xl bg-white rounded-2xl border-l-4 border-[#EF9314] shadow-sm px-8 py-6 pointer-events-auto">
                    <p className="font-medium text-gray-800 italic text-left text-lg">
                        "{t('about.rodcalGroup.description3')}"
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
