import './Guarantees.css'

const guarantees = [
  { icon: '💰', tag: 'Zero Risco', title: 'GARANTIA DE ÊXITO', desc: 'Você paga ZERO se não recuperarmos créditos. Nosso sucesso depende 100% do seu sucesso.' },
  { icon: '🛡️', tag: '100% Seguro', title: 'GARANTIA DE SIGILO', desc: 'Contrato com cláusula de confidencialidade. Seus dados fiscais nunca são compartilhados.' },
  { icon: '⚖️', tag: 'Legalmente Seguro', title: 'GARANTIA JURÍDICA', desc: 'Trabalhamos apenas com teses aprovadas pelo STF/STJ. Cada crédito tem fundamento legal.' },
  { icon: '👁️', tag: 'Visibilidade Total', title: 'GARANTIA DE TRANSPARÊNCIA', desc: 'Você recebe relatório detalhado de cada crédito identificado antes de autorizar qualquer pedido.' },
  { icon: '🏅', tag: 'Profissionais Habilitados', title: 'GARANTIA DE EQUIPE', desc: 'Contadores CRC e advogados OAB responsáveis por cada processo. Profissionais habilitados.' },
  { icon: '⏱️', tag: 'Prazos Reais', title: 'GARANTIA DE PRAZO', desc: 'Diagnóstico em até 48h. Relatório completo em até 30 dias. Sem enrolação, sem promessas vazias.' },
]

export default function Guarantees() {
  return (
    <section className="section section-alt">
      <div className="container">
        <span className="section-label">Compromissos que colocamos em contrato</span>
        <h2 className="section-title">
          Nossas garantias para <span className="highlight">você</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 56 }}>
          Não apenas em palavras — em cláusulas contratuais.
        </p>
        <div className="grid-3 guarantees-grid">
          {guarantees.map((g, i) => (
            <div key={i} className="guarantee-card">
              <div className="g-top">
                <span className="g-icon">{g.icon}</span>
                <span className="g-tag">{g.tag}</span>
              </div>
              <h4 className="g-title">{g.title}</h4>
              <p className="g-desc">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
