
import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kalo para Colegios | Potenciá el Desarrollo Personal en tu Institución",
  description: "Descubrí cómo Kalo puede transformar el desarrollo personal en tu colegio con nuestra plataforma de autoconocimiento con IA, diseñada para complementar y potenciar a tu equipo de orientación.",
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
