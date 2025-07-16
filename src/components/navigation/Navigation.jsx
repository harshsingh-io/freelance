import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './navigation.css'

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle smooth scrolling
  const handleNavClick = (href) => {
    setActiveNav(href)
    setIsMobileMenuOpen(false)

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav__container">
        <div className="nav__logo">
          <a href="#home" onClick={() => handleNavClick('#home')}>
            <span className="logo-text">Harsh Singh</span>
            <span className="logo-subtitle">Full-Stack Developer</span>
          </a>
        </div>

        <div className={`nav__menu ${isMobileMenuOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => handleNavClick('#services')}
                className={
                  activeNav === '#services'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => handleNavClick('#portfolio')}
                className={
                  activeNav === '#portfolio'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#process"
                onClick={() => handleNavClick('#process')}
                className={
                  activeNav === '#process'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                Process
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#testimonials"
                onClick={() => handleNavClick('#testimonials')}
                className={
                  activeNav === '#testimonials'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                Testimonials
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => handleNavClick('#about')}
                className={
                  activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
                }
              >
                About
              </a>
            </li>
          </ul>

          <div
            className="nav__close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaTimes />
          </div>
        </div>

        <div className="nav__actions">
          <a
            href="#contact"
            onClick={() => handleNavClick('#contact')}
            className="btn btn-primary nav__cta"
          >
            Get Free Consultation
          </a>

          <div
            className="nav__toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
