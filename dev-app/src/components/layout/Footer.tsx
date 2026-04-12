import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--color-aramar-corp-2)] bg-[var(--color-aramar-base-dark)] py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Enlaces legales o secundarios (Opcional) */}
        <div className="text-[var(--color-aramar-corp-1)] text-sm font-medium space-x-4">
          <Link href="#" className="hover:text-[var(--color-aramar-base-light)] transition-colors">Privacidad</Link>
          <Link href="#" className="hover:text-[var(--color-aramar-base-light)] transition-colors">Términos</Link>
        </div>

        {/* La firma de la División Dev */}
        <div className="text-sm font-medium text-[var(--color-aramar-corp-1)]">
          &copy; {currentYear} Aramar Family. Desarrollado por <span className="font-display font-bold tracking-wide text-[var(--color-aramar-dev-1)]">Aramar.dev</span>
        </div>

      </div>
    </footer>
  );
}