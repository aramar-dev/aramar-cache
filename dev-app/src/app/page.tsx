import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-base-light dark:bg-base-dark transition-colors duration-300">
      <section className="relative isolate px-4 py-14 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-dev-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-dev-secondary/15 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full border border-dev-primary/20 bg-dev-primary-container/70 px-4 py-1 text-sm font-medium text-dev-primary shadow-sm">
                MD3 Expressive · Adaptivo · Pulido
              </span>

              <div className="space-y-5">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-family-3 dark:text-base-light max-w-3xl">
                  Aramar Dev desde el núcleo visual de MD3.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-family-2 dark:text-base-light/80">
                  Un centro de desarrollo con superficies suaves, movimiento con propósito y paleta orgánica. Diseño mobile-first que se adapta con elegancia a cada pantalla.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-dev-primary px-6 py-3 text-sm font-medium text-base-light shadow-[var(--shadow-soft)] transition-all duration-300 hover:bg-dev-secondary hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dev-primary focus-visible:ring-offset-2"
                >
                  Acceder al Entorno
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-dev-secondary/20 bg-transparent px-6 py-3 text-sm font-medium text-family-3 dark:text-base-light shadow-sm transition-all duration-300 hover:border-dev-primary hover:text-dev-primary"
                >
                  Ver características
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-dev-secondary/10 bg-base-light/90 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl transition-all duration-300 dark:border-dev-secondary/15 dark:bg-surface-card lg:p-8">
              <div className="space-y-6">
                <div className="rounded-[1.75rem] bg-dev-primary-container/80 px-4 py-3 text-sm font-semibold text-dev-primary shadow-sm">
                  Diseño orgánico, formas expresivas
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-family-2">Surface tint</p>
                    <p className="mt-2 text-base leading-7 text-family-3 dark:text-base-light/85">
                      Interface con capas suaves, blur ligero y bordes generosos que exportan calma y enfoque.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-family-2">Motion intencional</p>
                    <p className="mt-2 text-base leading-7 text-family-3 dark:text-base-light/85">
                      Transiciones sutiles y estados táctiles que hacen la experiencia más natural y accesible.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <section id="features" className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Dashboard",
                description: "Monitoreo central, tarjetas de estado y controles rápidos con un estilo limpio y adaptable.",
              },
              {
                title: "Contenedores",
                description: "Ecosistema de despliegue con capas suaves, contenedores visuales y una navegación modular.",
              },
              {
                title: "Documentación",
                description: "Información contextual y accesible, con jerarquía tipográfica clara y espacios respirables.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-[2rem] border border-base-light/70 bg-base-light/85 p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-strong)] dark:border-base-light/10 dark:bg-surface-card"
              >
                <div className="inline-flex items-center justify-center rounded-2xl bg-dev-primary/10 px-3 py-2 text-sm font-semibold text-dev-primary">
                  {item.title}
                </div>
                <p className="mt-4 text-base leading-7 text-family-2 dark:text-base-light/80">
                  {item.description}
                </p>
              </article>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
