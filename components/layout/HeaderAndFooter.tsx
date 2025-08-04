"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'

export default function HeaderAndFooter({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-emerald-500" aria-label="Kalo - Plataforma de orientación vocacional">
                kalo
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Navegación principal">
              <button onClick={() => scrollToSection("nosotros")} className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm">
                NOSOTROS
              </button>
              <button onClick={() => scrollToSection("caracteristicas")} className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm">
                CARACTERÍSTICAS
              </button>
              <Link href="/colegios" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm">
                COLEGIOS
              </Link>
              <Link href="/contacto" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-sm">
                CONTACTO
              </Link>
            </nav>
            <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors duration-200" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-label="Abrir menú de navegación">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Button asChild variant="outline" size="lg" className="hidden md:flex border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-600 bg-transparent transition-all duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 px-6 py-2 font-semibold">
              <Link href="/contacto">Contactanos</Link>
            </Button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white">
              <nav className="flex flex-col space-y-4" role="navigation" aria-label="Navegación móvil">
                <button onClick={() => scrollToSection("nosotros")} className="text-left text-gray-600 hover:text-emerald-600 font-medium py-2 transition-colors duration-200">
                  NOSOTROS
                </button>
                <button onClick={() => scrollToSection("caracteristicas")} className="text-left text-gray-600 hover:text-emerald-600 font-medium py-2 transition-colors duration-200">
                  CARACTERÍSTICAS
                </button>
                <Link href="/colegios" className="text-left text-gray-600 hover:text-emerald-600 font-medium py-2 transition-colors duration-200">
                  COLEGIOS
                </Link>
                <Link href="/contacto" className="text-left text-gray-600 hover:text-emerald-600 font-medium py-2 transition-colors duration-200">
                  CONTACTO
                </Link>
                <Button asChild variant="outline" size="lg" className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 bg-transparent w-full mt-4 font-semibold">
                  <Link href="/contacto">Contactanos</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-900 text-white" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-emerald-400" aria-label="Kalo">
                  kalo
                </Link>
              </div>
              <p className="text-gray-300 leading-relaxed">
                La plataforma de orientación vocacional que ayuda a estudiantes a descubrir su futuro.
              </p>
              <div className="flex space-x-4">
                <Link href="https://x.com/durantelolo" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm" aria-label="Seguinos en X" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="https://www.instagram.com/lolodurante_/" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm" aria-label="Seguinos en Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/lorenzodurante-/" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm" aria-label="Conectá con nosotros en LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Empresa</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection("nosotros")} className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm">Nosotros</button></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm">Blog</Link></li>
                <li><Link href="/carreras" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm">Carreras</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <a href="mailto:lorenzo@trykalo.app" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm">lorenzo@trykalo.app</a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <a href="tel:+541122360914" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm">+54 11 2236-0914</a>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPinIcon className="w-4 h-4 text-emerald-400 mt-1" aria-hidden="true" />
                  <span className="text-gray-300">Buenos Aires, Argentina</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Kalo. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terminos" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm">Términos de uso</Link>
              <Link href="/privacidad" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm">Política de privacidad</Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm">Mapa del sitio</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
