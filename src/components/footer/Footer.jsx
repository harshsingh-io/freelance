import React from 'react'
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp,
  FaWhatsapp,
} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Mobile App Development',
    'Web Application Development',
    'AI/ML Integration',
    'API Development',
    'Technical Consulting',
    'UI/UX Design',
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/harshsingh-io',
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/harshsingh-io',
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/harshsingh_io',
    },
    {
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      url: 'https://wa.me/919876543210',
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__brand">
            <h3>Harsh Singh</h3>
            <p>Full-Stack Developer & AI Specialist</p>
            <p className="footer__tagline">
              Transforming businesses through innovative software solutions.
              Let's build something amazing together.
            </p>

            <div className="footer__contact-info">
              <div className="contact__item">
                <FaEnvelope />
                <a href="mailto:harsh@harshsingh.dev">harsh@harshsingh.dev</a>
              </div>
              <div className="contact__item">
                <FaPhone />
                <a href="tel:+919876543210">+91 9876543210</a>
              </div>
              <div className="contact__item">
                <FaMapMarkerAlt />
                <span>India • Available Worldwide</span>
              </div>
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__section">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="footer__link"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__section">
              <h4>Services</h4>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="footer__service">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__section">
              <h4>Let's Connect</h4>
              <p className="footer__cta-text">
                Ready to start your project? Get in touch and let's discuss how
                I can help your business grow.
              </p>

              <div className="footer__cta-buttons">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="footer__cta-btn primary"
                >
                  Start Project
                </button>
                <a
                  href="https://calendly.com/harshsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__cta-btn secondary"
                >
                  Schedule Call
                </a>
              </div>

              <div className="footer__social">
                <h5>Follow Me:</h5>
                <div className="social__links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social__link"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__stats">
          <div className="stat__item">
            <h4>50+</h4>
            <span>Projects Completed</span>
          </div>
          <div className="stat__item">
            <h4>30+</h4>
            <span>Happy Clients</span>
          </div>
          <div className="stat__item">
            <h4>100%</h4>
            <span>Client Satisfaction</span>
          </div>
          <div className="stat__item">
            <h4>3+</h4>
            <span>Years Experience</span>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>
              © {currentYear} Harsh Singh. All rights reserved. Made with{' '}
              <FaHeart className="heart" /> in India
            </p>
          </div>

          <div className="footer__legal">
            <button className="legal__link">Privacy Policy</button>
            <button className="legal__link">Terms of Service</button>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="scroll__to-top"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  )
}

export default Footer
