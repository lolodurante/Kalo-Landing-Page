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
      title: "Recomendaciones personalizadas",
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
      description: "Actividades que promueven un proceso de autoconocimiento profundo y reflexivo.",
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


      {/* Hero Section */}
      <main className="flex flex-col justify-center items-center text-center min-h-[calc(100vh-4rem)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="inicio">
        <div className="space-y-6 md:space-y-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Descubrí qué estudiar y elegí con confianza.
          </h1>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
            <p>Comenzá con una actividad de autoconocimiento, explorá miles de carreras reales y recibí recomendaciones personalizadas para tu futuro.</p>
            <p className="text-emerald-700 font-semibold">Por tiempo limitado, registrate gratis y empezá hoy.</p>
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 group border-2 border-emerald-500"
            >
              <Link href="https://platform.trykalo.app/onboarding">
                Registrate gratis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
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
              Resolvemos tus dudas sobre nuestras herramientas de autoconocimiento.
            </p>
          </div>
          <div className="space-y-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>¿En qué consisten las herramientas vocacionales de Kalo?</AccordionTrigger>
                <AccordionContent>
                  Las herramientas de Kalo son un conjunto de actividades de autoconocimiento que te ayudan a descubrir tus intereses, habilidades y valores. A través de ellas, te conocés mejor y podés explorar carreras y profesiones que se alineen con tu personalidad. Utilizamos inteligencia artificial para hacer este proceso más dinámico y personalizado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Cómo funcionan las herramientas de autoconocimiento de Kalo?</AccordionTrigger>
                <AccordionContent>
                  Nuestro proceso de autoconocimiento se basa en una serie de actividades interactivas diseñadas por expertos en psicopedagogía. No es un examen, sino una guía para que reflexiones sobre tus preferencias, intereses y aptitudes. La plataforma analiza tus respuestas para darte recomendaciones de carreras personalizadas.
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Registrate gratis</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Creá tu cuenta y empezá a explorar carreras y conocerte mejor. Gratis por tiempo limitado.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 group border-2 border-emerald-500"
            >
              <Link href="https://platform.trykalo.app/onboarding">
                Registrate gratis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


    </div>
  )
}
