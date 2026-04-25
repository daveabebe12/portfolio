import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'
import logo from './images/logo.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.active : ''}`

  return (
    <header className={styles.siteHeader}>
      <nav className={styles.navContainer} aria-label="Primary">
        <NavLink to="/" className={styles.logo} aria-label="Home">
          <img src={logo} alt="Logo" />
        </NavLink>

        <button
          className={styles.navToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
          <li><NavLink to="/" className={navLinkClass} end>HOME</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>ABOUT</NavLink></li>
          <li><NavLink to="/portfolio" className={navLinkClass}>PORTFOLIO</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink></li>
          <li><NavLink to="/blog" className={navLinkClass}>BLOG</NavLink></li>
          <li><NavLink to="/certificates" className={navLinkClass}>CERTIFICATES</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
