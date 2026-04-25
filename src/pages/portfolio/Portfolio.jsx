import { useState } from 'react'
import styles from './Portfolio.module.css'
import { projects, filters } from './portfolioData.js'

const badgeClass = {
  frontend:  styles.badgeFrontend,
  fullstack: styles.badgeFullstack,
  ecommerce: styles.badgeEcommerce,
}

function Portfolio() {
  const [active, setActive] = useState('all')

  const visible = projects.filter(
    p => active === 'all' || p.category === active
  )

  return (
    <main>

      {/* PAGE HERO */}
      <section className={styles.pageHero}>
        <h1 className={styles.pageTitle}>Portfolio</h1>
        <p className={styles.pageSubtitle}>
          Explore a collection of my completed web development projects.
        </p>

        <div className={styles.filterBar} role="group" aria-label="Filter projects by category">
          {filters.map(f => (
            <button
              key={f.value}
              className={`${styles.filterBtn} ${active === f.value ? styles.filterBtnActive : ''}`}
              onClick={() => setActive(f.value)}
            >
              <i className={f.icon}></i> {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className={styles.projectsGrid} aria-label="Portfolio projects">
        {visible.map(project => (
          <article key={project.title} className={styles.projectCard}>

            <div className={styles.cardImageWrap}>
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visitBtn}
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit Site
              </a>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <span className={`${styles.badge} ${badgeClass[project.category]}`}>
                  {project.badge}
                </span>
              </div>
              <p className={styles.cardDesc}>{project.desc}</p>
              <ul className={styles.techTags}>
                {project.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

          </article>
        ))}
      </section>

    </main>
  )
}

export default Portfolio
