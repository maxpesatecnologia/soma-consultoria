import './Testimonials.css'

const testimonials = [
  {
    text: 'Eu desconfiava muito no início. Achei que era mais um serviço promessa. Mas a SOMA me mostrou os números ANTES de assinar qualquer coisa. Recuperamos R$ 127.000 em créditos que meu contador nem sabia que existiam. Fiquei envergonhado de ter esperado tanto tempo.',
    value: 'R$ 127.000 recuperados',
    name: 'Carlos Mendonça',
    role: 'Diretor — Distribuidora de Autopeças',
  },
  {
    text: 'Minha primeira reação foi: \'não preciso disso, meu contador é excelente\'. Mas o diagnóstico gratuito mudou tudo — R$ 83.000 que eu estava perdendo há anos. O processo foi 100% transparente, sem surpresas. Recomendo sem hesitar.',
    value: 'R$ 83.000 recuperados',
    name: 'Ana Paula Rocha',
    role: 'Sócia-Proprietária — Rede de Farmácias',
  },
  {
    text: 'Já tinha tentado com outra empresa e levei um susto. A SOMA foi completamente diferente: me mostraram exatamente quais leis amparam os créditos, assinei o contrato confiante e em 60 dias o dinheiro estava disponível para compensação. Profissionalismo de outro nível.',
    value: 'R$ 412.000 recuperados',
    name: 'Roberto Figueiredo',
    role: 'CFO — Indústria Alimentícia',
  },
]

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container">
        <span className="section-label">Depoimentos</span>
        <h2 className="section-title">
          O que nossos clientes dizem
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 56 }}>
          Resultados reais de empresas reais — sem promessas vazias.
        </p>
        <div className="grid-3 testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-value">{t.value}</div>
              <div className="testi-author">
                <div className="testi-avatar">{t.name[0]}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
