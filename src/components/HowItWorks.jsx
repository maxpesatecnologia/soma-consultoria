import './HowItWorks.css'

const steps = [
  { n: '01', icon: '🔍', title: 'Diagnóstico Gratuito', time: '48h', desc: 'Analisamos seu CNPJ. Você vê os números reais antes de decidir.' },
  { n: '02', icon: '📄', title: 'Assinatura do Contrato', time: '1 dia', desc: 'Contrato claro, sem letras miúdas. Você assina quando quiser avançar.' },
  { n: '03', icon: '🛡️', title: 'Auditoria Fiscal', time: '15-30 dias', desc: 'Nossa equipe faz o trabalho pesado. Você só fornece os documentos.' },
  { n: '04', icon: '⚖️', title: 'Pedido Administrativo', time: '15-90 dias', desc: 'PER/DCOMP transmitido à Receita Federal. Acompanhamento total.' },
  { n: '05', icon: '💰', title: 'Crédito na Conta', time: 'Após êxito', desc: 'Você recebe o crédito. Só então emitimos nossa cobrança de honorários.' },
]

export default function HowItWorks() {
  return (
    <section className="section section-alt" id="como-funciona">
      <div className="container">
        <span className="section-label">Processo</span>
        <h2 className="section-title">
          Como funciona —{' '}
          <span className="highlight">simples e sem burocracia</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 64 }}>
          Do diagnóstico ao dinheiro na conta — você acompanha cada passo.
        </p>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={i} className="step">
              <div className="step-num">{s.n}</div>
              <div className="step-line" />
              <div className="step-body">
                <div className="step-icon">{s.icon}</div>
                <div className="step-time">{s.time}</div>
                <h4 className="step-title">{s.title}</h4>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="risk-zero">
          <span className="risk-icon">✓</span>
          <strong>RISCO ZERO:</strong> Se não encontrarmos créditos, você não paga absolutamente nada.
        </div>
      </div>
    </section>
  )
}
