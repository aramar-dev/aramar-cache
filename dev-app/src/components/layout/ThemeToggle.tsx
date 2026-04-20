"use client";

import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Patrón necesario para prevenir hidratación mismatch con next-themes
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Retornamos un botón inactivo de la misma dimensión para evitar Cumulative Layout Shift (CLS)
    return <div className="w-10 h-10 rounded-full" aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative flex items-center justify-center
        w-10 h-10 rounded-full
        transition-all duration-300 ease-in-out
        bg-[#F2F2F2] dark:bg-[#262626]
        text-[#4E458C] dark:text-[#F2F2F2]
        hover:shadow-md dark:hover:shadow-md
        active:scale-90
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4E458C] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#262626]
      "
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Usamos un wrapper con transición de opacidad y escala para un cambio suave entre iconos */}
        <Sun 
          className={`absolute transition-all duration-300 ease-in-out ${
            isDark ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"
          }`} 
          size={20} 
          aria-hidden="true"
        />
        <Moon 
          className={`absolute transition-all duration-300 ease-in-out ${
            isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"
          }`} 
          size={20} 
          aria-hidden="true"
        />
      </div>
    </button>
  );
}
