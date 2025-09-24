import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Newsletter */}
        <div className="space-y-4">
          <Link to='/'>
            <img
              src={Logo}
              alt="Logo"
              className="max-w-[100px] w-full h-auto object-contain"
            />
          </Link>
          <p className="text-sm text-gray-600">
            Certificados en el Sistema de Gestión Integral
          </p>
        </div>

        {/* Nosotros menu */}
        <div>
          <p className="font-semibold mb-3">Nosotros</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link to="/contacto" className="hover:text-[#EF9314] transition">
                Contáctanos
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-[#EF9314] transition">
                Servicios
              </a>
            </li>
            <li>
              <Link to="/proyectos" className="hover:text-[#EF9314] transition">
                Proyectos
              </Link>
            </li>
          </ul>
        </div>

        {/* Información menu */}
        <div>
          <p className="font-semibold mb-3">Información</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:text-[#EF9314] transition">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EF9314] transition">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EF9314] transition">
                Certificaciones
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()}, Rocalsa SA de CV.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">
              Política de privacidad
            </a>
            <a href="#" className="hover:underline">
              Términos y condiciones
            </a>
            <a href="#" className="hover:underline">
              Certificaciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
