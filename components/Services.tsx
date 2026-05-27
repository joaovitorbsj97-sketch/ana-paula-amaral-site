'use client'

export default function Services() {
  const posOp = [
    {
      name: 'Drenagem Pós-Lipo',
      description: 'Reduz inchaço, acelera cicatrização e melhora simetria após lipoaspiração',
    },
    {
      name: 'Pós-Abdominoplastia',
      description: 'Cuidados específicos para cicatriz abdominal e recuperação completa',
    },
    {
      name: 'Pós-Prótese de Mama',
      description: 'Acompanhamento delicado durante encapsulação e estabilização',
    },
    {
      name: 'Pós-BBL',
      description: 'Protocolo especial para enxertia de gordura com máximo cuidado',
    },
    {
      name: 'Drenagem Pré-Operatória',
      description: 'Preparo do organismo nas semanas que antecedem a cirurgia para uma recuperação mais leve',
    },
    {
      name: 'Taping Linfático',
      description: 'Bandagens terapêuticas que potencializam o efeito da drenagem entre as sessões',
    },
  ]

  const corporais = [
    'Massagem drenorelaxante',
    'Redução de medidas',
    'Fortalecimento muscular (glúteo, braços, abdômen, coxas)',
    'Esfoliação e hidratação corporal',
    'Detox corporal',
    'Rejuvenescimento de mãos, braços e cotovelos',
    'Ozonioterapia',
    'Celulite, cicatrizes e estrias',
  ]

  const faciais = [
    'Limpeza de pele',
    'Microagulhamento (indução de colágeno e clareamento)',
    'Revitalização facial',
    'Peeling químico',
    'Hidra Gloss Lips',
    'Tratamento de acne, manchas e melasmas',
  ]

  return (
    <section id="servicos" className="section-spacing bg-quiet-sand">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-4">Especialidade</h2>
        <p className="text-center text-quiet-brown opacity-70 mb-16 max-w-2xl mx-auto">
          Drenagem linfática manual em pós-operatório de cirurgias plásticas — método Leduc, protocolo personalizado por cirurgia e fase de recuperação.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {posOp.map((service, idx) => (
            <div
              key={idx}
              className="bg-quiet-white p-8 rounded-lg border border-quiet-nude hover:border-quiet-gold transition-colors"
            >
              <h3 className="font-playfair font-bold text-quiet-brown mb-3 text-lg">
                {service.name}
              </h3>
              <p className="text-quiet-brown opacity-70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="subtle-divider max-w-xs mx-auto mb-16"></div>

        <h3 className="text-2xl md:text-3xl font-playfair font-bold text-quiet-brown text-center mb-4">
          Também atendo
        </h3>
        <p className="text-center text-quiet-brown opacity-70 mb-12 max-w-2xl mx-auto">
          Para quem busca cuidado contínuo além do pós-operatório.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-quiet-white p-8 rounded-lg border border-quiet-nude">
            <h4 className="font-playfair font-bold text-quiet-brown mb-6 text-xl">
              Corporal
            </h4>
            <ul className="space-y-3">
              {corporais.map((item, idx) => (
                <li key={idx} className="text-quiet-brown opacity-75 text-sm leading-relaxed flex items-start">
                  <span className="text-quiet-gold mr-3 mt-1">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-quiet-white p-8 rounded-lg border border-quiet-nude">
            <h4 className="font-playfair font-bold text-quiet-brown mb-6 text-xl">
              Facial
            </h4>
            <ul className="space-y-3">
              {faciais.map((item, idx) => (
                <li key={idx} className="text-quiet-brown opacity-75 text-sm leading-relaxed flex items-start">
                  <span className="text-quiet-gold mr-3 mt-1">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-quiet-brown opacity-70 mb-6">
            Cada protocolo é avaliado e personalizado conforme seu caso.
          </p>
          <a
            href="https://wa.me/5521997378503"
            className="btn-primary inline-block"
          >
            Agendar Avaliação
          </a>
        </div>
      </div>
    </section>
  )
}
