'use client'

export default function Footer() {
  return (
    <footer className="bg-quiet-brown text-quiet-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Ana Paula Amaral</h3>
            <p className="text-quiet-white opacity-70 text-sm leading-relaxed">
              Especialista em pós-operatório com 10 anos de experiência. Atendimento exclusivo e acolhedor.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4 text-quiet-gold">Especialidade</h4>
            <ul className="space-y-2 text-sm text-quiet-white opacity-70">
              <li>
                <a href="#servicos" className="hover:text-quiet-gold transition-colors">
                  Drenagem pós-lipo
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-quiet-gold transition-colors">
                  Pós-abdominoplastia
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-quiet-gold transition-colors">
                  Pós-prótese de mama
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-quiet-gold transition-colors">
                  Pós-BBL
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-quiet-gold transition-colors">
                  Tratamentos faciais e corporais
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4 text-quiet-gold">Contato</h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/5521999999999"
                className="text-quiet-white opacity-70 hover:text-quiet-gold transition-colors block"
              >
                📱 WhatsApp
              </a>
              <a
                href="https://instagram.com"
                className="text-quiet-white opacity-70 hover:text-quiet-gold transition-colors block"
              >
                📸 Instagram
              </a>
              <p className="text-quiet-white opacity-70">
                📍 Atendimento domiciliar<br/>
                Tijuca e Zona Sul - RJ
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-quiet-gold opacity-30 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-quiet-white opacity-60">
          <p>© 2026 Ana Paula Amaral. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Desenvolvido com cuidado ✨</p>
        </div>
      </div>
    </footer>
  )
}
