import './WhatsAppFloat.css'

const WHATSAPP = '5521999999999'

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="wa-float"
    >
      <span className="wa-float-icon">💬</span> Fale conosco
    </a>
  )
}
