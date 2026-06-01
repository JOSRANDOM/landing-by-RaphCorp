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
  {
    name: "Gaffe Graphic Studio",
    logo: "/gaffe-logo.png",
    link: "https://www.instagram.com/gaffe_studio11/?utm_source=ig_web_button_share_sheet",
  },
];

export function PartnersSection() {
  return (
    <section className="border-y border-[#0F1C3F] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20">
          <div className="flex-shrink-0">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#7B8FBF] font-mono">/ Partners</p>
            <p className="text-[11px] font-mono text-[#4A5E8A] mt-1">{partners.length} colaboraciones</p>
          </div>
          <div className="flex flex-wrap items-center gap-10 md:gap-14">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.name}
                className="block opacity-25 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <img src={p.logo} alt={p.name} className="h-8 md:h-10 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
