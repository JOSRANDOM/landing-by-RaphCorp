import { Navbar, ServiceCard, Footer } from "@/presentation/components";

const services = [
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
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black">
        <section
          id="inicio"
          className="min-h-screen flex items-center justify-center pt-16"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
              Bienvenido a Raph-Corp
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
              Soluciones tecnologicas para tu negocio
            </p>
            <a
              href="#contacto"
              className="inline-block bg-zinc-900 text-white px-8 py-3 rounded-full hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
            >
              Comenzar
            </a>
          </div>
        </section>

        <section
          id="servicios"
          className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-900"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12">
              Servicios
            </h2>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="nosotros"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              Nosotros
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Somos un equipo apasionado por la tecnologia, dedicados a crear
              soluciones que impulsan el crecimiento de nuestros clientes.
            </p>
          </div>
        </section>

        <section
          id="contacto"
          className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-900"
        >
          <div className="max-w-md mx-auto px-4 w-full">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
              Contactame
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-zinc-900 text-white py-3 rounded-lg hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
