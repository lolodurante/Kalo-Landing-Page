"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacidadPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>

          <p className="text-gray-600 mb-8">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-AR")}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información que Recopilamos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recopilamos información que usted nos proporciona directamente y información que se recopila
                automáticamente cuando utiliza nuestro servicio:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Información Personal</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Nombre y apellido</li>
                <li>Dirección de correo electrónico</li>
                <li>Información de contacto</li>
                <li>Información académica y profesional</li>
                <li>Respuestas a evaluaciones vocacionales</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Información Técnica</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Dirección IP</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Cookies y tecnologías similares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cómo Utilizamos su Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Personalizar su experiencia en la plataforma</li>
                <li>Comunicarnos con usted sobre el servicio</li>
                <li>Enviar actualizaciones y notificaciones importantes</li>
                <li>Analizar el uso de la plataforma para mejoras</li>
                <li>Cumplir con obligaciones legales</li>
                <li>Prevenir fraudes y garantizar la seguridad</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Compartir Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes
                circunstancias:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Con su consentimiento explícito</li>
                <li>Con proveedores de servicios que nos ayudan a operar la plataforma</li>
                <li>Cuando sea requerido por ley o autoridades competentes</li>
                <li>Para proteger nuestros derechos, propiedad o seguridad</li>
                <li>En caso de fusión, adquisición o venta de activos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies y Tecnologías Similares</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Utilizamos cookies y tecnologías similares para:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Recordar sus preferencias y configuraciones</li>
                <li>Analizar el tráfico y uso de la plataforma</li>
                <li>Mejorar la funcionalidad del sitio</li>
                <li>Proporcionar contenido personalizado</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Puede controlar las cookies a través de la configuración de su navegador, aunque esto puede afectar la
                funcionalidad del servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Seguridad de los Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de seguridad técnicas, administrativas y físicas apropiadas para proteger su
                información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo,
                ningún método de transmisión por Internet es 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Retención de Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos
                descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Sus Derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Acceder a su información personal</li>
                <li>Corregir información inexacta o incompleta</li>
                <li>Solicitar la eliminación de su información</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Solicitar la portabilidad de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Menores de Edad</h2>
              <p className="text-gray-700 leading-relaxed">
                Nuestro servicio está dirigido a usuarios mayores de 13 años. No recopilamos intencionalmente
                información personal de menores de 13 años sin el consentimiento parental. Si descubrimos que hemos
                recopilado información de un menor sin consentimiento, la eliminaremos inmediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Transferencias Internacionales</h2>
              <p className="text-gray-700 leading-relaxed">
                Su información puede ser transferida y procesada en países distintos al suyo. Nos aseguramos de que
                dichas transferencias cumplan con las leyes de protección de datos aplicables y que su información
                reciba un nivel adecuado de protección.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cambios a esta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios
                significativos publicando la nueva política en nuestro sitio web y actualizando la fecha de "última
                actualización".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, puede contactarnos
                en:{" "}
                <a href="mailto:lorenzo@trykalo.app" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  lorenzo@trykalo.app
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Dirección:</strong> Buenos Aires, Argentina
                <br />
                <strong>Teléfono:</strong> +54 11 2236-0914
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
