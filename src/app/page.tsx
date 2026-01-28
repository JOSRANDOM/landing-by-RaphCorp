import { Navbar, ServiceCard, Footer, ContactForm, MaintenancePage, PartnersSection, FoundersSection, TechStack } from "@/presentation/components";
import { env } from "@/config/env";

const services = [
  {
    title: "Consultoria",
    description: "Asesoria tecnica para tu proyecto",
    details: [
      "Arquitectura de software",
      "Mejores practicas de desarrollo",
      "Optimizacion de rendimiento",
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
      "Automatizacion de procesos",
    ],
  },
];

export default function Home() {
  if (env.maintenanceMode) {
    return <MaintenancePage />;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black">
        <section
          id="inicio"
          className="min-h-screen flex items-center justify-center pt-16 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6">
              Bienvenido a Raph-Corp
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-6 sm:mb-8 px-4">
              Soluciones tecnologicas para tu negocio
            </p>
            <a
              href="#contacto"
              className="inline-block bg-zinc-900 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors text-sm sm:text-base"
            >
              Comenzar
            </a>
          </div>
        </section>

        <section
          id="servicios"
          className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 py-16 sm:py-20 px-4"
        >
          <div className="max-w-5xl mx-auto text-center w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-8 sm:mb-12">
              Servicios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              ))}
            </div>
            <TechStack />
          </div>
        </section>

        <section
          id="nosotros"
          className="min-h-screen flex flex-col justify-center py-16 sm:py-20"
        >
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6">
              Nosotros
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl mx-auto">
              Somos un equipo apasionado por la tecnologia, dedicados a crear
              soluciones que impulsan el crecimiento de nuestros clientes.
            </p>
          </div>
          <FoundersSection />
        </section>

        <PartnersSection />

        <section
          id="contacto"
          className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4"
        >
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6 sm:mb-8 text-center">
              Contactanos
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
