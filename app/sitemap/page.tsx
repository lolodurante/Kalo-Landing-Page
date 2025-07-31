
import Link from "next/link"

export default function SitemapPage() {
  const pages = [
    { url: "/", name: "Inicio" },
    { url: "/contacto", name: "Contacto" },
    { url: "/privacidad", name: "Política de Privacidad" },
    { url: "/terminos", name: "Términos de Uso" },
    { url: "/blog", name: "Blog" },
    { url: "/carreras", name: "Carreras" },
  ]

  return (
    <div className="min-h-screen bg-white font-poppins">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-12">
          Mapa del Sitio
        </h1>
        <ul className="space-y-4">
          {pages.map((page) => (
            <li key={page.url}>
              <Link href={page.url} className="text-lg text-emerald-600 hover:underline">
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
