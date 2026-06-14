import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: '"Isso vai chamar atenção da Receita?"',
    a: 'Não. Recuperar créditos é um DIREITO previsto no art. 165 do CTN. É tão legal quanto pagar impostos. A Receita Federal processa milhares de PER/DCOMPs diariamente. Trabalhamos com teses aprovadas pelos próprios tribunais do governo.',
  },
  {
    q: '"Meu contador já cuida disso."',
    a: 'Seu contador faz um excelente trabalho no dia a dia. A auditoria retroativa de 60 meses exige softwares específicos e metodologia especializada. Trabalhamos EM PARCERIA com seu contador — somos complementares, não concorrentes.',
  },
  {
    q: '"Já me ofereceram isso antes e perdi a confiança."',
    a: 'Entendemos sua desconfiança — o mercado tem aventureiros. Por isso apresentamos contrato claro, mostramos as decisões judiciais, trabalhamos só com teses consolidadas e cobramos apenas no êxito. Você vê os números ANTES de assinar.',
  },
  {
    q: '"E se a Receita rejeitar meu crédito?"',
    a: 'Trabalhamos apenas com teses de alto percentual de aprovação. Documentamos tudo rigorosamente. Em caso de contestação, nossa equipe responde as intimações sem custo adicional. Seu risco é calculado e gerenciado por nós.',
  },
  {
    q: '"Quanto tempo leva o processo?"',
    a: 'Diagnóstico em 48h. Auditoria completa em 15-30 dias. Recuperação administrativa: 15-90 dias. Restituição para Simples Nacional: até 60 dias. Para Lucro Presumido/Real: até 6 meses.',
  },
  {
    q: '"Preciso contratar advogado ou contador?"',
    a: 'Não. Nossa equipe já inclui contadores CRC e advogados OAB. Você contrata a SOMA e nós cuidamos de toda a parte técnica, administrativa e jurídica.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section" id="faq">
      <div className="container">
        <span className="section-label">Suas dúvidas, respondidas com honestidade</span>
        <h2 className="section-title">
          Perguntas <span className="highlight">frequentes</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 48 }}>
          Transparência é o nosso diferencial.
        </p>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="faq-arrow">{open === i ? '▲' : '▼'}</span>
              </button>
              {open === i && (
                <div className="faq-a">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
