import React, { useState, useEffect } from 'react'
import {
  FaSearch,
  FaPaintBrush,
  FaCode,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa'
import './process.css'

const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleSteps((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 }
    )

    const stepElements = document.querySelectorAll('.process__step')
    stepElements.forEach((step) => observer.observe(step))

    return () => observer.disconnect()
  }, [])

  const processSteps = [
    {
      number: '01',
      icon: <FaSearch />,
      title: 'Discovery & Planning',
      duration: '1-2 weeks',
      description:
        "We start by understanding your business goals, target audience, and technical requirements. I'll conduct thorough research to create a comprehensive project roadmap.",
      activities: [
        'Requirements gathering & analysis',
        'Market research & competitor analysis',
        'Technical architecture planning',
        'Project timeline & milestone definition',
        'Risk assessment & mitigation strategy',
      ],
      deliverables: [
        'Project requirements document',
        'Technical specification',
        'Project timeline & milestones',
        'Cost breakdown & proposal',
      ],
    },
    {
      number: '02',
      icon: <FaPaintBrush />,
      title: 'Design & Prototyping',
      duration: '2-3 weeks',
      description:
        'I create intuitive user experiences and modern interfaces that align with your brand. Every design decision is made with your users and business goals in mind.',
      activities: [
        'User experience (UX) research',
        'Wireframing & user flow mapping',
        'UI design & visual identity',
        'Interactive prototyping',
        'Design system creation',
      ],
      deliverables: [
        'Wireframes & user flows',
        'High-fidelity UI designs',
        'Interactive prototype',
        'Design system & style guide',
      ],
    },
    {
      number: '03',
      icon: <FaCode />,
      title: 'Development & Testing',
      duration: '4-8 weeks',
      description:
        'Using agile development methodology, I build your solution with clean, scalable code. Regular testing ensures quality and performance at every stage.',
      activities: [
        'Agile development sprints',
        'Clean code implementation',
        'Database design & optimization',
        'API integration & development',
        'Comprehensive testing (unit, integration, E2E)',
      ],
      deliverables: [
        'Working software increments',
        'Regular progress updates',
        'Code documentation',
        'Test coverage reports',
      ],
    },
    {
      number: '04',
      icon: <FaRocket />,
      title: 'Launch & Support',
      duration: '1-2 weeks',
      description:
        'I ensure a smooth launch with comprehensive deployment, monitoring, and ongoing support. Your success is my priority even after the project goes live.',
      activities: [
        'Production deployment & optimization',
        'Performance monitoring setup',
        'User training & documentation',
        'Analytics & tracking implementation',
        'Ongoing maintenance & support',
      ],
      deliverables: [
        'Live production application',
        'User documentation & training',
        'Performance monitoring dashboard',
        '30-day post-launch support',
      ],
    },
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="process" className="process">
      <div className="container">
        <h5>How I Work</h5>
        <h2>My Development Process</h2>
        <p className="process__intro">
          I follow a proven 4-step process that ensures your project is
          delivered on time, within budget, and exceeds your expectations.
          Transparent communication and regular updates keep you informed every
          step of the way.
        </p>

        <div className="process__container">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`process__step ${
                visibleSteps.includes(index) ? 'fade-in' : ''
              }`}
              data-index={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="step__header">
                <div className="step__number">{step.number}</div>
                <div className="step__icon">{step.icon}</div>
                <div className="step__title-section">
                  <h3>{step.title}</h3>
                  <span className="step__duration">{step.duration}</span>
                </div>
              </div>

              <p className="step__description">{step.description}</p>

              <div className="step__content">
                <div className="step__activities">
                  <h4>What I Do:</h4>
                  <ul>
                    {step.activities.map((activity, activityIndex) => (
                      <li key={activityIndex}>
                        <FaCheckCircle className="activity__icon" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="step__deliverables">
                  <h4>What You Get:</h4>
                  <ul>
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex}>
                        <FaArrowRight className="deliverable__icon" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < processSteps.length - 1 && (
                <div className="step__connector">
                  <div className="connector__line"></div>
                  <FaArrowRight className="connector__arrow" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="process__footer">
          <div className="process__guarantee">
            <h3>🎯 My Commitment to You</h3>
            <div className="guarantee__grid">
              <div className="guarantee__item">
                <h4>Regular Updates</h4>
                <p>Weekly progress reports and demos to keep you informed</p>
              </div>
              <div className="guarantee__item">
                <h4>Quality Assurance</h4>
                <p>Rigorous testing at every stage ensures bug-free delivery</p>
              </div>
              <div className="guarantee__item">
                <h4>On-Time Delivery</h4>
                <p>I respect deadlines and deliver projects as promised</p>
              </div>
              <div className="guarantee__item">
                <h4>Ongoing Support</h4>
                <p>30 days of free support after launch for peace of mind</p>
              </div>
            </div>
          </div>

          <div className="process__cta">
            <h3>Ready to Start Your Project?</h3>
            <p>
              Let's discuss your requirements and create a custom roadmap for
              your success.
            </p>
            <button
              onClick={scrollToContact}
              className="btn btn-primary btn-lg"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
