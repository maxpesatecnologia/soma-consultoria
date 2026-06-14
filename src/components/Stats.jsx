import './Stats.css'

const stats = [
  { value: 'R$ 150bi', label: 'pagos a mais por empresas por ano', color: 'yellow' },
  { value: '95%', label: 'das empresas têm créditos a recuperar', color: 'cyan' },
  { value: '5 anos', label: 'é o prazo antes que os créditos prescrevam', color: 'orange' },
  { value: '53%', label: 'crescimento do setor em 2024', color: 'green' },
]

export default function Stats() {
  return (
    <section className="stats section-alt">
      <div className="container">
        <div className="stats-alert">
          <span className="alert-icon">⚠</span>
          <div>
            <strong>ATENÇÃO:</strong> A Reforma Tributária (EC 132/2023) cria uma janela de oportunidade única até 2033.{' '}
            Créditos do sistema antigo precisam ser recuperados <strong>AGORA</strong> — depois será tarde demais.
          </div>
        </div>
        <div className="grid-4 stats-grid">
          {stats.map((s, i) => (
            <div key={i} className={`stat-card stat-${s.color}`}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
