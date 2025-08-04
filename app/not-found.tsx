import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <h1 className="text-9xl font-bold text-emerald-500">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">Página no encontrada</h2>
      <p className="text-gray-600 mt-2 max-w-md">
        Lo sentimos, pero la página que buscas no existe o ha sido movida.
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  )
}
