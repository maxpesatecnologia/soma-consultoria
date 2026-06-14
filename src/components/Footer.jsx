import './Footer.css'
import Logo from './Logo'

const WHATSAPP = '5521999999999'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo height={48} />
            <p className="footer-tagline">
              Recuperando tributos pagos a mais.<br />
              Gerando capital para sua empresa crescer.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-green footer-wa"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="footer-links">
            <h5>Navegação</h5>
            <ul>
              <li><a href="#quem-somos">Quem somos</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#como-funciona">Como funciona</a></li>
              <li><a href="#honorarios">Honorários</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
              <li><a href="#diagnostico">Diagnóstico gratuito</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h5>Serviços</h5>
            <ul>
              <li><a href="#servicos">PIS/COFINS sobre ICMS</a></li>
              <li><a href="#servicos">Monofásico</a></li>
              <li><a href="#servicos">INSS sobre Receita</a></li>
              <li><a href="#servicos">IRPJ/CSLL SELIC</a></li>
              <li><a href="#servicos">ICMS-ST</a></li>
              <li><a href="#servicos">Créditos PIS/COFINS</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h5>Contato</h5>
            <div className="footer-contact-item">
              <span className="fc-icon">🌐</span>
              <span>somaconsultoriafiscal.com.br</span>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon">📱</span>
              <span>WhatsApp disponível</span>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon">📸</span>
              <span>@soma.consultoriafiscal</span>
            </div>
            <div className="footer-badges">
              <span className="footer-badge">CRC Certificado</span>
              <span className="footer-badge">OAB Registrado</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 SOMA Consultoria Fiscal. Todos os direitos reservados.</p>
          <p className="footer-legal">
            Recuperação de créditos fiscais com base em teses aprovadas pelo STF/STJ e art. 165 do CTN.
          </p>
        </div>
      </div>
    </footer>
  )
}
