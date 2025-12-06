import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from '../assets/images/logo.png';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../../context/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [openNav, setOpenNav] = useState(false);
  const [openLangDesktop, setOpenLangDesktop] = useState(false);
  const [openLangMobile, setOpenLangMobile] = useState(false);

  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  // 9 especialista
  // 8 pa bajo sessionS
  // 7 directivos
  // Cerrar dropdown desktop si clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopRef.current && !desktopRef.current.contains(event.target as Node)) {
        setOpenLangDesktop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cerrar dropdown mobile si clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(event.target as Node)) {
        setOpenLangMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100">
      <div className="max-w-7xl mx-auto h-[80px] px-6 flex items-center justify-between">
        {/* Left Nav (desktop) */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          <Link to="/" className="hover:text-[#EF9314] transition">{t('header.inicio')}</Link>
          <Link to="/nosotros" className="hover:text-[#EF9314] transition">{t('header.nosotros')}</Link>
          <Link to="/servicios" className="hover:text-[#EF9314] transition">{t('header.servicios')}</Link>
        </nav>

        {/* Logo */}
        <Link to="/" className="flex items-center justify-center">
          <img src={Logo} alt="Logo" className="h-[66px] w-auto object-contain" loading="lazy" />
        </Link>

        {/* Right Nav (desktop) */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-semibold relative">
          <Link to="/proyectos" className="hover:text-[#EF9314] transition">{t('header.proyectos')}</Link>
          <Link to="/contacto" className="hover:text-[#EF9314] transition">{t('header.contacto')}</Link>

          {/* Desktop Language */}
          <div ref={desktopRef} className="relative">
            <button
              onClick={() => {
                setOpenLangDesktop(prev => !prev);
                setOpenNav(false);
              }}
              className="flex items-center space-x-1 hover:text-[#EF9314] transition"
            >
              <GlobeAltIcon className="w-6 h-6" />
              <span>{t('header.idioma')}</span>
            </button>

            <AnimatePresence>
              {openLangDesktop && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg overflow-hidden z-50"
                >
                  <button onClick={() => { setLanguage('es'); setOpenLangDesktop(false); }} className={`block w-full text-left px-4 py-2 hover:bg-gray-100 transition ${language === 'es' ? 'bg-gray-100 font-semibold' : ''}`}>{t('header.espanol')}</button>
                  <button onClick={() => { setLanguage('en'); setOpenLangDesktop(false); }} className={`block w-full text-left px-4 py-2 hover:bg-gray-100 transition ${language === 'en' ? 'bg-gray-100 font-semibold' : ''}`}>{t('header.ingles')}</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex items-center md:hidden space-x-2">
          {/* Mobile Language */}
          <button
            onClick={() => {
              setOpenLangMobile(prev => !prev);
              setOpenNav(false);
            }}
            className="text-gray-800"
          >
            <GlobeAltIcon width={28} height={28} />
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => {
              setOpenNav(prev => !prev);
              setOpenLangMobile(false);
            }}
            className="text-gray-800"
          >
            {openNav ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Language Menu */}
      <AnimatePresence>
        {openLangMobile && (
          <motion.div
            ref={mobileRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-sm"
          >
            <nav className="flex flex-col p-4 space-y-3 text-gray-800 font-semibold">
              <button onClick={() => { setLanguage('es'); setOpenLangMobile(false); }} className={`text-left ${language === 'es' ? 'text-[#EF9314]' : ''}`}>{t('header.espanol')}</button>
              <button onClick={() => { setLanguage('en'); setOpenLangMobile(false); }} className={`text-left ${language === 'en' ? 'text-[#EF9314]' : ''}`}>{t('header.ingles')}</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-sm"
          >
            <nav className="flex flex-col p-4 space-y-3 text-gray-800 font-semibold">
              <Link to="/" onClick={() => setOpenNav(false)}>{t('header.inicio')}</Link>
              <Link to="/nosotros" onClick={() => setOpenNav(false)}>{t('header.nosotros')}</Link>
              <Link to="/servicios" onClick={() => setOpenNav(false)}>{t('header.servicios')}</Link>
              <Link to="/proyectos" onClick={() => setOpenNav(false)}>{t('header.proyectos')}</Link>
              <Link to="/contacto" onClick={() => setOpenNav(false)}>{t('header.contacto')}</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
