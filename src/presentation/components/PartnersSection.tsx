const partners = [
  {
    name: "HNP Academy",
    logo: "/hnp-academy-logo.png",
    link: "https://hnp.academy",
  },
  {
    name: "Jesus Torres - Personal Trainer",
    logo: "/jt-logo.jpg",
    link: "https://julio-trainer.netlify.app",
  },
];

export function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-3">
            Colaboraciones
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Marcas Asociadas
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Trabajamos junto a empresas y profesionales que confian en nuestras soluciones tecnologicas
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center p-4 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0">
                {partner.link ? (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${partner.name}`}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </a>
                ) : (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <span className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
