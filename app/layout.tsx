import { Poppins } from "next/font/google"
import "./globals.css"
import HeaderAndFooter from "@/components/layout/HeaderAndFooter"
import { Metadata } from 'next'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trykalo.app'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans bg-white font-poppins`}>
        <HeaderAndFooter>{children}</HeaderAndFooter>
      </body>
    </html>
  )
}
