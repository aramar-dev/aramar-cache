export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      {/* Usamos Century Gothic y colores dev */}
      <h1 className="font-display text-5xl font-bold mb-2 text-family-3 dark:text-base-light">
        aramar<span className="text-dev-primary"> dev</span>
      </h1>

      {/* Usamos Inter (por defecto) */}
      <p className="text-xl text-family-2 dark:text-base-light mb-8 max-w-2xl text-center">
        Infraestructura, despliegue y desarrollo de tecnologías.
      </p>

      {/* Botón MD3 con colores Dev */}
      <button className="px-6 py-3 bg-dev-primary text-base-light rounded-full font-medium hover:bg-dev-secondary active:scale-95 transition-all shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-base-dark">
        Acceder al Entorno
      </button>
    </main>
  );
}
