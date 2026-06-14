import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container hero-inner">
        <div className="hero-badge">PROPOSTA EXCLUSIVA</div>
        <h1 className="hero-title">
          Sua empresa está{' '}
          <span className="highlight">pagando impostos<br />a mais</span>{' '}
          — e você<br />
          <span className="highlight-yellow">provavelmente não sabe.</span>
        </h1>
        <p className="hero-subtitle">
          A SOMA recupera o que é seu — sem risco, sem custo antecipado.
          Diagnóstico 100% gratuito em até 48 horas.
        </p>
        <div className="hero-actions">
          <a href="#diagnostico" className="btn btn-green hero-cta">
            Descubra quanto você tem a recuperar →
          </a>
          <a href="#como-funciona" className="btn btn-outline">
            Como funciona
          </a>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-icon">✓</span> Diagnóstico gratuito
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span> Resultado em até 48h
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span> Zero risco — só paga no êxito
          </div>
        </div>
      </div>
    </section>
  )
}
