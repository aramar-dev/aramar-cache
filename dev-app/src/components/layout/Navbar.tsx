"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 dark:border-[var(--color-aramar-corp-2)] bg-white dark:bg-[var(--color-aramar-base-dark)] sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
{/* Lado Izquierdo: Logo corporativo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center">
            
            {/* 1A. El Isotipo para Modo Claro */}
            <Image 
              src="/dev_blk.svg" 
              alt="Icono Aramar" 
              width={40} 
              height={40}
              className="w-10 h-10 object-contain block dark:hidden"
            />
            
            {/* 1B. El Isotipo para Modo Oscuro */}
            <Image 
              src="/dev_wht.svg" 
              alt="Icono Aramar" 
              width={40} 
              height={40}
              className="w-10 h-10 object-contain hidden dark:block"
            />

            {/* 2. El Logotipo Dinámico / Experiencia de Usuario Superior */}
            <span className="font-display text-2xl tracking-tight lowercase flex items-center h-10">
              
              {/* LA MAGIA: Contenedor para "aramar" con transición de expansión */}
              <span className="transition-all duration-500 ease-in-out h-full flex items-center overflow-hidden w-0 opacity-0 md:w-auto md:opacity-100 md:mr-1">
                <strong className="text-gray-900 dark:text-white font-bold inline-block">aramar</strong>
              </span>
              
              {/* "dev" -> Siempre visible y limpio */}
              <span className="text-[var(--color-aramar-dev-1)] font-medium flex items-center h-full">dev</span>

            </span>

          </Link>
        </div>
        
        {/* Centro: Navegación de la División */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="text-gray-600 dark:text-[var(--color-aramar-base-light)] hover:text-[var(--color-aramar-dev-1)] dark:hover:text-[var(--color-aramar-dev-1)] transition-colors text-sm font-medium">
            Dashboard
          </Link>
          <Link href="#" className="text-gray-600 dark:text-[var(--color-aramar-base-light)] hover:text-[var(--color-aramar-dev-1)] dark:hover:text-[var(--color-aramar-dev-1)] transition-colors text-sm font-medium">
            Contenedores
          </Link>
          <Link href="#" className="text-gray-600 dark:text-[var(--color-aramar-base-light)] hover:text-[var(--color-aramar-dev-1)] dark:hover:text-[var(--color-aramar-dev-1)] transition-colors text-sm font-medium">
            Documentación
          </Link>
        </nav>

        {/* Lado Derecho: Acciones y Perfil */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex w-9 h-9 rounded-full bg-[var(--color-aramar-dev-2)] items-center justify-center text-sm font-bold shadow-md cursor-pointer hover:bg-[var(--color-aramar-dev-1)] transition text-white">
            A
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-[var(--color-aramar-base-light)] hover:text-[var(--color-aramar-dev-1)] focus:outline-none focus:ring-2 focus:ring-[var(--color-aramar-dev-1)]"
            aria-expanded={isMobileMenuOpen}
            aria-label="Abrir menú principal"
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-[var(--color-aramar-base-dark)] border-b border-gray-200 dark:border-[var(--color-aramar-corp-2)] transition-colors duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-[var(--color-aramar-base-light)] hover:bg-gray-200 dark:hover:bg-[var(--color-aramar-corp-3)] hover:text-[var(--color-aramar-dev-1)] transition-colors">
              Dashboard
            </Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-[var(--color-aramar-base-light)] hover:bg-gray-200 dark:hover:bg-[var(--color-aramar-corp-3)] hover:text-[var(--color-aramar-dev-1)] transition-colors">
              Contenedores
            </Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-[var(--color-aramar-base-light)] hover:bg-gray-200 dark:hover:bg-[var(--color-aramar-corp-3)] hover:text-[var(--color-aramar-dev-1)] transition-colors">
              Documentación
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-[var(--color-aramar-corp-2)]">
            <div className="flex items-center px-5 gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-aramar-dev-2)] flex items-center justify-center text-sm font-bold shadow-md text-white">
                A
              </div>
              <div className="text-base font-medium text-gray-800 dark:text-[var(--color-aramar-base-light)]">
                Perfil del Ingeniero
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}