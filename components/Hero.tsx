'use client'

import { useState } from 'react'

export default function Hero() {
  return (
    <section className="hero-spacing bg-quiet-white min-h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl mx-auto">
        {/* Placeholder para foto profissional */}
        <div className="mb-12 w-80 h-80 mx-auto bg-quiet-sand rounded-lg flex items-center justify-center">
          <div className="text-quiet-brown text-center">
            <p className="text-sm opacity-60">Foto profissional (480x480px)</p>
            <p className="text-xs opacity-40 mt-2">Será colocada aqui</p>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-quiet-brown mb-6">
          Ana Paula Amaral
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-quiet-brown opacity-80 mb-4 font-light">
          Especialista em Pós-Operatório
        </p>

        {/* Descrição */}
        <p className="text-lg text-quiet-brown opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ajudo mulheres a recuperarem a autoestima e a saúde no pós-operatório com tratamentos exclusivos e atendimento premium intimista no meu consultório home office.
        </p>

        {/* CTA Principal */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5521999999999"
            className="btn-primary inline-block"
          >
            Agendar Avaliação
          </a>
          <a
            href="#servicos"
            className="px-8 py-4 rounded-lg font-montserrat font-medium text-quiet-brown border-2 border-quiet-brown hover:bg-quiet-brown hover:text-quiet-white transition-colors"
          >
            Conheça os Serviços
          </a>
        </div>

        {/* Divisor sutil */}
        <div className="subtle-divider my-16 max-w-xs mx-auto"></div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-playfair font-bold text-quiet-gold">10+</p>
            <p className="text-sm text-quiet-brown opacity-60">Anos de Experiência</p>
          </div>
          <div>
            <p className="text-3xl font-playfair font-bold text-quiet-gold">500+</p>
            <p className="text-sm text-quiet-brown opacity-60">Pacientes Atendidas</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-3xl font-playfair font-bold text-quiet-gold">Leduc</p>
            <p className="text-sm text-quiet-brown opacity-60">Méthode Certificada</p>
          </div>
        </div>
      </div>
    </section>
  )
}
