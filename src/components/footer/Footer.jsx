import styles from './footer.module.css'
import logo from "./logo.png"

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <a href="/" className={styles.footerLogo}>
            <img src={logo} alt="Logo" />
            <span>Dawit Abebe</span>
          </a>
          <p>Building exceptional digital experiences with modern web technologies.</p>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://www.x.com" aria-label="X Profile" target="_blank" rel="noopener">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" aria-label="Instagram Profile" target="_blank" rel="noopener">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/daveabebe12" aria-label="GitHub Profile" target="_blank" rel="noopener">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" aria-label="LinkedIn Profile" target="_blank" rel="noopener">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="mailto:davidaddis4939@gmail.com" aria-label="Email Contact">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Blog</h4>
          <ul>
            <li><a href="/blog/latest">Latest Posts</a></li>
            <li><a href="/blog/tutorials">Tutorials</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Recent Work</h4>
          <ul>
            <li>
              <a href="https://github.com/daveabebe12" target="_blank" rel="noopener">
                GitHub Projects <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2026 Dawit Abebe. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
