import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from '../assets/images/logo.png';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [openLangDesktop, setOpenLangDesktop] = useState(false);
  const [openLangMobile, setOpenLangMobile] = useState(false);

  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto h-[80px] px-6 flex items-center justify-between">
        {/* Left Nav (desktop) */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          <Link to="/" className="hover:text-[#EF9314] transition">Inicio</Link>
          <Link to="/nosotros" className="hover:text-[#EF9314] transition">Nosotros</Link>
          <Link to="/servicios" className="hover:text-[#EF9314] transition">Servicios</Link>
        </nav>

        {/* Logo */}
        <Link to="/" className="flex items-center justify-center">
          <img src={Logo} alt="Logo" className="h-[66px] w-auto object-contain" />
        </Link>

        {/* Right Nav (desktop) */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-semibold relative">
          <Link to="/proyectos" className="hover:text-[#EF9314] transition">Proyectos</Link>
          <Link to="/contacto" className="hover:text-[#EF9314] transition">Contacto</Link>

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
              <span>Idioma</span>
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
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100 transition">Español</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100 transition">Inglés</Link>
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
              <Link to="#" onClick={() => setOpenLangMobile(false)}>Español</Link>
              <Link to="#" onClick={() => setOpenLangMobile(false)}>Inglés</Link>
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
              <Link to="/" onClick={() => setOpenNav(false)}>Inicio</Link>
              <Link to="/nosotros" onClick={() => setOpenNav(false)}>Nosotros</Link>
              <Link to="/servicios" onClick={() => setOpenNav(false)}>Servicios</Link>
              <Link to="/proyectos" onClick={() => setOpenNav(false)}>Proyectos</Link>
              <Link to="/contacto" onClick={() => setOpenNav(false)}>Contacto</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
