import './WhoIsSoma.css'

const pillars = [
  {
    icon: '⚖️',
    title: '100% Fundamentado em Lei',
    desc: 'Trabalhamos apenas com teses aprovadas pelo STF e STJ. Nenhuma aventura jurídica — só direitos comprovados.',
    color: 'cyan',
  },
  {
    icon: '🏅',
    title: 'Equipe Multidisciplinar',
    desc: 'Contadores (CRC), advogados tributaristas (OAB) e especialistas em tecnologia fiscal trabalhando juntos por você.',
    color: 'yellow',
  },
  {
    icon: '🛡️',
    title: 'Transparência Total',
    desc: 'Você acompanha cada etapa, recebe relatórios detalhados e sabe exatamente o que está sendo recuperado e por quê.',
    color: 'blue',
  },
  {
    icon: '🔒',
    title: 'Sigilo Absoluto',
    desc: 'Contrato com cláusulas de confidencialidade. Seus dados fiscais são tratados com máxima segurança e discrição.',
    color: 'green',
  },
]

export default function WhoIsSoma() {
  return (
    <section className="section section-alt who-soma" id="quem-somos">
      <div className="container">
        <div className="who-layout">
          <div className="who-left">
            <span className="section-label">Quem somos</span>
            <h2 className="section-title">
              Especialistas dedicados exclusivamente à{' '}
              <span className="highlight">recuperação de créditos tributários</span>
            </h2>
            <p className="section-subtitle">
              A Soma Consultoria Fiscal transforma complexidade tributária em decisões estratégicas.
              Atuamos com rigor técnico, ética e visão de futuro para impulsionar o sucesso do seu negócio.
            </p>
            <blockquote className="who-quote">
              "Sua empresa merece recuperar o que é seu."
            </blockquote>
            <a href="#diagnostico" className="btn btn-primary" style={{ marginTop: 32 }}>
              Solicitar diagnóstico gratuito
            </a>
          </div>
          <div className="grid-2 who-right">
            {pillars.map((p, i) => (
              <div key={i} className={`pillar-card pillar-${p.color}`}>
                <div className="pillar-icon">{p.icon}</div>
                <h4 className="pillar-title">{p.title}</h4>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
