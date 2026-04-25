import styles from './main.module.css'
import heroImg from './hero.jpg'

function Main() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Dawit Abebe - Frontend{' '}
            <span className="underline">Developer</span> &amp; Designer
          </h1>
          <h2 className={styles.heroSubtitle}>Building Engaging and High-Performance Web Experiences</h2>
          <p>
            With a strong passion for frontend development, I craft responsive,
            visually appealing, and user-friendly websites that drive engagement and
            business success.
          </p>
          <p>
            Looking to elevate your digital presence? Let&apos;s collaborate and bring your
            ideas to life.
          </p>
          <div className={styles.heroButtons}>
            <a href="/portfolio" className="btn btn-primary">View My Work</a>
            <a href="/contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src={heroImg} alt="Dawit Abebe - Frontend Developer" />
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>3+</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>20+</div>
          <div className={styles.statLabel}>Projects Completed</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>10+</div>
          <div className={styles.statLabel}>Happy Clients</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>100%</div>
          <div className={styles.statLabel}>Client Satisfaction</div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className={styles.expertise}>
        <h2 className="section-title">Core Expertise</h2>
        <div className={styles.expertiseGrid}>
          <article className={styles.expertiseCard}>
            <i className="fa-solid fa-code"></i>
            <h3>Modern Frontend</h3>
            <p>React, Next.js, Vite, TypeScript, and modern JavaScript practices</p>
          </article>
          <article className={styles.expertiseCard}>
            <i className="fa-solid fa-laptop"></i>
            <h3>Responsive Design</h3>
            <p>Mobile-first approach with seamless cross-device experiences</p>
          </article>
          <article className={styles.expertiseCard}>
            <i className="fa-solid fa-palette"></i>
            <h3>UI/UX Design</h3>
            <p>Creating intuitive and visually appealing user interfaces</p>
          </article>
          <article className={styles.expertiseCard}>
            <i className="fa-solid fa-plug"></i>
            <h3>API Integration &amp; Automation</h3>
            <p>Seamless integration with third-party apps and REST APIs</p>
          </article>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.aboutSection}>
        <h2 className="section-title underlined">About Me</h2>
        <p>
          I specialize in modern frontend technologies, including React, Next.js, and
          Vite. My passion lies in creating seamless user experiences, optimizing web
          performance, and pushing the boundaries of design and development.
        </p>
        <a href="/about" className="text-link">Learn More About Me &rarr;</a>
      </section>

      {/* BLOG TEASER */}
      <section className={styles.blogSection}>
        <h2 className="section-title underlined">Latest Thoughts &amp; Insights</h2>
        <p>
          Explore my blog where I share insights on frontend development, industry
          trends, and reflections to encourage personal and professional growth.
        </p>
        <a href="/blog" className="btn btn-outline">Read My Blog</a>
      </section>
    </main>
  )
}

export default Main
