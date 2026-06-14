import { useState } from 'react'
import './Contact.css'

const WHATSAPP = '5521999999999'

export default function Contact() {
  const [form, setForm] = useState({ nome: '', empresa: '', faturamento: '', email: '', telefone: '' })
  const [sent, setSent] = useState(false)

  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá, SOMA! Gostaria de solicitar um diagnóstico gratuito.\n\nNome: ${form.nome}\nEmpresa: ${form.empresa}\nFaturamento: ${form.faturamento}\nE-mail: ${form.email}\nTelefone: ${form.telefone}`
    )
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section className="section section-alt contact-section" id="diagnostico">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-left">
            <span className="section-label">Diagnóstico gratuito</span>
            <h2 className="section-title">
              Descubra <span className="highlight-yellow">AGORA</span><br />
              quanto sua empresa<br />
              <span className="highlight">tem a recuperar.</span>
            </h2>
            <p className="section-subtitle">
              Sem custo. Sem compromisso. Em até 48 horas.
            </p>
            <div className="contact-checks">
              <div className="contact-check"><span>✓</span> Diagnóstico 100% gratuito</div>
              <div className="contact-check"><span>✓</span> Resultado em até 48h</div>
              <div className="contact-check"><span>✓</span> Você decide depois de ver os números</div>
            </div>
          </div>

          <div className="contact-right">
            {sent ? (
              <div className="contact-success">
                <div className="success-icon">✓</div>
                <h3>Redirecionando para WhatsApp!</h3>
                <p>Estamos prontos para iniciar seu diagnóstico gratuito.</p>
                <button className="btn btn-green" onClick={() => setSent(false)}>
                  Enviar novamente
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div className="form-group">
                  <label>Nome completo *</label>
                  <input name="nome" value={form.nome} onChange={change} required placeholder="Seu nome" />
                </div>
                <div className="form-group">
                  <label>Empresa *</label>
                  <input name="empresa" value={form.empresa} onChange={change} required placeholder="Nome da empresa" />
                </div>
                <div className="form-group">
                  <label>Faturamento anual *</label>
                  <select name="faturamento" value={form.faturamento} onChange={change} required>
                    <option value="">Selecione...</option>
                    <option value="Até R$ 4,8M (Simples Nacional)">Até R$ 4,8M (Simples Nacional)</option>
                    <option value="R$ 4,8M – R$ 78M (Lucro Presumido)">R$ 4,8M – R$ 78M (Lucro Presumido)</option>
                    <option value="Acima de R$ 78M (Lucro Real)">Acima de R$ 78M (Lucro Real)</option>
                    <option value="Acima de R$ 300M (Corporação)">Acima de R$ 300M (Corporação)</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>E-mail *</label>
                    <input name="email" type="email" value={form.email} onChange={change} required placeholder="seu@email.com" />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp *</label>
                    <input name="telefone" value={form.telefone} onChange={change} required placeholder="(11) 99999-9999" />
                  </div>
                </div>
                <button type="submit" className="btn btn-green submit-btn">
                  Solicitar diagnóstico gratuito via WhatsApp →
                </button>
                <p className="form-disclaimer">
                  Ao enviar, você concorda com nossa política de privacidade.
                  Seus dados nunca serão compartilhados com terceiros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
