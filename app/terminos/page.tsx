"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver</span>
            </Link>
            <span className="text-2xl font-bold text-emerald-500">kalo</span>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos de Uso</h1>

          <p className="text-gray-600 mb-8">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-AR")}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-700 leading-relaxed">
                Al acceder y utilizar la plataforma Kalo, usted acepta estar sujeto a estos Términos de Uso y todas las
                leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, no debe utilizar
                este servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripción del Servicio</h2>
              <p className="text-gray-700 leading-relaxed">
                Kalo es una plataforma de orientación vocacional que ayuda a estudiantes a conocerse mejor, explorar
                carreras y tomar decisiones informadas sobre su futuro académico y profesional. El servicio incluye
                herramientas de autoconocimiento, información sobre carreras y recursos para docentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Registro y Cuenta de Usuario</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para utilizar ciertos aspectos del servicio, debe crear una cuenta proporcionando información precisa y
                completa. Usted es responsable de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Mantener la confidencialidad de su contraseña</li>
                <li>Todas las actividades que ocurran bajo su cuenta</li>
                <li>Notificar inmediatamente cualquier uso no autorizado</li>
                <li>Proporcionar información veraz y actualizada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Uso Aceptable</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al utilizar nuestro servicio, usted se compromete a NO:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Utilizar el servicio para fines ilegales o no autorizados</li>
                <li>Interferir con el funcionamiento del servicio</li>
                <li>Intentar acceder a cuentas de otros usuarios</li>
                <li>Transmitir virus, malware o código malicioso</li>
                <li>Violar los derechos de propiedad intelectual</li>
                <li>Acosar, amenazar o intimidar a otros usuarios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
              <p className="text-gray-700 leading-relaxed">
                Todo el contenido de la plataforma Kalo, incluyendo pero no limitado a textos, gráficos, logotipos,
                iconos, imágenes, clips de audio, descargas digitales y software, es propiedad de Kalo o sus proveedores
                de contenido y está protegido por las leyes de derechos de autor argentinas e internacionales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacidad</h2>
              <p className="text-gray-700 leading-relaxed">
                Su privacidad es importante para nosotros. Consulte nuestra{" "}
                <Link href="/privacidad" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Política de Privacidad
                </Link>{" "}
                para obtener información sobre cómo recopilamos, utilizamos y protegemos su información personal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed">
                Kalo se proporciona "tal como está" sin garantías de ningún tipo. No seremos responsables por daños
                directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de
                usar el servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modificaciones del Servicio</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de modificar, suspender o discontinuar el servicio en cualquier momento sin
                previo aviso. No seremos responsables ante usted o terceros por cualquier modificación, suspensión o
                discontinuación del servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Terminación</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos terminar o suspender su cuenta inmediatamente, sin previo aviso, por cualquier motivo,
                incluyendo la violación de estos Términos de Uso. Usted puede terminar su cuenta en cualquier momento
                contactándonos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Ley Aplicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Estos términos se regirán e interpretarán de acuerdo con las leyes de la República Argentina. Cualquier
                disputa se resolverá en los tribunales competentes de Buenos Aires, Argentina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Si tiene preguntas sobre estos Términos de Uso, puede contactarnos en:{" "}
                <a href="mailto:lorenzo@trykalo.app" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  lorenzo@trykalo.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
