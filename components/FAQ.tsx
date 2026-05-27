'use client'

import { useState } from 'react'
import { faqs } from '@/lib/faqs'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

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
            href="https://wa.me/5521997378503"
            className="text-quiet-gold hover:text-quiet-brown transition-colors font-montserrat font-semibold"
          >
            Me escreva no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
