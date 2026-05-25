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
    return <div className="w-10 h-10 rounded-full" aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-surface-card-soft text-dev-primary shadow-[var(--shadow-soft)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-strong)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-primary focus-visible:ring-offset-2 dark:bg-surface-card dark:text-base-light"
    >
      <div className="relative flex h-5 w-5 items-center justify-center">
        <Sun
          className={`absolute transition-all duration-300 ease-in-out ${
            isDark ? "opacity-0 scale-75" : "opacity-100 scale-100"
          }`}
          size={20}
          aria-hidden="true"
        />
        <Moon
          className={`absolute transition-all duration-300 ease-in-out ${
            isDark ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          size={20}
          aria-hidden="true"
        />
      </div>
    </button>
  );
}
