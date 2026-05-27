'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-spacing bg-quiet-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Foto profissional contextual */}
        <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden ring-1 ring-quiet-nude shadow-sm">
          <Image
            src="/sobre-ana.jpg"
            alt="Ana Paula Amaral — esteticista especialista em pós-operatório"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="section-title">Quem Sou</h2>

          <p className="text-lg text-quiet-brown opacity-80 mb-6 leading-relaxed">
            Sou <span className="font-semibold">esteticista especializada em pós-operatório</span> com <span className="font-semibold">10 anos de experiência</span> cuidando de mulheres em seus momentos mais delicados.
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <h3 className="font-montserrat font-semibold text-quiet-brown mb-2">Formação</h3>
              <p className="text-quiet-brown opacity-70">
                Esteticista e Cosmetóloga certificada com especialização em <span className="font-semibold">Leduc Méthode</span> — técnica de drenagem linfática de reconhecimento internacional pela Ecole de Drainage Lymphatique de Bruxelles.
              </p>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold text-quiet-brown mb-2">Especialidade</h3>
              <p className="text-quiet-brown opacity-70">
                Meu foco é o atendimento pós-operatório de cirurgias plásticas: lipoaspiração, abdominoplastia, prótese de mama, BBL. Cada paciente recebe um protocolo personalizado baseado em sua cirurgia.
              </p>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold text-quiet-brown mb-2">Abordagem</h3>
              <p className="text-quiet-brown opacity-70">
                Acredito que pós-operatório vai além de técnica. É acolhimento, educação e presença. Por isso atendo a domicílio — você recebe o cuidado na privacidade da sua casa, sem precisar se deslocar nesse momento delicado de recuperação.
              </p>
            </div>
          </div>

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
