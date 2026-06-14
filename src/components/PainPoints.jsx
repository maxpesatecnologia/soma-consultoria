import './PainPoints.css'

const pains = [
  {
    q: '"Minha carga tributária consome minha margem"',
    a: 'Você trabalha duro, mas os impostos levam a maior fatia do lucro.',
  },
  {
    q: '"Meu contador já faz isso — não preciso de mais ninguém"',
    a: 'Contadores cuidam do presente. Auditoria retroativa de 5 anos exige metodologia especializada.',
  },
  {
    q: '"Tenho medo de chamar atenção da Receita Federal"',
    a: 'Recuperar créditos é um direito legal previsto no CTN — não é \'malandragem fiscal\'.',
  },
  {
    q: '"Não sei se tenho créditos a recuperar"',
    a: 'Estudos mostram: 95% das empresas têm créditos — a maioria nunca soube.',
  },
  {
    q: '"Não posso pagar por mais um serviço agora"',
    a: 'Com a SOMA, você não paga NADA antecipado. Só pagamos juntos se você ganhar.',
  },
  {
    q: '"Já fui enganado antes por serviços assim"',
    a: 'Trabalhamos com contratos claros, teses pacificadas nos tribunais e transparência total.',
  },
]

export default function PainPoints() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <span className="section-label">A realidade de 95% das empresas brasileiras</span>
        <h2 className="section-title">Você se identifica com isso?</h2>
        <p className="section-subtitle" style={{ marginBottom: 48 }}>
          Se alguma dessas frases passou pela sua cabeça, saiba: você não está sozinho —
          e a solução é mais simples do que parece.
        </p>
        <div className="grid-2 pain-grid">
          {pains.map((p, i) => (
            <div key={i} className="pain-card">
              <div className="pain-icon">!</div>
              <div className="pain-content">
                <p className="pain-q">{p.q}</p>
                <p className="pain-a">{p.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
