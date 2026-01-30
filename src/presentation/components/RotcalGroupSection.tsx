import { motion } from "framer-motion";
import { Layers, Building2, Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function RotcalGroupSection() {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-24 mb-24 max-w-6xl mx-auto px-6 lg:px-12"
        >
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-60 -mr-20 -mt-20"></div>

                <div className="flex-1 space-y-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/50 text-[#EF9314] text-sm font-medium">
                        <Layers className="w-4 h-4" />
                        <span>Rodcal Group</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {t('about.rodcalGroup.title')}
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>{t('about.rodcalGroup.description')}</p>
                        <p>{t('about.rodcalGroup.description2')}</p>
                        <p className="font-medium text-gray-800 pt-2 border-t border-gray-200">
                            {t('about.rodcalGroup.description3')}
                        </p>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-md relative z-10">
                    <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8 border border-gray-100 relative">
                        {/* Connection Line */}
                        <div className="absolute left-10 top-16 bottom-16 w-0.5 bg-gray-100"></div>

                        {/* Group */}
                        <div className="relative">
                            <div className="flex items-center gap-4">
                                <div className="bg-gray-900 p-3 rounded-xl text-white shadow-lg shadow-gray-200 relative z-10">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <span className="font-bold text-gray-900 text-xl">
                                    {t('about.rodcalGroup.structure.group')}
                                </span>
                            </div>
                        </div>

                        {/* Branch 1 */}
                        <div className="relative pl-2 group">
                            <div className="flex items-start gap-4">
                                <div className="relative z-10 bg-white p-1">
                                    <div className="p-2 rounded-lg bg-orange-50 text-[#EF9314]">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 leading-tight">
                                        {t('about.rodcalGroup.structure.projects.title')}
                                    </h4>
                                    <p className="text-sm text-gray-500 mt-2 mb-2 leading-relaxed">
                                        {t('about.rodcalGroup.structure.projects.desc')}
                                    </p>
                                    <a href="https://www.rodcalgroup.mx/" target="_blank" className="inline-flex items-center text-sm text-[#EF9314] font-semibold hover:text-orange-600 transition-colors group/link">
                                        {t('about.rodcalGroup.structure.projects.cta')}
                                        <ArrowRight className="w-3 h-3 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Branch 2 */}
                        <div className="relative pl-2">
                            <div className="flex items-start gap-4">
                                <div className="relative z-10 bg-white p-1">
                                    <div className="p-2 rounded-lg bg-orange-50 text-[#EF9314]">
                                        <Home className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 leading-tight">
                                        {t('about.rodcalGroup.structure.realEstate.title')}
                                    </h4>
                                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                        {t('about.rodcalGroup.structure.realEstate.desc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
