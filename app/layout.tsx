import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Kalo | Orientación Vocacional con Inteligencia Artificial",
  description:
    "Descubrí tu futuro con Kalo, la plataforma de orientación vocacional con IA. Hacé nuestro test vocacional, explorá carreras y encontrá qué estudiar.",
  generator: 'v0.dev',
  openGraph: {
    title: "Kalo | Orientación Vocacional con Inteligencia Artificial",
    description: "Descubrí tu futuro con Kalo, la plataforma de orientación vocacional con IA. Hacé nuestro test vocacional, explorá carreras y encontrá qué estudiar.",
    url: "https://www.trykalo.app",
    siteName: "Kalo",
    images: [
      {
        url: "https://www.trykalo.app/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalo | Orientación Vocacional con Inteligencia Artificial",
    description: "Descubrí tu futuro con Kalo, la plataforma de orientación vocacional con IA. Hacé nuestro test vocacional, explorá carreras y encontrá qué estudiar.",
    images: ["https://www.trykalo.app/logo.png"],
  },
  alternates: {
    canonical: "https://www.trykalo.app",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://www.trykalo.app"
              }]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kalo",
              "url": "https://www.trykalo.app",
              "logo": "https://trykalo.app/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "contacto@trykalo.app"
              },
              "sameAs": [
                "https://x.com/durantelolo",
                "https://www.instagram.com/lolodurante_/",
                "https://www.linkedin.com/in/lorenzodurante-/"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.trykalo.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.trykalo.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "author": {
                "@type": "Organization",
                "name": "Kalo"
              },
              "headline": "Kalo | Orientación Vocacional con Inteligencia Artificial",
              "datePublished": "2024-01-01",
              "image": "https://trykalo.app/logo.png"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "¿Qué es la orientación vocacional?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La orientación vocacional es un proceso que te ayuda a conocerte mejor (tus intereses, habilidades y valores) para que puedas elegir una carrera o profesión que se alinee con quién sos. Kalo utiliza inteligencia artificial para hacer este proceso más dinámico y personalizado."
                }
              },{
                "@type": "Question",
                "name": "¿Cómo funciona el test vocacional de Kalo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nuestro test vocacional es una serie de actividades interactivas diseñadas por expertos en psicopedagogía. No es un examen, sino una herramienta para que reflexiones sobre tus preferencias y aptitudes. La plataforma analiza tus respuestas para darte recomendaciones de carreras personalizadas."
                }
              },{
                "@type": "Question",
                "name": "¿La plataforma solo sirve para encontrar carreras universitarias?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, nuestro explorador de carreras incluye más de 2500 opciones educativas, tanto universitarias como terciarias y de formación profesional. Queremos que tengas un panorama completo de todas las posibilidades para tu futuro."
                }
              },{
                "@type": "Question",
                "name": "¿Qué hago si no sé qué estudiar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "¡No te preocupes! Kalo está diseñado precisamente para eso. A través de nuestras herramientas de autoconocimiento y el explorador de carreras, te ayudamos a descubrir opciones que quizás no conocías y a tomar una decisión informada y sin presiones."
                }
              }]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kalo",
              "email": "contacto@trykalo.app",
              "url": "https://www.trykalo.app",
              "image": "https://trykalo.app/logo.png",
              "description": "Kalo es una plataforma digital de orientación vocacional asistida con inteligencia artificial."
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
