import './Pricing.css'

const rows = [
  { porte: 'Micro/Pequena (Simples)', fat: 'Até R$ 4,8M', pot: 'R$ 15.000 – R$ 300.000', fee: '30% do êxito' },
  { porte: 'Média (Lucro Presumido)', fat: 'R$ 4,8M – R$ 78M', pot: 'R$ 100.000 – R$ 1.500.000', fee: '25% do êxito' },
  { porte: 'Grande (Lucro Real)', fat: 'Acima de R$ 78M', pot: 'R$ 500.000 – R$ 3.000.000+', fee: '20% do êxito' },
  { porte: 'Corporação', fat: 'Acima de R$ 300M', pot: 'Média R$ 17,36M por CNPJ', fee: 'Negociado' },
]

export default function Pricing() {
  return (
    <section className="section" id="resultados">
      <div className="container">
        <span className="section-label">Valores médios</span>
        <h2 className="section-title">
          Quanto vale para a{' '}
          <span className="highlight">sua empresa?</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 48 }}>
          Valores médios identificados por porte — sem comprometimento de capital.
          R$ 0 antecipado em todos os casos.
        </p>
        <div className="pricing-table-wrap">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Porte da Empresa</th>
                <th>Faturamento Anual</th>
                <th>Potencial de Recuperação</th>
                <th>Você paga apenas</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.porte}</td>
                  <td className="td-fat">{r.fat}</td>
                  <td className="td-pot">{r.pot}</td>
                  <td className="td-fee">
                    <span className="fee-badge">{r.fee} — R$ 0 antecipado</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pricing-note">
          💰 <strong>SE VOCÊ NÃO TEM CRÉDITOS:</strong> você não paga NADA.
          Se tem: recebe de volta muito mais do que o honorário.
        </div>
      </div>
    </section>
  )
}
