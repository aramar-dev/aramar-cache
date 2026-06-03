"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dev-secondary/10 bg-base-light/95 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-dev-secondary/15 dark:bg-base-dark/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="group flex items-center gap-2.5 rounded-full px-1.5 py-1.5 transition-all hover:bg-dev-primary/8 dark:hover:bg-dev-primary/12">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-[1.375rem] bg-surface-card shadow-[0_4px_16px_rgba(78,69,140,0.12)] transition-all group-hover:shadow-[0_6px_24px_rgba(78,69,140,0.16)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
              <Image src="/dev_blk.svg" alt="Icono Aramar" width={44} height={44} className="h-10 w-10 block dark:hidden" />
              <Image src="/dev_wht.svg" alt="Icono Aramar" width={44} height={44} className="h-10 w-10 hidden dark:block" />
            </div>
            <span className="font-display text-[1.625rem] font-medium tracking-tight lowercase flex items-center h-11 whitespace-nowrap">
              <span className="transition-all duration-500 ease-in-out h-full flex items-center overflow-hidden w-0 opacity-0 md:w-auto md:opacity-100 md:mr-0.5">
                <strong className="text-family-3 dark:text-base-light font-bold inline-block">aramar</strong>
              </span>
              <span className="text-dev-primary font-semibold flex items-center h-full">dev</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { label: "Dashboard", href: "#" },
            { label: "Contenedores", href: "#" },
            { label: "Documentación", href: "#" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-family-2 transition-colors duration-200 hover:text-dev-primary dark:text-base-light dark:hover:text-dev-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-dev-secondary text-base-light shadow-md transition hover:bg-dev-primary">
            A
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-lg p-2 text-family-2 transition hover:text-dev-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-primary focus-visible:ring-offset-2 dark:text-base-light"
            aria-expanded={isMobileMenuOpen}
            aria-label="Abrir menú principal"
            aria-controls="mobile-menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-dev-secondary/10 bg-base-light/95 px-4 pb-4 pt-3 backdrop-blur-xl transition duration-300 dark:border-dev-secondary/15 dark:bg-base-dark/90">
          <div className="space-y-1">
            {[
              { label: "Dashboard", href: "#" },
              { label: "Contenedores", href: "#" },
              { label: "Documentación", href: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-2xl px-3 py-2 text-base font-medium text-family-2 transition hover:bg-dev-primary/10 hover:text-dev-primary dark:text-base-light dark:hover:bg-dev-primary/15"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 border-t border-dev-secondary/10 pt-4 dark:border-dev-secondary/15">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dev-secondary text-base-light shadow-md">A</div>
              <div className="text-base font-medium text-family-3 dark:text-base-light">Perfil del Ingeniero</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
