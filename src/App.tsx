import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Industries from './components/Industries'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import AuditForm from './components/AuditForm'
import Footer from './components/Footer'
import Team from './components/Team'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Industries />
        <Portfolio />
        <Process />
        <Pricing />
        <Team />
        <About />
        <Contact />
        <AuditForm />
      </main>

      <Footer />
    </div>
  )
}

export default App