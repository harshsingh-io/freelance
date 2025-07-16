import React, { useState, useEffect } from 'react'
import {
  FaMobile,
  FaLaptopCode,
  FaServer,
  FaBrain,
  FaUserTie,
  FaArrowRight,
  FaCheck,
} from 'react-icons/fa'
import './services.css'

const Services = () => {
  const [visibleServices, setVisibleServices] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleServices((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    const serviceCards = document.querySelectorAll('.service__card')
    serviceCards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <FaMobile />,
      title: 'Mobile App Development',
      description:
        'Native Android and cross-platform Flutter apps that deliver exceptional user experiences and drive business growth.',
      benefits: [
        'Native Android development with Kotlin',
        'Cross-platform Flutter applications',
        'App Store & Play Store optimization',
        'Performance optimization & testing',
      ],
      technologies: ['Android', 'Kotlin', 'Flutter', 'Firebase'],
      price: 'Starting at $3,000',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Web Application Development',
      description:
        'Modern, responsive web applications built with React and cutting-edge technologies for maximum performance.',
      benefits: [
        'Responsive React applications',
        'Modern UI/UX design',
        'SEO optimization',
        'Progressive Web Apps (PWA)',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      price: 'Starting at $2,500',
    },
    {
      icon: <FaServer />,
      title: 'API & Backend Development',
      description:
        'Robust, scalable backend solutions and APIs that power your applications with reliability and security.',
      benefits: [
        'RESTful API development',
        'Database design & optimization',
        'Cloud deployment & scaling',
        'Security implementation',
      ],
      technologies: ['FastAPI', 'Python', 'PostgreSQL', 'AWS'],
      price: 'Starting at $2,000',
    },
    {
      icon: <FaBrain />,
      title: 'AI/ML Integration',
      description:
        'Intelligent features and automation that give your business a competitive edge through artificial intelligence.',
      benefits: [
        'Machine Learning model integration',
        'Natural Language Processing',
        'Computer Vision solutions',
        'Predictive analytics',
      ],
      technologies: ['TensorFlow', 'OpenAI API', 'Python', 'scikit-learn'],
      price: 'Starting at $4,000',
    },
    {
      icon: <FaUserTie />,
      title: 'Technical Consulting',
      description:
        'Strategic technical guidance to help you make informed decisions and optimize your development process.',
      benefits: [
        'Architecture planning & review',
        'Technology stack selection',
        'Code review & optimization',
        'Project planning & estimation',
      ],
      technologies: ['Strategy', 'Architecture', 'Best Practices', 'Planning'],
      price: '$100/hour',
    },
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <h5>What I Offer</h5>
        <h2>Services That Drive Results</h2>
        <p className="services__intro">
          I provide end-to-end development services that help businesses
          transform ideas into powerful digital solutions. From mobile apps to
          AI integration, I deliver quality software that scales with your
          business.
        </p>

        <div className="services__container">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service__card ${
                visibleServices.includes(index) ? 'fade-in' : ''
              }`}
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service__header">
                <div className="service__icon">{service.icon}</div>
                <div className="service__title-section">
                  <h3 className="service__title">{service.title}</h3>
                  <span className="service__price">{service.price}</span>
                </div>
              </div>

              <p className="service__description">{service.description}</p>

              <div className="service__benefits">
                <h4>What You Get:</h4>
                <ul>
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>
                      <FaCheck className="benefit__icon" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service__technologies">
                <h4>Technologies:</h4>
                <div className="tech__tags">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech__tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button onClick={scrollToContact} className="service__cta">
                Get Started
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

        <div className="services__footer">
          <div className="services__guarantee">
            <h3>100% Satisfaction Guarantee</h3>
            <p>
              I stand behind my work with a satisfaction guarantee. If you're
              not completely happy with the delivered solution, I'll work with
              you until it meets your expectations.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="btn btn-primary btn-lg services__main-cta"
          >
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
