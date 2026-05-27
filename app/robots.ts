import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://ana-paula-amaral-site-okaz.vercel.app/sitemap.xml',
    host: 'https://ana-paula-amaral-site-okaz.vercel.app',
  }
}
