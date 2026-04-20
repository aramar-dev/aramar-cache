import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-family-2 bg-base-light dark:bg-base-dark py-6 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Enlaces legales o secundarios */}
        <div className="text-family-2 dark:text-base-light text-sm font-medium space-x-4">
          <Link href="#" className="hover:text-dev-primary transition-colors">Privacidad</Link>
          <Link href="#" className="hover:text-dev-primary transition-colors">Términos</Link>
        </div>

        {/* La firma de la División Dev */}
        <div className="text-sm font-medium text-family-2 dark:text-base-light">
          &copy; {currentYear} Aramar Family. Desarrollado por <span className="font-display font-bold tracking-wide text-dev-primary">Aramar.dev</span>
        </div>

      </div>
    </footer>
  );
}