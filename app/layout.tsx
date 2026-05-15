import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ana Paula Amaral | Especialista em Pós-Operatório',
  description: 'Drenagem linfática, pós-operatório de cirurgias plásticas. Atendimento premium domiciliar em Tijuca e Zona Sul, Rio de Janeiro.',
  keywords: 'drenagem linfática, pós-operatório, lipo, esteticista, Rio de Janeiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-quiet-white text-quiet-brown">
        {children}
      </body>
    </html>
  )
}
