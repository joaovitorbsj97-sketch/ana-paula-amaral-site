import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsappFloat from '@/components/WhatsappFloat'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Footer />
      <WhatsappFloat />
    </main>
  )
}
