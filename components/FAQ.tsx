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
      a: 'Depende da fase. Semanas 1-2 (inchaço máximo): sim, diariamente. Semanas 3-6: 3-4x por semana. Semanas 6+: 1-2x por semana ou manutenção. Tudo personalizado conforme sua cirurgia e evolução.',
    },
    {
      q: 'Só 10 sessões resolvem ou vou precisar de mais?',
      a: 'O pacote de 10 sessões é o ponto de partida e atende a maior parte dos casos no pós-operatório imediato. A quantidade ideal, porém, depende da sua cirurgia, do seu corpo e da fase de recuperação — é definida na avaliação inicial e ajustada ao longo do tratamento. Você não fica refém de um número fixo: o protocolo evolui com você.',
    },
    {
      q: 'O pacote tem condição diferente da sessão avulsa?',
      a: 'Sim. Fechar o pacote completo significa garantir o protocolo inteiro, com agenda reservada e continuidade — que é o que realmente entrega resultado no pós-op. Os valores do pacote são pensados pra isso. Detalhes do investimento e formas de pagamento conversamos diretamente no WhatsApp.',
    },
    {
      q: 'É possível parcelar?',
      a: 'Sim. Parcelo o pacote em até 4x sem juros no cartão. Para pagamento à vista no Pix, ofereço 5% de desconto. Combinamos o melhor formato pra você no WhatsApp.',
    },
    {
      q: 'Você atende em qual região?',
      a: 'Atendo em consultório home office, com privacidade total. A região e o agendamento são confirmados diretamente comigo no WhatsApp.',
    },
    {
      q: 'O atendimento é confidencial?',
      a: 'Totalmente. O consultório é home office, com privacidade total. Sigilo profissional garantido — entendo o quanto esse momento pede discrição.',
    },
    {
      q: 'Qual é a diferença entre drenagem manual e aparelhada?',
      a: 'A drenagem manual pelo método Leduc oferece controle total, sensibilidade e personalização sessão a sessão — é menos agressiva e adapta a pressão ao seu tecido naquele dia. A aparelhada é mais rápida, mas menos sensível. Para pós-operatório, a manual é o padrão-ouro.',
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
