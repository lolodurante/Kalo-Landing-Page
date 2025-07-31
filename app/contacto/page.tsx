"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar } from "lucide-react"
import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    rol: "",
    nombre: "",
    email: "",
    comoNosConociste: "",
    mensaje: "",
  })
  const [formErrors, setFormErrors] = useState({
    rol: "",
    nombre: "",
    email: "",
    comoNosConociste: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const errors = { rol: "", nombre: "", email: "", comoNosConociste: "" }
    let isValid = true

    if (!formData.rol) {
      errors.rol = "Por favor seleccioná tu rol"
      isValid = false
    }

    if (!formData.nombre.trim()) {
      errors.nombre = "El nombre es obligatorio"
      isValid = false
    }

    if (!formData.email.trim()) {
      errors.email = "El email es obligatorio"
      isValid = false
    } else if (!validateEmail(formData.email)) {
      errors.email = "Por favor ingresá un email válido"
      isValid = false
    }

    if (!formData.comoNosConociste) {
      errors.comoNosConociste = "Por favor seleccioná una opción"
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

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        rol: "",
        nombre: "",
        email: "",
        comoNosConociste: "",
        mensaje: "",
      })
      setFormErrors({ rol: "", nombre: "", email: "", comoNosConociste: "" })
    }, 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white font-poppins flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-emerald-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">¡Mensaje enviado!</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Gracias por contactarnos. Te responderemos dentro de las próximas 24 horas.
          </p>
          <Link href="/">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    )
  }

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
        <div className="max-w-2xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">Quiero una demo</h1>
            <p className="text-xl text-gray-500 mb-6">Te contactaremos enseguida para coordinar una reunión.</p>
            <p className="text-gray-500 mb-6">
              ¿Ya tenés una cuenta o necesitás restablecer tu contraseña?{" "}
              <Link href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Iniciar sesión →
              </Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Rol */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <label htmlFor="rol" className="text-gray-700 font-medium md:text-right md:pt-2">
                * Soy un/a
              </label>
              <div className="md:col-span-3">
                <select
                  id="rol"
                  name="rol"
                  value={formData.rol}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white ${
                    formErrors.rol ? "border-red-500" : ""
                  }`}
                >
                  <option value="">--- seleccionar ---</option>
                  <option value="director">Director/a</option>
                  <option value="coordinador">Coordinador/a</option>
                  <option value="orientador">Orientador/a Vocacional</option>
                  <option value="docente">Docente</option>
                  <option value="estudiante">Estudiante</option>
                  <option value="padre">Padre/Madre</option>
                  <option value="otro">Otro</option>
                </select>
                {formErrors.rol && <p className="text-red-500 text-sm mt-1">{formErrors.rol}</p>}
              </div>
            </div>

            {/* Nombre */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <label htmlFor="nombre" className="text-gray-700 font-medium md:text-right md:pt-2">
                * Nombre
              </label>
              <div className="md:col-span-3">
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                  className={`focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                    formErrors.nombre ? "border-red-500" : ""
                  }`}
                />
                {formErrors.nombre && <p className="text-red-500 text-sm mt-1">{formErrors.nombre}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <label htmlFor="email" className="text-gray-700 font-medium md:text-right md:pt-2">
                * Email
              </label>
              <div className="md:col-span-3">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Tu email"
                  className={`focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>
            </div>

            {/* Cómo nos conociste */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <label htmlFor="comoNosConociste" className="text-gray-700 font-medium md:text-right md:pt-2">
                * ¿Cómo nos conociste?
              </label>
              <div className="md:col-span-3">
                <select
                  id="comoNosConociste"
                  name="comoNosConociste"
                  value={formData.comoNosConociste}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white ${
                    formErrors.comoNosConociste ? "border-red-500" : ""
                  }`}
                >
                  <option value="">--- por favor seleccionar ---</option>
                  <option value="google">Búsqueda en Google</option>
                  <option value="redes-sociales">Redes sociales</option>
                  <option value="recomendacion">Recomendación</option>
                  <option value="evento">Evento o conferencia</option>
                  <option value="prensa">Artículo o prensa</option>
                  <option value="otro">Otro</option>
                </select>
                {formErrors.comoNosConociste && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.comoNosConociste}</p>
                )}
              </div>
            </div>

            {/* Mensaje */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <label htmlFor="mensaje" className="text-gray-700 font-medium md:text-right md:pt-2">
                Mensaje
              </label>
              <div className="md:col-span-3">
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  placeholder="¿Hay algo más que te gustaría agregar?"
                  rows={6}
                  className="focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Footer text */}
            <div className="text-gray-600 text-lg">Te contactaremos enseguida para coordinar una reunión.</div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 text-lg transition-all duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
