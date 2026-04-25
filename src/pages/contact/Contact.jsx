import { useState } from 'react'
import styles from './Contact.module.css'

const contactInfo = [
  {
    icon: 'fa-solid fa-envelope',
    label: 'Email',
    value: 'davo12ab@gmail.com',
    href: 'mailto:davidaddis4939@gmail.com',
  },
  {
    icon: 'fa-solid fa-phone',
    label: 'Phone',
    value: '+251 912 889 598',
    href: 'tel:+251912889598',
  },
  {
    icon: 'fa-brands fa-telegram',
    label: 'Telegram',
    value: '@dawitar1',
    href: 'https://t.me/dawitabebe',
  },
  {
    icon: 'fa-solid fa-location-dot',
    label: 'Location',
    value: 'Addis Ababa, Ethiopia',
    href: null,
  },
  {
    icon: 'fa-brands fa-github',
    label: 'GitHub',
    value: 'github.com/daveabebe12',
    href: 'https://github.com/daveabebe12',
  },
  {
    icon: 'fa-brands fa-linkedin-in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/dawit-abebe',
    href: 'https://www.linkedin.com',
  },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className={styles.page}>

      {/* HEADER */}
      <section className={styles.pageHeader}>
        <p className={styles.eyebrow}>// get in touch</p>
        <h1 className={styles.title}>
          Let&apos;s <span className="underline">Connect</span>
        </h1>
        <p className={styles.subtitle}>
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>
      </section>

      <div className={styles.layout}>

        {/* FORM */}
        <section className={styles.formSection}>
          {submitted ? (
            <div className={styles.successMsg}>
              <i className="fa-solid fa-circle-check"></i>
              <h2>Message sent!</h2>
              <p>Thanks for reaching out. I&apos;ll get back to you within 1–2 business days.</p>
              <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          )}
        </section>

        {/* CONTACT INFO */}
        <aside className={styles.infoSection}>
          <h2 className={styles.infoTitle}>Contact Info</h2>
          <ul className={styles.infoList}>
            {contactInfo.map((item) => (
              <li key={item.label} className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i className={item.icon}></i>
                </div>
                <div>
                  <p className={styles.infoLabel}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener" className="text-link">
                      {item.value}
                    </a>
                  ) : (
                    <p className={styles.infoValue}>{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>

      </div>
    </main>
  )
}

export default Contact
