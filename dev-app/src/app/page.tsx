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

              <div className="space-y-6">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-family-3 dark:text-base-light max-w-4xl">
                  Aramar Dev desde el <span className="text-dev-primary">núcleo visual</span> de MD3.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-family-2 dark:text-base-light/75 font-light">
                  Un centro de desarrollo con superficies suaves, movimiento con propósito y paleta orgánica. Diseño mobile-first que se adapta con elegancia a cada pantalla.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-dev-primary px-8 py-3.5 text-sm font-semibold text-base-light shadow-[var(--shadow-soft)] transition-all duration-300 hover:bg-dev-secondary hover:-translate-y-1 hover:shadow-[var(--shadow-strong)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dev-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-base-dark"
                >
                  Acceder al Entorno
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-dev-primary/30 bg-dev-primary/5 px-8 py-3.5 text-sm font-semibold text-dev-primary shadow-sm transition-all duration-300 hover:border-dev-primary hover:bg-dev-primary/10 hover:-translate-y-1 dark:border-dev-primary/40 dark:bg-dev-primary/10 dark:hover:bg-dev-primary/15"
                >
                  Ver características
                </Link>
              </div>
            </div>

            <aside className="rounded-[2.5rem] border border-dev-secondary/20 bg-base-light/40 p-7 shadow-[0_24px_60px_rgba(78,69,140,0.15)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_32px_80px_rgba(78,69,140,0.2)] dark:border-dev-secondary/25 dark:bg-base-dark/20 lg:p-9">
              <div className="space-y-7">
                <div className="rounded-[1.75rem] bg-dev-primary-container/60 px-4 py-3 text-sm font-semibold text-dev-primary shadow-[0_8px_24px_rgba(232,224,255,0.2)]">
                  Diseño orgánico, formas expresivas
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.32em] text-dev-primary opacity-85">Surface tint</p>
                    <p className="mt-2.5 text-base leading-7 text-family-3 dark:text-base-light/90 font-light">
                      Interface con capas suaves, blur ligero y bordes generosos que exportan calma y enfoque.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.32em] text-dev-primary opacity-85">Motion intencional</p>
                    <p className="mt-2.5 text-base leading-7 text-family-3 dark:text-base-light/90 font-light">
                      Transiciones sutiles y estados táctiles que hacen la experiencia más natural y accesible.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <section id="features" className="mt-20 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
                className="group rounded-[2.25rem] border border-dev-secondary/15 bg-base-light/50 p-6 shadow-[0_12px_36px_rgba(78,69,140,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(78,69,140,0.12)] backdrop-blur-sm dark:border-dev-secondary/20 dark:bg-base-dark/30 lg:p-8"
              >
                <div className="inline-flex items-center justify-center rounded-2xl bg-dev-primary/12 px-4 py-2.5 text-sm font-bold text-dev-primary shadow-sm">
                  {item.title}
                </div>
                <p className="mt-5 text-base leading-7 text-family-2 dark:text-base-light/85 font-light">
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
