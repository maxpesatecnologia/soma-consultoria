import './Services.css'

const services = [
  {
    badge: '✅ STF APROVADO',
    badgeColor: 'green',
    meta: 'Até R$ 358bi',
    title: 'PIS/COFINS sobre ICMS',
    desc: 'A "Tese do Século" — gerou R$ 358 bilhões em créditos. Válida para Lucro Real e Presumido.',
  },
  {
    badge: '✅ LC 123/2006',
    badgeColor: 'green',
    meta: 'Até 1,98% do fat.',
    title: 'PIS/COFINS Monofásico',
    desc: 'Simples Nacional pagando impostos em duplicidade. Farmácias, autopeças, supermercados e mais.',
  },
  {
    badge: '✅ STJ APROVADO',
    badgeColor: 'green',
    meta: 'Até 30% da folha',
    title: 'INSS sobre Verbas Indeniz.',
    desc: 'Aviso prévio, afastamento, salário-maternidade. Redução de até 30% na folha de pagamento.',
  },
  {
    badge: '✅ STF APROVADO',
    badgeColor: 'green',
    meta: 'Retroativo 5 anos',
    title: 'IRPJ/CSLL sobre SELIC',
    desc: 'Imposto pago sobre juros de restituição. Recuperação histórica com correção pela SELIC.',
  },
  {
    badge: '🔄 STJ FAVORÁVEL',
    badgeColor: 'yellow',
    meta: 'Por empresa',
    title: 'ICMS-ST Pago a Mais',
    desc: 'Quando preço presumido supera o real, você tem direito à diferença. Todos os estados.',
  },
  {
    badge: '✅ ADMINISTRATIVO',
    badgeColor: 'cyan',
    meta: 'Alíquota 9,25%',
    title: 'Créditos PIS/COFINS',
    desc: 'Créditos sobre insumos, energia, aluguéis e depreciação não aproveitados nos últimos 5 anos.',
  },
]

export default function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <span className="section-label">O que recuperamos para você</span>
        <h2 className="section-title">
          Teses aprovadas nos tribunais superiores —{' '}
          <span className="highlight">direitos reais, resultados reais</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 56 }}>
          Trabalhamos exclusivamente com teses pacificadas pelo STF e STJ.
          Cada crédito tem fundamento legal documentado.
        </p>
        <div className="grid-3 services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-header">
                <span className={`service-badge badge-${s.badgeColor}`}>{s.badge}</span>
                <span className="service-meta">{s.meta}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
