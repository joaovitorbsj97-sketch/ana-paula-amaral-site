'use client'

export default function Services() {
  const services = [
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
      name: 'Massagem Modeladora',
      description: 'Manutenção e contorno corporal após cicatrização completa',
    },
    {
      name: 'Acompanhamento Mensal',
      description: 'Sessões de manutenção após o pacote principal de recuperação',
    },
  ]

  return (
    <section id="servicos" className="section-spacing bg-quiet-sand">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-16">Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
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

        <div className="text-center mt-16">
          <p className="text-quiet-brown opacity-70 mb-6">
            Cada serviço é personalizado conforme sua cirurgia e fase de recuperação.
          </p>
          <a
            href="https://wa.me/5521999999999"
            className="btn-primary inline-block"
          >
            Consulte Valores
          </a>
        </div>
      </div>
    </section>
  )
}
