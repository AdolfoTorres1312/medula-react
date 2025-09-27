import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Checklist from './components/Checklist'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './styles.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Checklist />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
