import { useState, useEffect } from 'react'
import './Header.css'
import Logo from './Logo'

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#" className="logo">
          <Logo height={36} />
        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#diagnostico" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Diagnóstico Gratuito
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
