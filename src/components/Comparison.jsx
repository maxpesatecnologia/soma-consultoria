import './Comparison.css'

const items = [
  ['Paga impostos em excesso todo mês', 'Descobre e elimina o pagamento duplicado'],
  ['Créditos prescrevem sem ser recuperados', 'Recupera até 5 anos retroativos de créditos'],
  ['Capital travado no governo', 'Capital liberado para investir no negócio'],
  ['Nenhum suporte em caso de fiscalização', 'Equipe OAB responde qualquer intimação'],
  ['Processo complexo por conta própria', 'Processo 100% conduzido por especialistas'],
]

export default function Comparison() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">Comparativo</span>
        <h2 className="section-title">
          Sem a SOMA <span className="highlight">vs.</span> Com a SOMA
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 48 }}>
          A diferença entre esperar e agir.
        </p>
        <div className="comparison-grid">
          <div className="comp-col comp-bad">
            <div className="comp-header comp-header-bad">❌ SEM A SOMA</div>
            {items.map((it, i) => (
              <div key={i} className="comp-item comp-item-bad">
                <span className="comp-x">✗</span> {it[0]}
              </div>
            ))}
          </div>
          <div className="comp-col comp-good">
            <div className="comp-header comp-header-good">✅ COM A SOMA</div>
            {items.map((it, i) => (
              <div key={i} className="comp-item comp-item-good">
                <span className="comp-check">✓</span> {it[1]}
              </div>
            ))}
          </div>
        </div>
        <div className="comp-cta">
          A diferença? Uma conversa de 30 minutos com a SOMA.{' '}
          <a href="#diagnostico" className="comp-cta-link">
            Diagnóstico gratuito, sem compromisso. →
          </a>
        </div>
      </div>
    </section>
  )
}
