
import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kalo para Colegios | Potenciá la Orientación Vocacional en tu Institución",
  description: "Descubrí cómo Kalo puede transformar la orientación vocacional en tu colegio con nuestra plataforma de IA, diseñada para complementar y potenciar a tu equipo de orientación.",
  alternates: {
    canonical: "https://www.trykalo.app/colegios",
  },
}

export default function ColegiosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
