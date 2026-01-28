"use client";

const founders = [
  {
    name: "Felipe Montenegro",
    role: "Technology Manager",
    initials: "FM",
    message:
      "La innovacion es nuestra esencia. Creamos soluciones tecnologicas que transforman ideas en realidad.",
    linkedin: "https://www.linkedin.com/in/felipe-rafael-montenegro-morriberon-a79a341b2/",
    instagram: "https://www.instagram.com/felipe_rmm/",
  },
  {
    name: "Nicole Lescano",
    role: "Finance Manager",
    initials: "NL",
    message:
      "Construimos relaciones de confianza con nuestros clientes, asegurando transparencia y solidez financiera en cada proyecto.",
    linkedin: "https://www.linkedin.com/in/nicole-gonzales-lescano-007/",
    instagram: "https://www.instagram.com/nicole.lescn/",
  },
  {
    name: "Uzhiely Cruz",
    role: "Product Manager",
    initials: "UC",
    message:
      "Transformamos las necesidades de nuestros clientes en productos que generan valor y superan expectativas.",
    linkedin: "https://www.linkedin.com/in/uzhiely1824/",
    instagram: null,
  },
  {
    name: "Joseph Mori",
    role: "Founding Partner",
    initials: "JM",
    message:
      "Nuestro compromiso es impulsar el exito de cada cliente con soluciones que marcan la diferencia.",
    linkedin: "https://www.linkedin.com/in/joseph-mori-herrera-007139272/",
    instagram: "https://www.instagram.com/joseph_mori_herrera/",
  },
];

const FounderCard = ({ founder }: { founder: (typeof founders)[0] }) => (
  <div className="flex-shrink-0">
    <div className="bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300 p-4 md:p-6 flex flex-col items-center w-[180px] md:w-64 lg:w-72 h-[260px] md:h-80 lg:h-96 rounded-xl md:rounded-2xl">
      {/* Avatar */}
      <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center mb-2 md:mb-4 shadow-lg flex-shrink-0">
        <span className="text-lg md:text-2xl font-bold text-white dark:text-zinc-900">
          {founder.initials}
        </span>
      </div>

      {/* Name and role */}
      <h4 className="font-semibold text-zinc-900 dark:text-white text-center flex-shrink-0 text-xs md:text-base">
        {founder.name}
      </h4>
      <p className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 mb-2 md:mb-3 flex-shrink-0">
        {founder.role}
      </p>

      {/* Message */}
      <p className="text-zinc-600 dark:text-zinc-400 text-[11px] md:text-sm text-center italic flex-1 overflow-hidden leading-relaxed">
        "{founder.message}"
      </p>

      {/* Social icons */}
      <div className="flex justify-center gap-3 md:gap-4 mt-2 md:mt-4 flex-shrink-0">
        {founder.linkedin && (
          <a
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${founder.name}`}
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
        {founder.instagram && (
          <a
            href={founder.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${founder.name}`}
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  </div>
);

export function FoundersSection() {
  return (
    <div className="mt-10 md:mt-16 w-full">
      <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mb-6 md:mb-10 text-center px-4">
        Conoce a nuestro equipo
      </h3>

      {/* Mobile: scroll horizontal */}
      <div className="md:hidden overflow-x-auto pb-4 -webkit-overflow-scrolling-touch">
        <div className="flex gap-3 px-4" style={{ width: "max-content" }}>
          {founders.map((founder, index) => (
            <FounderCard key={index} founder={founder} />
          ))}
        </div>
      </div>

      {/* Desktop: carousel animado */}
      <div className="hidden md:block overflow-hidden">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex gap-6 animate-scroll" style={{ width: "max-content" }}>
          {founders.map((founder, index) => (
            <FounderCard key={`original-${index}`} founder={founder} />
          ))}
          {founders.map((founder, index) => (
            <FounderCard key={`duplicate-${index}`} founder={founder} />
          ))}
        </div>
      </div>
    </div>
  );
}
