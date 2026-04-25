import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

const skills = [
  { name: 'React',      pct: 89 },
  { name: 'JavaScript', pct: 93 },
  { name: 'CSS',        pct: 83 },
  { name: 'Next.js',    pct: 85 },
  { name: 'TypeScript', pct: 80 },
  { name: 'Node.js',    pct: 75 },
]

const timeline = [
  {
    year: '2024',
    title: 'Freelance Frontend Developer',
    company: 'Self-Employed',
    desc: 'Building responsive web applications and portfolios for clients using React and modern tooling.',
  },
  {
    year: '2023',
    title: 'Frontend Developer Intern',
    company: 'Tech Startup',
    desc: 'Contributed to a SaaS product UI, implemented reusable components, and improved page performance.',
  },
  {
    year: '2022',
    title: 'BSc in Computer Science',
    company: 'Addis Ababa University',
    desc: 'Focused on software engineering, algorithms, and web development fundamentals.',
  },
]

const beyond = [
  { icon: 'fa-regular fa-heart',      title: 'Family Time',   desc: 'Quality moments with family and loved ones' },
  { icon: 'fa-solid fa-mug-hot',      title: 'Coffee & Code', desc: 'Exploring new technologies while enjoying coffee' },
  { icon: 'fa-solid fa-people-group', title: 'Community',     desc: 'Active participation in local community activities' },
  { icon: 'fa-solid fa-book-open',    title: 'Learning',      desc: 'Continuous professional and personal development' },
  { icon: 'fa-solid fa-paper-plane',  title: 'Travel',        desc: 'Exploring new places and experiencing different cultures' },
  { icon: 'fa-solid fa-dumbbell',     title: 'Fitness',       desc: 'Staying active and maintaining a healthy lifestyle' },
]

function About() {
  const [animated, setAnimated] = useState(false)
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.2 }
    )
    if (skillsRef.current) observer.observe(skillsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main>

      {/* PAGE HERO */}
      <section className={styles.pageHero}>
        <h1 className={styles.pageTitle}>About Me</h1>
        <p className={styles.pageSubtitle}>My Journey as a Frontend Developer</p>
        <p className={styles.pageIntro}>
          Hi! I&apos;m Dawit Abebe, a passionate frontend developer with experience
          building sleek, responsive websites and web applications. I&apos;m dedicated
          to crafting user-centered digital experiences that don&apos;t just look amazing,
          but also deliver seamless performance across all devices.
        </p>
      </section>

      {/* TECHNICAL EXPERTISE */}
      <section className={styles.expertiseSection}>
        <div className={styles.expertiseInner}>

          <div className={styles.skillsCol} ref={skillsRef}>
            <h2 className={styles.sectionHeading}>Technical Expertise</h2>
            {skills.map(skill => (
              <div key={skill.name} className={styles.skillItem}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPct}>{skill.pct}%</span>
                </div>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillFill}
                    style={{ width: animated ? `${skill.pct}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.experienceCol}>
            <h3 className={styles.experienceHeading}>Experience and Expertise</h3>
            <p>
              From personal projects to client work, I&apos;ve tackled a wide range of
              challenges helping bring ideas to life through clean, efficient code.
              I thrive on solving complex problems with practical and creative solutions,
              always staying on top of the latest trends in web development.
            </p>
            <p>
              I have a solid background in JavaScript with a strong grasp of React,
              Next.js, and TypeScript — allowing me to build fast, scalable web
              applications that perform well across all devices.
            </p>
          </div>

        </div>
      </section>

      {/* PROFESSIONAL JOURNEY */}
      <section className={styles.journeySection}>
        <h2 className={styles.journeyTitle}>Professional Journey</h2>
        <div className={styles.timeline}>
          {timeline.map(item => (
            <article key={item.year} className={styles.timelineCard}>
              <div className={styles.timelineYear}>{item.year}</div>
              <div className={styles.timelineContent}>
                <h3>{item.title}</h3>
                <p className={styles.timelineCompany}>{item.company}</p>
                <p className={styles.timelineDesc}>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BEYOND CODING */}
      <section className={styles.beyondSection}>
        <div className={styles.beyondInner}>
          <h2 className={styles.beyondTitle}>Beyond Coding</h2>
          <p className={styles.beyondSubtitle}>
            When I&apos;m not immersed in code, here&apos;s what keeps me inspired and balanced:
          </p>
          <div className={styles.beyondGrid}>
            {beyond.map(item => (
              <article key={item.title} className={styles.beyondCard}>
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Let&apos;s Work Together</h2>
        <p>
          Looking for a developer who can bring your vision to life? I&apos;d love to
          hear about your project and discuss how we can collaborate.
        </p>
        <a href="/contact" className={styles.btnCta}>
          Get in Touch <i className="fa-solid fa-chevron-right"></i>
        </a>
      </section>

    </main>
  )
}

export default About
