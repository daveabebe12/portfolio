import { useState } from 'react'
import styles from './header.module.css'
import logo from "./logo.png"
function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.siteHeader}>
      <nav className={styles.navContainer} aria-label="Primary">
        <a href="/" className={styles.logo} aria-label="Home">
          <img src={logo} alt="Logo" />
        </a>

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
          <li><a href="/" className={`${styles.navLink} ${styles.active}`}>HOME</a></li>
          <li><a href="/about" className={styles.navLink}>ABOUT</a></li>
          <li><a href="/portfolio" className={styles.navLink}>PORTFOLIO</a></li>
          <li><a href="/contact" className={styles.navLink}>CONTACT</a></li>
          <li><a href="/blog" className={styles.navLink}>BLOG</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
