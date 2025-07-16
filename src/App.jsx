import React from 'react'
import './App.css'

// Import all components
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Process from './components/process/Process'
import Testimonials from './components/testimonials/Testimonials'
import Pricing from './components/pricing/Pricing'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
