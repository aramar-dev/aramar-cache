import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="font-display text-8xl font-bold text-dev-secondary dark:text-dev-primary mb-4">
        404
      </h1>
      <h2 className="text-3xl font-bold mb-2 tracking-tight text-family-3 dark:text-base-light">
        Sector no encontrado
      </h2>
      <p className="text-family-2 dark:text-base-light max-w-md mb-8 text-lg">
        La ruta a la que intentas acceder no existe en la infraestructura actual o ha sido reubicada por el equipo de ingeniería.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-dev-primary text-base-light rounded-full font-medium hover:bg-dev-secondary active:scale-95 transition-all shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-base-dark"
      >
        Volver a la Base
      </Link>
    </div>
  );
}