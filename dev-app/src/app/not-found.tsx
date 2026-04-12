import Link from "next/link";

export default function NotFound() { // <-- ¡Esta línea es la que Next.js no está encontrando!
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="font-display text-8xl font-bold text-[var(--color-aramar-corp-2)] mb-4">
        404
      </h1>
      <h2 className="text-3xl font-bold mb-2 tracking-tight">
        Sector no encontrado
      </h2>
      <p className="text-[var(--color-aramar-corp-1)] max-w-md mb-8 text-lg">
        La ruta a la que intentas acceder no existe en la infraestructura actual o ha sido reubicada por el equipo de ingeniería.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-[var(--color-aramar-dev-1)] text-[var(--color-aramar-base-light)] rounded-full font-medium hover:bg-[var(--color-aramar-dev-2)] transition-colors shadow-lg cursor-pointer"
      >
        Volver a la Base
      </Link>
    </div>
  );
}