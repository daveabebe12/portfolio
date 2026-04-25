import styles from './Blog.module.css'
import prayer from "./images/pray.webp"
import yes from "./images/yes.webp"

const posts = [
  {
    slug: 'god-is-bigger-lessons-personal-storm',
    title: 'God Is Bigger: Lessons From My Personal Storm',
    date: 'February 27, 2025',
    category: 'Faith',
    readTime: '8 min read',
    image: prayer,
    excerpt:
      'In the midst of life\'s storms, it\'s easy to feel overwhelmed and question God\'s presence. But through my own journey, I\'ve learned that God is bigger than any obstacle we face. Join me as I share the powerful lessons from my personal struggles and how trusting in God\'s plan and power brought peace, healing, and hope...',
  },
  {
    slug: 'just-say-yes',
    title: 'Just Say Yes',
    date: 'March 3, 2025',
    category: 'Faith',
    readTime: '10 min read',
    image: yes,
    excerpt:
      'Have you ever felt God nudging you toward something, but fear or doubt held you back? Saying yes to God isn\'t always easy, but it\'s the key to stepping into His purpose for your life.',
  },
  {
    slug: 'getting-started-with-react-router',
    title: 'Getting Started with React Router v6',
    date: 'April 20, 2026',
    category: 'React',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/reactrouter/800/450',
    excerpt:
      'React Router v6 introduced a cleaner API with nested routes and the new useNavigate hook. Here\'s everything you need to know to get up and running quickly.',
  },
  {
    slug: 'css-modules-vs-tailwind',
    title: 'CSS Modules vs Tailwind: Which Should You Use?',
    date: 'April 10, 2026',
    category: 'CSS',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/cssmodules/800/450',
    excerpt:
      'Both CSS Modules and Tailwind CSS are great tools, but they solve the problem differently. I break down when to reach for each one in your project.',
  },
  {
    slug: 'vite-vs-create-react-app',
    title: 'Why I Switched from CRA to Vite',
    date: 'March 28, 2026',
    category: 'Tooling',
    readTime: '4 min read',
    image: 'https://picsum.photos/seed/vitebuild/800/450',
    excerpt:
      'Create React App has served us well, but Vite\'s blazing fast HMR and leaner build output make it the obvious choice for new projects in 2026.',
  },
  {
    slug: 'building-accessible-forms',
    title: 'Building Accessible Forms in React',
    date: 'March 15, 2026',
    category: 'Accessibility',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/a11yforms/800/450',
    excerpt:
      'Accessible forms aren\'t just good practice — they\'re essential. I walk through labelling, keyboard navigation, and ARIA patterns you should know.',
  },
  {
    slug: 'typescript-for-react-devs',
    title: 'TypeScript for React Developers: A Practical Guide',
    date: 'February 28, 2026',
    category: 'TypeScript',
    readTime: '10 min read',
    image: 'https://picsum.photos/seed/typescript/800/450',
    excerpt:
      'TypeScript can feel intimidating at first, but once you learn the handful of patterns covering 90% of React code, it becomes second nature.',
  },
  {
    slug: 'dark-mode-with-css-variables',
    title: 'Dark Mode Done Right with CSS Variables',
    date: 'February 10, 2026',
    category: 'CSS',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/darkmode/800/450',
    excerpt:
      'CSS custom properties make theme switching trivially easy without JavaScript frameworks or extra dependencies. Here\'s my clean approach.',
  },
]

function Blog() {
  return (
    <main>

      {/* PAGE HERO */}
      <section className={styles.pageHero}>
        <h1 className={styles.pageTitle}>Blog</h1>
        <p className={styles.pageSubtitle}>
          Thoughts, insights, and experiences from my journey in web development.
        </p>
      </section>

      {/* FEATURED POSTS */}
      <section className={styles.featuredSection} aria-labelledby="featured-heading">
        <h2 className={styles.sectionHeading} id="featured-heading">
          <i className="fa-regular fa-bookmark"></i>
          Featured Posts
        </h2>

        <div className={styles.postsGrid}>
          {posts.map(post => (
            <article key={post.slug} className={styles.postCard}>

              <a
                href={`/blog/${post.slug}`}
                className={styles.cardImageLink}
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className={styles.cardImageWrap}>
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                  />
                </div>
              </a>

              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.categoryBadge}>{post.category}</span>
                  <span className={styles.metaItem}>
                    <i className="fa-regular fa-clock"></i>
                    {post.readTime}
                  </span>
                  <span className={styles.metaItem}>
                    <i className="fa-regular fa-calendar"></i>
                    {post.date}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h3>

                <p className={styles.cardExcerpt}>{post.excerpt}</p>

                <a href={`/blog/${post.slug}`} className={styles.readMore}>
                  Read More <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>

            </article>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Blog
