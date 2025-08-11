import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Download, MessageCircle, ArrowRight, Info, BookX, BrainCircuit, Bot, Monitor,
  Lightbulb, Users, Search, BookCopy, HandHeart, CheckCircle,
  LayoutDashboard, FileText, BarChart, PlusCircle, Rocket, Layers, GitMerge,
  Star, Trophy, Flag, Combine, AlertTriangle
} from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kalo para Colegios | Potenciá el Desarrollo Personal de tus Alumnos",
  description: "Descubrí cómo Kalo puede transformar el desarrollo personal en tu colegio. Ofrecemos herramientas de autoconocimiento con IA, seguimiento de estudiantes y contenido adaptado para preparar a tus alumnos para el futuro.",
  openGraph: {
    title: "Kalo para Colegios | Potenciá el Desarrollo Personal de tus Alumnos",
    description: "Descubrí cómo Kalo puede transformar el desarrollo personal en tu colegio. Ofrecemos herramientas de autoconocimiento con IA, seguimiento de estudiantes y contenido adaptado para preparar a tus alumnos para el futuro.",
    url: "https://www.trykalo.app/colegios",
    siteName: "Kalo",
    images: [
      {
        url: "https://www.trykalo.app/og-colegios.png", // Asegúrate de crear esta imagen
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalo para Colegios | Potenciá el Desarrollo Personal de tus Alumnos",
    description: "Descubrí cómo Kalo puede transformar el desarrollo personal en tu colegio. Ofrecemos herramientas de autoconocimiento con IA y seguimiento personalizado.",
    images: ["https://www.trykalo.app/og-colegios.png"], // Asegúrate de crear esta imagen
  },
  alternates: {
    canonical: "https://www.trykalo.app/colegios",
  },
}


export default function ColegiosPage() {
  return (
    <div className="bg-white text-gray-800 font-poppins">
      {/* Hero Section */}
      <section className="bg-emerald-50 text-center py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Acompañá a tus estudiantes en una de las decisiones más importantes de su vida.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Kalo es una plataforma de autoconocimiento asistida con inteligencia artificial, pensada para que los colegios puedan guiar mejor a sus estudiantes en el camino de elegir qué estudiar.
          </p>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105 group">
              <Link href="/contacto">
                Solicitar una demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              ¿Por qué es tan difícil elegir qué estudiar?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-rose-100 rounded-full p-4 mb-4">
                <Info className="w-8 h-8 text-rose-500" />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Muchos estudiantes deciden con <strong>poca información</strong> y sin conocerse a sí mismos.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-rose-100 rounded-full p-4 mb-4">
                <BookX className="w-8 h-8 text-rose-500" />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Las herramientas vocacionales tradicionales son <strong>costosas, genéricas</strong> y a menudo insuficientes para una decisión tan importante.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-rose-100 rounded-full p-4 mb-4">
                <BrainCircuit className="w-8 h-8 text-rose-500" />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Esto genera <strong>frustración, abandono</strong> o decisiones tomadas desde el miedo, la presión o la inercia.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <p className="text-3xl font-bold text-orange-800">
                  El 40% de los estudiantes
                </p>
              </div>
              <p className="text-xl text-gray-700 mb-2">
                abandona o cambia de carrera en el primer año
              </p>
              <p className="text-gray-600 italic">
                Una decisión mal informada puede costar tiempo, dinero y bienestar emocional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Kalo Section */}
      <section className="bg-emerald-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Una plataforma integral de autoconocimiento para colegios
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Kalo combina inteligencia artificial, actividades guiadas de autoconocimiento y una base de datos con más de 2.500 carreras de todo el país. Está pensada para integrarse al trabajo del colegio, no reemplazarlo.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-3 mt-1">
                  <BrainCircuit className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Enfoque profundo y personalizado</h3>
                  <p className="text-gray-600">No nos quedamos en la superficie. Promovemos un verdadero proceso de autodescubrimiento.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-3 mt-1">
                  <Monitor className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Plataforma online y accesible</h3>
                  <p className="text-gray-600">Disponible desde cualquier dispositivo, para que los estudiantes trabajen a su ritmo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-3 mt-1">
                  <Bot className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Tecnología con mirada educativa</h3>
                  <p className="text-gray-600">Nuestra IA está entrenada por especialistas en educación y psicopedagogía.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-3 mt-1">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Acompañamiento real</h3>
                  <p className="text-gray-600">Vamos más allá de la herramienta y los resultados, guiando a los estudiantes en cada etapa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Features Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Herramientas reales para tomar decisiones informadas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 rounded-full p-3">
                  <Bot className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-xl">Proceso de autoconocimiento guiado por IA</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Personalizado, progresivo, profundo. No es una actividad superficial de 5 minutos.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 rounded-full p-3">
                  <Search className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-xl">Explorador de carreras</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Más de 2.500 opciones con planes de estudio, duración, modalidades y becas.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 rounded-full p-3">
                  <BookCopy className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-xl">Ejercicios de autoconocimiento</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Valores, intereses, motivaciones, fortalezas y estilo de vida.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 rounded-full p-3">
                  <HandHeart className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-xl">Acompañamiento continuo</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Desde la primera duda hasta la elección final.</p>
            </div>
          </div>
        </div>
      </section>

      {/* School Features Section */}
      <section className="bg-emerald-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Una herramienta que potencia el trabajo del equipo de orientación
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 rounded-full p-3">
                  <LayoutDashboard className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-xl">Panel de seguimiento institucional</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Visualizá en qué etapa está cada estudiante, sus intereses y avances.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 rounded-full p-3">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-xl">Reportes individuales y grupales</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Para trabajar en entrevistas, talleres o reuniones con familias.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 rounded-full p-3">
                  <BarChart className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-xl">Mejora en la participación</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Los estudiantes se involucran más porque se sienten acompañados.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 rounded-full p-3">
                  <PlusCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-xl">Complemento, no reemplazo</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Kalo se adapta al modelo del colegio, potenciando el trabajo humano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Simple, flexible y adaptado a tu realidad
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Pasos para implementar Kalo:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="bg-emerald-100 rounded-full p-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span>Definimos juntos el plan de implementación.</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-emerald-100 rounded-full p-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span>Capacitación rápida al equipo de orientación (opcional).</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-emerald-100 rounded-full p-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span>Acceso de los estudiantes mediante link y usuario propio.</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-emerald-100 rounded-full p-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span>Seguimiento desde el panel institucional.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Modelos posibles:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Rocket className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-bold">100% online</h4>
                    <p className="text-gray-600">Los estudiantes avanzan a su ritmo de forma autónoma.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <GitMerge className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-bold">Híbrido</h4>
                    <p className="text-gray-600">Acompañado por el equipo de orientación del colegio.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Layers className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-bold">Por etapas</h4>
                    <p className="text-gray-600">Autoconocimiento → Exploración → Decisión.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-emerald-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Lo que dicen los que ya lo usan
          </h2>
          <div className="bg-white p-8 rounded-lg border max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-400" />
              <Star className="w-6 h-6 text-yellow-400" />
              <Star className="w-6 h-6 text-yellow-400" />
              <Star className="w-6 h-6 text-yellow-400" />
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <blockquote className="text-xl italic text-gray-700">
              “Me encantó. Hace preguntas que uno quizás nunca se había hecho, y eso realmente ayuda a pensar mejor las cosas.”
            </blockquote>
            <p className="mt-6 font-semibold text-gray-800">Estudiante de Colegio Piloto</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Desarrollado en Argentina, con mirada educativa
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Kalo nació de una experiencia personal: la falta de herramientas reales al momento de elegir qué estudiar. Hoy somos un equipo de emprendedores y educadores comprometidos con transformar el futuro de la educación en Latinoamérica.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-3 mt-1">
                  <Trophy className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Seleccionados por IAE Business School</h3>
                  <p className="text-gray-600">Para el programa NAVES 2025, validando nuestro modelo y potencial.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-3 mt-1">
                  <Flag className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">100% desarrollado en Argentina</h3>
                  <p className="text-gray-600">Pensado y creado para la realidad de los estudiantes de nuestro país.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-3 mt-1">
                  <Combine className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">En colaboración con especialistas</h3>
                  <p className="text-gray-600">Trabajamos con expertos en psicopedagogía, IA y diseño educativo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-emerald-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Reemplaza al gabinete psicopedagógico?</AccordionTrigger>
              <AccordionContent>
                No, en absoluto. Kalo es una herramienta diseñada para potenciar y complementar el trabajo del equipo de orientación del colegio. Aporta datos, agiliza procesos y permite que los profesionales dediquen más tiempo al acompañamiento personalizado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Es obligatorio usar IA?</AccordionTrigger>
              <AccordionContent>
                La inteligencia artificial es una de las capas de la plataforma, pero el colegio puede elegir qué herramientas utilizar y con qué profundidad. El núcleo de Kalo son las actividades de autoconocimiento y la información sobre carreras.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Cuánto tiempo lleva cada etapa?</AccordionTrigger>
              <AccordionContent>
                Kalo es flexible. No hay un tiempo estipulado, ya que se adapta al ritmo de cada estudiante y al plan de trabajo del colegio. Puede implementarse de forma intensiva en un trimestre o de manera progresiva a lo largo del año.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿Qué pasa si un colegio quiere sumar su propio contenido?</AccordionTrigger>
              <AccordionContent>
                Estamos abiertos a adaptar la plataforma. Si un colegio tiene contenido propio que desea integrar, podemos analizar la mejor forma de hacerlo para enriquecer la experiencia de sus estudiantes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>¿Se puede usar solo con algunos cursos?</AccordionTrigger>
              <AccordionContent>
                Sí, totalmente. El plan de implementación se define junto al colegio. Se puede empezar con un curso piloto, con los últimos dos años del secundario, o con toda la institución.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Resto de las secciones irán aquí */}
    </div>
  )
}
