import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import Certificates from './pages/certificates/Certificates'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
