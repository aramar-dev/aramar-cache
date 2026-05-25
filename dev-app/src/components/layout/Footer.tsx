import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-dev-secondary/10 bg-base-light/95 py-6 mt-auto transition-all duration-300 backdrop-blur-xl dark:border-dev-secondary/15 dark:bg-base-dark/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div className="text-family-2 text-sm font-medium dark:text-base-light">
          &copy; {currentYear} Aramar Family. Desarrollado por <span className="font-display font-bold tracking-wide text-dev-primary">Aramar.dev</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-family-2 text-sm font-medium dark:text-base-light">
          <Link href="#" className="transition hover:text-dev-primary">Privacidad</Link>
          <Link href="#" className="transition hover:text-dev-primary">Términos</Link>
        </div>
      </div>
    </footer>
  );
}
