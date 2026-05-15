'use client'

import { useState } from 'react'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Quanto tempo após a cirurgia posso começar?',
      a: 'Idealmente entre 3-7 dias após a cirurgia, assim que o cirurgião liberar. Vamos respeitar totalmente as recomendações do seu médico.',
    },
    {
      q: 'Preciso fazer drenagem TODOS os dias?',
      a: 'Depende da fase. Semanas 1-2 (inchaço máximo): sim, diariamente. Semanas 3-6: 3-4x por semana. Semanas 6+: 1-2x por semana ou manutenção. Tudo personalizado.',
    },
    {
      q: 'Quanto custa uma sessão?',
      a: 'Varia conforme o procedimento. Ofereço pacotes (10, 20 ou 30 sessões) com valores mais competitivos. Entre em contato para um orçamento personalizado.',
    },
    {
      q: 'Você atende em qual região?',
      a: 'Atendo em domicílio na Tijuca, Zona Sul e bairros adjacentes do Rio de Janeiro. Agendo conforme sua conveniência.',
    },
    {
      q: 'O atendimento é confidencial?',
      a: 'Totalmente. Meu consultório é home office com privacidade total. Sigilo profissional garantido.',
    },
    {
      q: 'Qual é a diferença entre drenagem manual e aparelhada?',
      a: 'Manual (Leduc) oferece controle total, sensibilidade e é menos agressiva. Aparelhada é mais rápida mas menos personalizável. Para pós-op, manual é mais recomendada.',
    },
  ]

  return (
    <section className="section-spacing bg-quiet-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title text-center mb-12">Dúvidas Frequentes</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-quiet-nude rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-quiet-sand transition-colors"
              >
                <h3 className="font-montserrat font-semibold text-quiet-brown">
                  {faq.q}
                </h3>
                <span className="text-quiet-gold text-xl">
                  {open === idx ? '−' : '+'}
                </span>
              </button>

              {open === idx && (
                <div className="px-6 py-4 bg-quiet-sand border-t border-quiet-nude">
                  <p className="text-quiet-brown opacity-80 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-quiet-nude">
          <p className="text-quiet-brown opacity-70 mb-4">
            Sua dúvida não está aqui?
          </p>
          <a
            href="https://wa.me/5521999999999"
            className="text-quiet-gold hover:text-quiet-brown transition-colors font-montserrat font-semibold"
          >
            Me escreva no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
