import React, { useState } from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaCalendarAlt,
  FaWhatsapp,
} from 'react-icons/fa'
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    message: '',
    projectType: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        timeline: '',
        message: '',
        projectType: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'harsh@harshsingh.dev',
      link: 'mailto:harsh@harshsingh.dev',
      description: 'Send me an email',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 9876543210',
      link: 'tel:+919876543210',
      description: 'Give me a call',
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '+91 9876543210',
      link: 'https://wa.me/919876543210',
      description: 'Message on WhatsApp',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'India',
      link: null,
      description: 'Available worldwide',
    },
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/harshsingh-io',
      color: '#0077B5',
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/harshsingh-io',
      color: '#333',
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/harshsingh_io',
      color: '#1DA1F2',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h5>Get In Touch</h5>
        <h2>Let's Build Something Amazing Together</h2>
        <p className="contact__intro">
          Ready to transform your business with custom software solutions? I'd
          love to hear about your project and discuss how we can work together
          to achieve your goals.
        </p>

        <div className="contact__container">
          <div className="contact__info">
            <div className="contact__card">
              <h3>🚀 Ready to Start?</h3>
              <p>
                Whether you have a detailed project brief or just an idea, I'm
                here to help bring it to life. Let's discuss your requirements
                and create a solution that drives real business results.
              </p>

              <div className="contact__methods">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact__method">
                    <div className="method__icon">{info.icon}</div>
                    <div className="method__content">
                      <h4>{info.title}</h4>
                      <p>{info.description}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="method__link"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="method__value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact__social">
                <h4>Connect with me:</h4>
                <div className="social__links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social__link"
                      style={{ '--social-color': social.color }}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact__availability">
                <h4>⏰ Availability</h4>
                <p>
                  I typically respond within 2-4 hours during business hours (9
                  AM - 6 PM IST, Monday - Friday). For urgent matters, feel free
                  to call or WhatsApp me directly.
                </p>
              </div>
            </div>
          </div>

          <div className="contact__form-container">
            <form onSubmit={handleSubmit} className="contact__form">
              <h3>📝 Tell Me About Your Project</h3>

              <div className="form__group">
                <div className="form__row">
                  <div className="form__field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form__field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
              </div>

              <div className="form__group">
                <div className="form__row">
                  <div className="form__field">
                    <label htmlFor="company">Company/Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="form__field">
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select project type</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="web-app">Web Application</option>
                      <option value="ai-integration">AI/ML Integration</option>
                      <option value="api-backend">API/Backend</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form__group">
                <div className="form__row">
                  <div className="form__field">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-30k">$15,000 - $30,000</option>
                      <option value="30k-plus">$30,000+</option>
                      <option value="hourly">Hourly Rate</option>
                    </select>
                  </div>
                  <div className="form__field">
                    <label htmlFor="timeline">Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form__field">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project goals, target audience, key features, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="form__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form__message success">
                  <FaCheckCircle />
                  Thank you! Your message has been sent successfully. I'll get
                  back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form__message error">
                  <FaExclamationCircle />
                  Oops! Something went wrong. Please try again or contact me
                  directly.
                </div>
              )}
            </form>

            <div className="quick__actions">
              <a
                href="https://calendly.com/harshsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="quick__action"
              >
                <FaCalendarAlt />
                <div>
                  <h4>Schedule a Call</h4>
                  <p>Book a free 30-minute consultation</p>
                </div>
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi! I'm interested in discussing a project with you."
                target="_blank"
                rel="noopener noreferrer"
                className="quick__action"
              >
                <FaWhatsapp />
                <div>
                  <h4>WhatsApp Me</h4>
                  <p>Quick chat about your project</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__footer">
          <div className="contact__guarantee">
            <h3>🎯 My Promise to You</h3>
            <div className="guarantee__items">
              <div className="guarantee__item">
                <h4>Quick Response</h4>
                <p>I respond to all inquiries within 24 hours</p>
              </div>
              <div className="guarantee__item">
                <h4>Free Consultation</h4>
                <p>Initial project discussion is always free</p>
              </div>
              <div className="guarantee__item">
                <h4>No Pressure</h4>
                <p>Honest advice, even if it means not working together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
