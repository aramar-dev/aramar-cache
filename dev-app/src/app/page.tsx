export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      {/* Usamos Century Gothic y tu color base */}
      <h1 className="font-display text-5xl font-bold mb-2">
        aramar<span className="text-[var(--color-aramar-dev-1)]"> dev</span>
      </h1>

      {/* Usamos Inter (por defecto) */}
      <p className="text-xl text-[var(--color-aramar-corp-1)] mb-8 max-w-2xl text-center">
        Infraestructura, despliegue y desarrollo de tecnologías.
      </p>

      {/* Botón MD3 con colores Dev */}
      <button className="px-6 py-3 bg-[var(--color-aramar-dev-1)] text-[var(--color-aramar-base-light)] rounded-full font-medium hover:bg-[var(--color-aramar-dev-2)] transition-colors shadow-lg cursor-pointer">
        Acceder al Entorno
      </button>
    </main>
  );
}
