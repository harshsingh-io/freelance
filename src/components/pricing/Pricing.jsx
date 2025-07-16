import React, { useState } from 'react'
import {
  FaCheck,
  FaTimes,
  FaStar,
  FaRocket,
  FaCrown,
  FaArrowRight,
  FaQuestionCircle,
} from 'react-icons/fa'
import './pricing.css'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('project')
  const [showTooltip, setShowTooltip] = useState(null)

  const packages = {
    project: [
      {
        name: 'Starter',
        subtitle: 'Perfect for MVPs',
        price: '5,000',
        duration: '4-6 weeks',
        icon: <FaRocket />,
        popular: false,
        description:
          'Ideal for startups and small businesses looking to validate their idea with a minimum viable product.',
        features: [
          { text: 'Single platform (Web OR Mobile)', included: true },
          { text: 'Basic UI/UX design', included: true },
          { text: 'Up to 5 core features', included: true },
          { text: 'Basic database setup', included: true },
          { text: 'User authentication', included: true },
          { text: 'Basic admin panel', included: true },
          { text: '2 rounds of revisions', included: true },
          { text: 'Basic documentation', included: true },
          { text: '30-day bug fixes', included: true },
          { text: 'Advanced integrations', included: false },
          { text: 'Custom animations', included: false },
          { text: 'Advanced analytics', included: false },
        ],
        deliverables: [
          'Fully functional MVP',
          'Source code & documentation',
          'Deployment guide',
          'Basic user manual',
        ],
      },
      {
        name: 'Professional',
        subtitle: 'Complete solution',
        price: '12,000',
        duration: '8-12 weeks',
        icon: <FaStar />,
        popular: true,
        description:
          'Perfect for established businesses ready to launch a comprehensive digital solution.',
        features: [
          { text: 'Multi-platform (Web + Mobile)', included: true },
          { text: 'Custom UI/UX design', included: true },
          { text: 'Up to 15 core features', included: true },
          { text: 'Advanced database design', included: true },
          { text: 'Advanced authentication & security', included: true },
          { text: 'Comprehensive admin panel', included: true },
          { text: 'Unlimited revisions', included: true },
          { text: 'Complete documentation', included: true },
          { text: '60-day support & maintenance', included: true },
          { text: 'Third-party integrations', included: true },
          { text: 'Custom animations & micro-interactions', included: true },
          { text: 'Analytics & reporting dashboard', included: true },
        ],
        deliverables: [
          'Complete web & mobile applications',
          'Admin dashboard',
          'API documentation',
          'User training & support',
        ],
      },
      {
        name: 'Enterprise',
        subtitle: 'Full-scale solution',
        price: '25,000',
        duration: '16-24 weeks',
        icon: <FaCrown />,
        popular: false,
        description:
          'For large organizations requiring complex, scalable solutions with advanced features.',
        features: [
          { text: 'Multi-platform + Web portal', included: true },
          { text: 'Enterprise-grade UI/UX', included: true },
          { text: 'Unlimited features', included: true },
          { text: 'Microservices architecture', included: true },
          { text: 'Enterprise security & compliance', included: true },
          { text: 'Multi-role admin system', included: true },
          { text: 'Unlimited revisions', included: true },
          { text: 'Enterprise documentation', included: true },
          { text: '6-month support & maintenance', included: true },
          { text: 'Custom integrations & APIs', included: true },
          { text: 'Advanced animations & branding', included: true },
          { text: 'Business intelligence & reporting', included: true },
        ],
        deliverables: [
          'Enterprise-grade applications',
          'Microservices architecture',
          'CI/CD pipeline setup',
          'Team training & knowledge transfer',
        ],
      },
    ],
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleTooltip = (index) => {
    setShowTooltip(showTooltip === index ? null : index)
  }

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h5>Investment Plans</h5>
        <h2>Choose Your Success Package</h2>
        <p className="pricing__intro">
          Transparent pricing with no hidden costs. Each package is designed to
          deliver maximum value and ROI for your business. All prices include
          development, testing, and deployment.
        </p>

        <div className="pricing__toggle">
          <button
            className={`toggle__btn ${
              billingCycle === 'project' ? 'active' : ''
            }`}
            onClick={() => setBillingCycle('project')}
          >
            Project-Based
          </button>
          <button
            className={`toggle__btn ${
              billingCycle === 'hourly' ? 'active' : ''
            }`}
            onClick={() => setBillingCycle('hourly')}
          >
            Hourly Consulting
          </button>
        </div>

        {billingCycle === 'project' ? (
          <div className="pricing__grid">
            {packages.project.map((pkg, index) => (
              <div
                key={index}
                className={`pricing__card ${pkg.popular ? 'popular' : ''}`}
              >
                {pkg.popular && (
                  <div className="popular__badge">
                    <FaStar /> Most Popular
                  </div>
                )}

                <div className="card__header">
                  <div className="card__icon">{pkg.icon}</div>
                  <h3 className="card__name">{pkg.name}</h3>
                  <p className="card__subtitle">{pkg.subtitle}</p>

                  <div className="card__price">
                    <span className="price__currency">$</span>
                    <span className="price__amount">{pkg.price}</span>
                    <span className="price__period">starting</span>
                  </div>

                  <p className="card__duration">
                    <FaArrowRight /> {pkg.duration} delivery
                  </p>
                </div>

                <p className="card__description">{pkg.description}</p>

                <div className="card__features">
                  <h4>What's Included:</h4>
                  <ul>
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={feature.included ? 'included' : 'excluded'}
                      >
                        {feature.included ? (
                          <FaCheck className="feature__icon included" />
                        ) : (
                          <FaTimes className="feature__icon excluded" />
                        )}
                        {feature.text}
                        {featureIndex < 3 && (
                          <FaQuestionCircle
                            className="tooltip__trigger"
                            onClick={() =>
                              handleTooltip(`${index}-${featureIndex}`)
                            }
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card__deliverables">
                  <h4>Deliverables:</h4>
                  <ul>
                    {pkg.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex}>
                        <FaArrowRight className="deliverable__icon" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={scrollToContact}
                  className={`card__cta ${
                    pkg.popular ? 'primary' : 'secondary'
                  }`}
                >
                  Get Started
                  <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="hourly__pricing">
            <div className="hourly__card">
              <div className="card__header">
                <div className="card__icon">
                  <FaQuestionCircle />
                </div>
                <h3>Consulting & Development</h3>
                <div className="card__price">
                  <span className="price__currency">$</span>
                  <span className="price__amount">100</span>
                  <span className="price__period">/hour</span>
                </div>
              </div>

              <p className="card__description">
                Perfect for ongoing support, code reviews, technical consulting,
                or small feature additions. Minimum 2-hour blocks.
              </p>

              <div className="hourly__features">
                <ul>
                  <li>
                    <FaCheck /> Technical consultation
                  </li>
                  <li>
                    <FaCheck /> Code review & optimization
                  </li>
                  <li>
                    <FaCheck /> Architecture planning
                  </li>
                  <li>
                    <FaCheck /> Bug fixes & maintenance
                  </li>
                  <li>
                    <FaCheck /> Feature enhancements
                  </li>
                  <li>
                    <FaCheck /> Performance optimization
                  </li>
                </ul>
              </div>

              <button onClick={scrollToContact} className="card__cta primary">
                Book Consultation
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        <div className="pricing__guarantee">
          <h3>💰 Money-Back Guarantee</h3>
          <p>
            I'm so confident in the quality of my work that I offer a 100%
            satisfaction guarantee. If you're not completely happy with the
            delivered solution within 30 days, I'll refund your investment.
          </p>
        </div>

        <div className="pricing__faq">
          <h3>Frequently Asked Questions</h3>
          <div className="faq__grid">
            <div className="faq__item">
              <h4>What's included in the price?</h4>
              <p>
                All packages include development, testing, deployment,
                documentation, and post-launch support as specified.
              </p>
            </div>
            <div className="faq__item">
              <h4>Do you offer payment plans?</h4>
              <p>
                Yes! I offer flexible payment plans: 50% upfront, 30% at
                milestone, 20% on completion.
              </p>
            </div>
            <div className="faq__item">
              <h4>What if I need custom features?</h4>
              <p>
                I can customize any package to fit your specific needs. Let's
                discuss your requirements for a tailored quote.
              </p>
            </div>
            <div className="faq__item">
              <h4>How long does development take?</h4>
              <p>
                Timeline depends on complexity and scope. I provide detailed
                project timelines after requirements analysis.
              </p>
            </div>
          </div>
        </div>

        <div className="pricing__cta">
          <h3>Ready to Transform Your Business?</h3>
          <p>
            Let's discuss your project requirements and find the perfect package
            for your needs.
          </p>
          <button onClick={scrollToContact} className="btn btn-primary btn-lg">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
