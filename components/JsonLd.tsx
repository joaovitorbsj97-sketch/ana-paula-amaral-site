import { faqs } from '@/lib/faqs'

const SITE_URL = 'https://ana-paula-amaral-site-okaz.vercel.app'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: 'Ana Paula Amaral — Esteticista Pós-Operatório',
  alternateName: 'Ana Paula Amaral Estética',
  description:
    'Drenagem linfática pós-operatória manual (método Leduc) com atendimento a domicílio na Zona Sul, Barra da Tijuca e Tijuca, no Rio de Janeiro. Especialista em pós-lipo, pós-abdominoplastia, pós-prótese de mama e pós-BBL.',
  url: SITE_URL,
  logo: `${SITE_URL}/apple-icon.png`,
  image: [
    `${SITE_URL}/hero-ana.jpg`,
    `${SITE_URL}/sobre-ana.jpg`,
    `${SITE_URL}/opengraph-image.png`,
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rio de Janeiro',
    addressRegion: 'RJ',
    addressCountry: 'BR',
  },
  telephone: '+5521997378503',
  priceRange: '$$$',
  foundingDate: '2015',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Cash, Credit Card, Pix',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -22.97,
    longitude: -43.22,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Zona Sul do Rio de Janeiro' },
    { '@type': 'AdministrativeArea', name: 'Barra da Tijuca' },
    { '@type': 'AdministrativeArea', name: 'Tijuca' },
    { '@type': 'City', name: 'Rio de Janeiro' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: -22.97,
      longitude: -43.22,
    },
    geoRadius: 20000,
  },
  knowsAbout: [
    'Drenagem linfática manual',
    'Método Leduc',
    'Pós-operatório de lipoaspiração',
    'Pós-operatório de abdominoplastia',
    'Pós-operatório de prótese de mama',
    'Pós-operatório de BBL',
    'Taping linfático',
    'Microagulhamento',
    'Peeling químico',
  ],
  sameAs: ['https://instagram.com/anamarinsesteticista'],
  founder: { '@id': `${SITE_URL}/#person` },
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Drenagem linfática pós-lipoaspiração',
        serviceType: 'Pós-operatório',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Drenagem linfática pós-abdominoplastia',
        serviceType: 'Pós-operatório',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Drenagem linfática pós-prótese de mama',
        serviceType: 'Pós-operatório',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Drenagem linfática pós-BBL',
        serviceType: 'Pós-operatório',
      },
    },
  ],
}

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Ana Paula Amaral',
  jobTitle: 'Esteticista e Cosmetóloga — Especialista em Pós-Operatório',
  description:
    'Esteticista e cosmetóloga com 10 anos de experiência, especializada em drenagem linfática pós-operatória pelo método Leduc.',
  image: `${SITE_URL}/sobre-ana.jpg`,
  url: SITE_URL,
  telephone: '+5521997378503',
  worksFor: { '@id': `${SITE_URL}/#business` },
  knowsAbout: [
    'Drenagem linfática manual',
    'Método Leduc',
    'Pós-operatório de cirurgia plástica',
    'Estética avançada',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'certification',
    name: 'Leduc Méthode',
    recognizedBy: {
      '@type': 'EducationalOrganization',
      name: 'Ecole de Drainage Lymphatique de Bruxelles',
      address: { '@type': 'PostalAddress', addressCountry: 'BE' },
    },
  },
  sameAs: ['https://instagram.com/anamarinsesteticista'],
}

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}
