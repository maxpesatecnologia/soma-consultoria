import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import PainPoints from './components/PainPoints'
import WhoIsSoma from './components/WhoIsSoma'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Comparison from './components/Comparison'
import Guarantees from './components/Guarantees'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <PainPoints />
        <WhoIsSoma />
        <Services />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Comparison />
        <Guarantees />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
