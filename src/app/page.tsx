import Image from "next/image";
import {
  Navbar,
  ServiceCard,
  Footer,
  ContactForm,
  MaintenancePage,
  PartnersSection,
  FoundersSection,
  TechStack,
} from "@/presentation/components";
import { env } from "@/config/env";

const services = [
  {
    title: "Consultoría",
    description: "Asesoría técnica para tu proyecto",
    details: [
      "Arquitectura de software",
      "Mejores prácticas de desarrollo",
      "Optimización de rendimiento",
      "Seguridad y escalabilidad",
    ],
  },
  {
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y escalables",
    details: [
      "Frontend con React y Next.js",
      "Backend con Node.js y NestJS",
      "Bases de datos SQL y NoSQL",
      "Despliegue en la nube",
    ],
  },
  {
    title: "Integraciones",
    description: "Conectamos tus sistemas y servicios",
    details: [
      "APIs RESTful y GraphQL",
      "Pasarelas de pago",
      "Servicios de terceros",
      "Automatización de procesos",
    ],
  },
];

export default function Home() {
  if (env.maintenanceMode) return <MaintenancePage />;

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ──────────────────────────────────────────── */}
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
          {/* Geometric decorations */}
          <div className="absolute inset-0 pointer-events-none select-none">
            {/* Concentric circles — rotates slowly */}
            <svg
              className="absolute top-1/2 -translate-y-1/2 right-[-8%] w-[480px] h-[480px] lg:w-[680px] lg:h-[680px] opacity-[0.06] animate-rotate-slow"
              viewBox="0 0 680 680"
            >
              <circle cx="340" cy="340" r="320" stroke="#5B8DFF" strokeWidth="1" fill="none" />
              <circle cx="340" cy="340" r="240" stroke="white" strokeWidth="0.6" fill="none" />
              <circle cx="340" cy="340" r="160" stroke="white" strokeWidth="0.6" fill="none" />
              <circle cx="340" cy="340" r="80"  stroke="white" strokeWidth="0.6" fill="none" />
              <line x1="20"  y1="340" x2="660" y2="340" stroke="white" strokeWidth="0.5" />
              <line x1="340" y1="20"  x2="340" y2="660" stroke="white" strokeWidth="0.5" />
              <line x1="114" y1="114" x2="566" y2="566" stroke="white" strokeWidth="0.3" />
              <line x1="566" y1="114" x2="114" y2="566" stroke="white" strokeWidth="0.3" />
            </svg>
            {/* Dot grid — bottom left */}
            <div
              className="absolute bottom-0 left-0 w-56 h-56 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* Subtle vertical divider */}
            <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-[#0F1C3F] to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-24 relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 border border-[#0F1C3F] px-4 py-2 mb-12">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B8DFF] animate-dot-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7B8FBF]">
                Software · Tecnología · Innovación
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="font-black text-white leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(50px, 9.5vw, 130px)" }}
            >
              Construimos
              <br />
              el futuro
              <br />
              <span style={{ color: "#5B8DFF" }}>digital.</span>
            </h1>

            {/* Description + CTA */}
            <div className="mt-14 flex flex-col sm:flex-row items-start gap-8 sm:gap-16">
              <p className="text-[13px] font-mono text-[#7B8FBF] max-w-[200px] leading-relaxed">
                Soluciones tecnológicas a medida para impulsar el crecimiento de tu negocio.
              </p>
              <a
                href="#contacto"
                className="flex items-center gap-4 bg-[#5B8DFF] text-[#04091C] px-8 py-4 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 whitespace-nowrap"
              >
                Hablemos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
              <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-[#4A5E8A]">Scroll</span>
              <div className="w-px h-14 bg-gradient-to-b from-[#3B5080] to-transparent" />
            </div>
          </div>
        </section>

        {/* ── SERVICIOS ─────────────────────────────────────── */}
        <section id="servicios" className="relative py-28 overflow-hidden border-t border-[#0F1C3F]">
          <span className="section-num absolute -top-4 right-6 lg:right-12 z-0">01</span>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex items-end justify-between mb-14 pb-8 border-b border-[#0F1C3F]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-3" style={{ color: "#5B8DFF" }}>
                  / Servicios
                </p>
                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">Lo que hacemos</h2>
              </div>
              <span className="text-[11px] text-[#4A5E8A] font-mono hidden md:block">03 servicios disponibles</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0F1C3F]">
              {services.map((service, i) => (
                <ServiceCard key={service.title} {...service} index={i + 1} />
              ))}
            </div>

            <TechStack />
          </div>
        </section>

        {/* ── NOSOTROS ──────────────────────────────────────── */}
        <section id="nosotros" className="relative py-28 overflow-hidden border-t border-[#0F1C3F]">
          <span className="section-num absolute -top-4 left-6 lg:left-12 z-0">02</span>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex items-end justify-between mb-14 pb-8 border-b border-[#0F1C3F]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-3" style={{ color: "#5B8DFF" }}>
                  / Equipo
                </p>
                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">Quiénes somos</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#0F1C3F]">
              {/* Description panel */}
              <div className="bg-[#04091C] p-8 lg:p-12 flex flex-col justify-between">
                <p className="text-[#7B8FBF] text-sm leading-loose max-w-md">
                  Somos un equipo apasionado por la tecnología, dedicados a crear soluciones que impulsan el
                  crecimiento de nuestros clientes. Combinamos experiencia técnica con visión estratégica para
                  entregar productos de calidad.
                </p>
                <div className="mt-12 pt-8 border-t border-[#0F1C3F]">
                  <div className="flex gap-10">
                    <div>
                      <p className="text-3xl font-black" style={{ color: "#5B8DFF" }}>4</p>
                      <p className="text-[10px] uppercase tracking-widest text-[#7B8FBF] font-mono mt-1">Fundadores</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-white">3+</p>
                      <p className="text-[10px] uppercase tracking-widest text-[#7B8FBF] font-mono mt-1">Proyectos</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-white">2024</p>
                      <p className="text-[10px] uppercase tracking-widest text-[#7B8FBF] font-mono mt-1">Fundada</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founders grid */}
              <div className="bg-[#04091C] p-8 lg:p-12">
                <FoundersSection />
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNERS ──────────────────────────────────────── */}
        <PartnersSection />

        {/* ── CONTACTO ──────────────────────────────────────── */}
        <section id="contacto" className="relative py-28 overflow-hidden border-t border-[#0F1C3F]">
          <span className="section-num absolute -top-4 right-6 lg:right-12 z-0">03</span>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex items-end justify-between mb-14 pb-8 border-b border-[#0F1C3F]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-3" style={{ color: "#5B8DFF" }}>
                  / Contacto
                </p>
                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">Hablemos</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#0F1C3F]">
              {/* Info panel */}
              <div className="bg-[#04091C] p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-[#7B8FBF] text-sm leading-loose max-w-sm">
                    ¿Tienes un proyecto en mente? Cuéntanos sobre él. Estamos aquí para ayudarte a convertir tus
                    ideas en realidad.
                  </p>
                  <div className="mt-10 space-y-3">
                    {["Respuesta en menos de 24h", "Primera consulta sin costo", "Proyectos a medida"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="text-[#5B8DFF] text-xs">→</span>
                        <p className="text-[11px] uppercase tracking-widest text-[#4A5E8A] font-mono">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-[#0F1C3F]">
                  <Image src="/logo-raph.png" alt="Raph-Corp" width={40} height={40} className="rounded-sm opacity-80" />
                </div>
              </div>

              {/* Form panel */}
              <div className="bg-[#04091C] p-8 lg:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
