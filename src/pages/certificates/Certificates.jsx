import styles from './Certificates.module.css'

const certificates = [
  {
    id: 1,
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'March 2024',
    description: 'Comprehensive course covering React 18, Hooks, Redux, React Router, Next.js, and best practices for building modern web applications.',
    image: 'https://picsum.photos/seed/react-cert/600/400',
    badge: 'Frontend',
  },
  {
    id: 2,
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: 'January 2024',
    description: 'Mastery of core JavaScript concepts including ES6+, functional programming, object-oriented programming, and algorithmic thinking.',
    image: 'https://picsum.photos/seed/js-cert/600/400',
    badge: 'JavaScript',
  },
  {
    id: 3,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'November 2023',
    description: 'Certification in HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles for building accessible, mobile-first websites.',
    image: 'https://picsum.photos/seed/rwd-cert/600/400',
    badge: 'CSS',
  },
  {
    id: 4,
    title: 'TypeScript for Professionals',
    issuer: 'Udemy',
    date: 'June 2024',
    description: 'Advanced TypeScript covering generics, decorators, utility types, and integrating TypeScript into large-scale React projects.',
    image: 'https://picsum.photos/seed/ts-cert/600/400',
    badge: 'TypeScript',
  },
  {
    id: 5,
    title: 'Next.js & React — The Complete Guide',
    issuer: 'Udemy',
    date: 'August 2024',
    description: 'Full coverage of Next.js 14 including App Router, Server Components, Server Actions, data fetching strategies, and deployment.',
    image: 'https://picsum.photos/seed/nextjs-cert/600/400',
    badge: 'Full Stack',
  },
  {
    id: 6,
    title: 'Git & GitHub Bootcamp',
    issuer: 'Udemy',
    date: 'September 2023',
    description: 'Complete guide to version control with Git — branching, merging, rebasing, pull requests, and collaborative workflows on GitHub.',
    image: 'https://picsum.photos/seed/git-cert/600/400',
    badge: 'Tools',
  },
  {
    id: 7,
    title: 'UI/UX Design Fundamentals',
    issuer: 'Google',
    date: 'April 2024',
    description: 'Foundations of user-centered design, wireframing, prototyping, design systems, and usability testing using Figma.',
    image: 'https://picsum.photos/seed/uiux-cert/600/400',
    badge: 'Design',
  },
  {
    id: 8,
    title: 'Node.js Developer Course',
    issuer: 'Udemy',
    date: 'December 2023',
    description: 'Backend development with Node.js covering Express, REST APIs, MongoDB, authentication, and deploying full-stack applications.',
    image: 'https://picsum.photos/seed/node-cert/600/400',
    badge: 'Backend',
  },
]

const badgeColors = {
  Frontend:   { bg: 'rgba(59,130,246,0.15)',  color: '#60a5fa',  border: 'rgba(59,130,246,0.25)' },
  JavaScript: { bg: 'rgba(234,179,8,0.15)',   color: '#fbbf24',  border: 'rgba(234,179,8,0.25)' },
  CSS:        { bg: 'rgba(139,92,246,0.15)',  color: '#a78bfa',  border: 'rgba(139,92,246,0.25)' },
  TypeScript: { bg: 'rgba(59,130,246,0.15)',  color: '#60a5fa',  border: 'rgba(59,130,246,0.25)' },
  'Full Stack':{ bg: 'rgba(139,92,246,0.15)', color: '#a78bfa',  border: 'rgba(139,92,246,0.25)' },
  Tools:      { bg: 'rgba(16,185,129,0.15)',  color: '#34d399',  border: 'rgba(16,185,129,0.25)' },
  Design:     { bg: 'rgba(244,114,182,0.15)', color: '#f472b6',  border: 'rgba(244,114,182,0.25)' },
  Backend:    { bg: 'rgba(34,211,238,0.15)',  color: '#22d3ee',  border: 'rgba(34,211,238,0.25)' },
}

function Certificates() {
  return (
    <main>

      {/* PAGE HERO */}
      <section className={styles.pageHero}>
        <h1 className={styles.pageTitle}>Certificates</h1>
        <p className={styles.pageSubtitle}>
          Professional certifications and courses I&apos;ve completed to sharpen my skills.
        </p>
      </section>

      {/* GRID */}
      <section className={styles.grid} aria-label="Certificates">
        {certificates.map(cert => {
          const color = badgeColors[cert.badge]
          return (
            <article key={cert.id} className={styles.card}>

              <div className={styles.imageWrap}>
                <img src={cert.image} alt={cert.title} loading="lazy" />
                <div className={styles.overlay}>
                  <i className="fa-solid fa-certificate"></i>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <span
                    className={styles.badge}
                    style={{
                      background: color.bg,
                      color: color.color,
                      borderColor: color.border,
                    }}
                  >
                    {cert.badge}
                  </span>
                  <span className={styles.date}>
                    <i className="fa-regular fa-calendar"></i> {cert.date}
                  </span>
                </div>

                <h2 className={styles.cardTitle}>{cert.title}</h2>

                <p className={styles.issuer}>
                  <i className="fa-solid fa-building-columns"></i> {cert.issuer}
                </p>

                <p className={styles.cardDesc}>{cert.description}</p>
              </div>

            </article>
          )
        })}
      </section>

    </main>
  )
}

export default Certificates
