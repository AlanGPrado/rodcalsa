import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from '../assets/images/logo.png';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [openLang, setOpenLang] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    // Cerrar dropdown si se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                setOpenLang(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto h-[80px] px-6 flex items-center justify-between">
                {/* Left Nav (desktop) */}
                <nav className="hidden md:flex space-x-8 text-gray-800 font-semibold">
                    <Link to="/" className="hover:text-[#EF9314] transition">
                        Inicio
                    </Link>
                    <Link to="/nosotros" className="hover:text-[#EF9314] transition">
                        Nosotros
                    </Link>
                    <Link to="/servicios" className="hover:text-[#EF9314] transition">
                        Servicios
                    </Link>
                </nav>

                {/* Logo */}
                <Link to="/" className="flex items-center justify-center">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-[66px] w-auto object-contain"
                    />
                </Link>

                {/* Right Nav (desktop) */}
                <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-semibold relative">
                    <Link to="/proyectos" className="hover:text-[#EF9314] transition">
                        Proyectos
                    </Link>
                    <Link to="/contacto" className="hover:text-[#EF9314] transition">
                        Contacto
                    </Link>

                    {/* Icono de lenguaje */}
                    <div ref={langRef} className="relative">
                        <button
                            onClick={() => setOpenLang(!openLang)}
                            className="flex items-center space-x-1 hover:text-[#EF9314] transition"
                        >
                            <GlobeAltIcon className="w-6 h-6" />
                            <span>Idioma</span>
                        </button>

                        {/* Dropdown */}
                        <AnimatePresence>
                            {openLang && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg overflow-hidden z-50"
                                >
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 hover:bg-gray-100 transition"
                                        onClick={() => setOpenLang(false)}
                                    >
                                        Español
                                    </Link>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 hover:bg-gray-100 transition"
                                        onClick={() => setOpenLang(false)}
                                    >
                                        Inglés
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-800"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
                    <nav className="flex flex-col p-4 space-y-3 text-gray-800 font-semibold">
                        <a href="/inicio" onClick={() => setOpen(false)}>Inicio</a>
                        <a href="/nosotros" onClick={() => setOpen(false)}>Nosotros</a>
                        <a href="/servicios" onClick={() => setOpen(false)}>Servicios</a>
                        <a href="/proyectos" onClick={() => setOpen(false)}>Proyectos</a>
                        <a href="/contacto" onClick={() => setOpen(false)}>Contacto</a>
                    </nav>
                </div>
            )}
        </header>
    );
}
