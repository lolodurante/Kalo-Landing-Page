"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import {
  BrainCircuit,
  Compass,
  ClipboardList,
  Target,
  BookOpen,
  Users,
  Lightbulb,
  MapPin,
  Zap,
  Mail,
  Phone,
  MapPinIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

export default function UnifrogLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const features = [
    {
      icon: Target,
      title: "Orientación personalizada",
      description: "Cada estudiante recibe recomendaciones únicas basadas en su recorrido y decisiones.",
    },
    {
      icon: BookOpen,
      title: "Más de 2500 carreras actualizadas",
      description: "Información detallada sobre planes de estudio y salidas laborales en un solo lugar.",
    },
    {
      icon: Users,
      title: "Herramientas para docentes",
      description: "Panel de seguimiento con datos claros para acompañar cada estudiante.",
    },
    {
      icon: Lightbulb,
      title: "Contenidos diseñados por expertos",
      description: "Actividades que promueven un proceso vocacional profundo y reflexivo.",
    },
    {
      icon: MapPin,
      title: "Adaptado al contexto argentino",
      description: "Contenido pensado para jóvenes del sistema educativo local.",
    },
    {
      icon: Zap,
      title: "Implementación simple",
      description: "Sin instalaciones complejas. Listo para usar desde el primer día.",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const errors = { name: "", email: "" }
    let isValid = true

    if (!formData.name.trim()) {
      errors.name = "El nombre es obligatorio"
      isValid = false
    }

    if (!formData.email.trim()) {
      errors.email = "El email es obligatorio"
      isValid = false
    } else if (!validateEmail(formData.email)) {
      errors.email = "Por favor ingresá un email válido"
      isValid = false
    }

    setFormErrors(errors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", institution: "", message: "" })
    setFormErrors({ name: "", email: "" })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear errors when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    }
  }

  // Alien Rocket Icon Component
  const AlienRocketIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14 8L20 6L16 12L22 14L12 22L2 14L8 12L4 6L10 8L12 2Z" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="10" r="2" fill="white" />
      <path d="M10 16L12 18L14 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span
                className="text-2xl font-bold text-emerald-500"
                aria-label="Kalo - Plataforma de orientación vocacional"
              >
                kalo
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Navegación principal">
              <Link
                href="#nosotros"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("nosotros")
                }}
                className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm"
              >
                NOSOTROS
              </Link>
              <Link
                href="#caracteristicas"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("caracteristicas")
                }}
                className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm"
              >
                CARACTERÍSTICAS
              </Link>
              <Link
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contacto")
                }}
                className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm"
              >
                CONTACTO
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Sign In Button - Desktop */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hidden md:flex border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-600 bg-transparent transition-all duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 px-6 py-2 font-semibold"
            >
              <Link href="https://platform.trykalo.app">INICIAR SESIÓN</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white">
              <nav className="flex flex-col space-y-4" role="navigation" aria-label="Navegación móvil">
                <Link
                  href="#nosotros"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("nosotros")
                  }}
                  className="text-left text-gray-600 hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
                >
                  NOSOTROS
                </Link>
                <Link
                  href="#caracteristicas"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("caracteristicas")
                  }}
                  className="text-left text-gray-600 hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
                >
                  CARACTERÍSTICAS
                </Link>
                <Link
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("contacto")
                  }}
                  className="text-left text-gray-600 hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
                >
                  CONTACTO
                </Link>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 bg-transparent w-full mt-4 font-semibold"
                >
                  <Link href="https://platform.trykalo.app">INICIAR SESIÓN</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="inicio">
        <div className="text-center">
          <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Descubrí tu futuro con la plataforma más completa.
            </h1>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>Kalo ayuda a estudiantes a conocerse mejor. Explorá miles de carreras y tomá decisiones informadas.</p>
              <p>Potenciamos a docentes y orientadores con herramientas y datos para acompañar mejor este proceso.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 group border-2 border-emerald-500"
                onClick={() => scrollToSection("contacto")}
              >
                Contactanos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-600 px-8 py-3 text-lg font-semibold bg-transparent transition-all duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                onClick={() => scrollToSection("caracteristicas")}
              >
                Conocé más
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Green CTA Section */}
      <section className="bg-emerald-500 py-16 md:py-20" id="nosotros">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Preparamos estudiantes para un mundo cambiante.
            </h2>
            <p className="text-xl text-emerald-100 mt-4 max-w-4xl">
              Los ayudamos a descubrir quiénes son, qué pueden llegar a ser y cómo alcanzar ese camino.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-left">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                  <BrainCircuit className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Autoconocimiento</h3>
              <p className="text-emerald-100 leading-relaxed">
                Herramientas para explorar intereses, valores y habilidades de manera profunda.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                  <Compass className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Exploración</h3>
              <p className="text-emerald-100 leading-relaxed">
                Acceso a opciones académicas y profesionales actualizadas y relevantes.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                  <ClipboardList className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Planificación</h3>
              <p className="text-emerald-100 leading-relaxed">
                Guía paso a paso para crear un plan de acción hacia tus objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white" id="caracteristicas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              ¿Por qué elegir Kalo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Descubrí las características que hacen de Kalo la mejor opción para tu institución.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 bg-white h-full group cursor-pointer transform hover:-translate-y-1"
                >
                  <CardContent className="p-6 md:p-8 text-left h-full flex flex-col">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Resolvemos tus dudas sobre nuestro proceso de orientación vocacional.
            </p>
          </div>
          <div className="space-y-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Qué es la orientación vocacional?</AccordionTrigger>
                <AccordionContent>
                  La orientación vocacional es un proceso que te ayuda a conocerte mejor (tus intereses, habilidades y valores) para que puedas elegir una carrera o profesión que se alinee con quién sos. Kalo utiliza inteligencia artificial para hacer este proceso más dinámico y personalizado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Cómo funciona el test vocacional de Kalo?</AccordionTrigger>
                <AccordionContent>
                  Nuestro test vocacional es una serie de actividades interactivas diseñadas por expertos en psicopedagogía. No es un examen, sino una herramienta para que reflexiones sobre tus preferencias y aptitudes. La plataforma analiza tus respuestas para darte recomendaciones de carreras personalizadas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>¿La plataforma solo sirve para encontrar carreras universitarias?</AccordionTrigger>
                <AccordionContent>
                  No, nuestro explorador de carreras incluye más de 2500 opciones educativas, tanto universitarias como terciarias y de formación profesional. Queremos que tengas un panorama completo de todas las posibilidades para tu futuro.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>¿Qué hago si no sé qué estudiar?</AccordionTrigger>
                <AccordionContent>
                  ¡No te preocupes! Kalo está diseñado precisamente para eso. A través de nuestras herramientas de autoconocimiento y el explorador de carreras, te ayudamos a descubrir opciones que quizás no conocías y a tomar una decisión informada y sin presiones.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-16 md:py-20" id="contacto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">¿Te interesa Kalo?</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Hablemos sobre cómo puede ayudar a tu institución.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 group border-2 border-emerald-500"
              onClick={() => (window.location.href = "/contacto")}
            >
              Contactanos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-emerald-400" aria-label="Kalo">
                  kalo
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                La plataforma de orientación vocacional que ayuda a estudiantes a descubrir su futuro.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://x.com/durantelolo"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  aria-label="Seguinos en X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/lolodurante_/"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  aria-label="Seguinos en Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/lorenzodurante-/"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  aria-label="Conectá con nosotros en LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("nosotros")}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  >
                    Nosotros
                  </button>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/carreras"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  >
                    Carreras
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <a
                    href="mailto:lorenzo@trykalo.app"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  >
                    lorenzo@trykalo.app
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <a
                    href="tel:+541122360914"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  >
                    +54 11 2236-0914
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPinIcon className="w-4 h-4 text-emerald-400 mt-1" aria-hidden="true" />
                  <span className="text-gray-300">Buenos Aires, Argentina</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Kalo. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/terminos"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
              >
                Términos de uso
              </Link>
              <Link
                href="/privacidad"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
              >
                Política de privacidad
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
              >
                Mapa del sitio
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
