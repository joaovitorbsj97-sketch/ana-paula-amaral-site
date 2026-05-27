import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import './globals.css'

const SITE_URL = 'https://ana-paula-amaral-site-okaz.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Esteticista Pós-Operatório no Rio de Janeiro | Ana Paula Amaral',
  description:
    'Drenagem linfática pós-operatória pelo método Leduc com atendimento a domicílio na Zona Sul, Barra da Tijuca e Tijuca. 10 anos de experiência em pós-lipo, abdominoplastia, prótese e BBL.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Ana Paula Amaral',
    title: 'Esteticista Pós-Operatório no Rio de Janeiro | Ana Paula Amaral',
    description:
      'Drenagem linfática pós-operatória manual, método Leduc. Atendimento a domicílio na Zona Sul, Barra da Tijuca e Tijuca.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esteticista Pós-Operatório no Rio de Janeiro | Ana Paula Amaral',
    description:
      'Drenagem linfática pós-operatória manual, método Leduc. Atendimento a domicílio na Zona Sul, Barra da Tijuca e Tijuca.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-quiet-white text-quiet-brown">
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
