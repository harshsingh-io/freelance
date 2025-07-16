import React, { useState, useEffect } from "react";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import "./testimonials.css";
import aishwarbaiaAvatar from "../../assets/aishwarbhaia.webp";
import mayurbaiaAvatar from "../../assets/mayurbhaia.webp";
import mokshadiAvatar from "../../assets/mokshadi.webp";
import adityabaiaAvatar from "../../assets/adityabhaia.webp";
import mehhAvatar from "../../assets/mehh.webp";
import persistVenturesLogo from "../../assets/persistVentures.svg";
import blueMangoLogo from "../../assets/blueMangoLogo.webp";
import googleLogo from "../../assets/Google_logo_lockup_color.png";
import outlierLogo from "../../assets/outlier.svg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Aishwarya Bhai",
      role: "Founder & CEO",
      company: "Persist Ventures",
      project: "LuLu AI Stylist App",
      rating: 5,
      text: "Working with Harsh was an absolute game-changer for our AI styling app. His technical expertise in Flutter and AI integration, combined with his business acumen, helped us create a product that our users absolutely love. The app's performance and user experience exceeded all our expectations.",
      results: "300% increase in user engagement",
      avatar: aishwarbaiaAvatar,
      companyLogo: persistVenturesLogo,
    },
    {
      id: 2,
      name: "Mayur Bhaisaheb",
      role: "Product Manager",
      company: "BlueMango Solutions",
      project: "E-commerce Mobile App",
      rating: 5,
      text: "Harsh delivered our complex e-commerce mobile app ahead of schedule and within budget. His attention to detail, proactive communication, and ability to solve complex problems made him an invaluable partner. The app now processes over $100K in monthly transactions.",
      results: "$100K+ monthly transactions",
      avatar: mayurbaiaAvatar,
      companyLogo: blueMangoLogo,
    },
    {
      id: 3,
      name: "Moksha Devi",
      role: "Tech Lead",
      company: "Google Developer Community",
      project: "Community Management Platform",
      rating: 5,
      text: "Harsh's expertise in building scalable web applications is outstanding. He created our community platform that now serves thousands of developers worldwide. His clean code, thorough documentation, and modern architecture choices make maintenance a breeze.",
      results: "5000+ active community members",
      avatar: mokshadiAvatar,
      companyLogo: googleLogo,
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO",
      company: "FinanceFlow",
      project: "Mobile Banking Application",
      rating: 5,
      text: "The mobile banking app Harsh developed for us has been a tremendous success. With bank-level security and intuitive UX, we've onboarded 10,000+ users in just 3 months. His code quality and documentation are outstanding.",
      results: "10K+ users in 3 months",
      avatar: adityabaiaAvatar,
      companyLogo: outlierLogo,
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Founder",
      company: "HealthTech Innovations",
      project: "Telemedicine Platform",
      rating: 5,
      text: "Harsh built our telemedicine platform that connects patients with healthcare providers seamlessly. His understanding of healthcare compliance and user privacy, combined with excellent technical execution, made this project a huge success.",
      results: "95% patient satisfaction rate",
      avatar: mehhAvatar,
      companyLogo: persistVenturesLogo,
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar key={index} className={index < rating ? "star filled" : "star"} />
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h5>Client Success Stories</h5>
        <h2>What My Clients Say</h2>
        <p className="testimonials__intro">
          Don't just take my word for it. Here's what business leaders and
          entrepreneurs say about working with me and the results we've achieved
          together.
        </p>

        <div className="testimonials__container">
          <div className="testimonials__slider">
            <div
              className="testimonials__track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="testimonial__slide">
                  <div className="testimonial__card">
                    <div className="testimonial__header">
                      <div className="testimonial__quote-icon">
                        <FaQuoteLeft />
                      </div>
                      <div className="testimonial__rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>

                    <p className="testimonial__text">"{testimonial.text}"</p>

                    <div className="testimonial__result">
                      <span className="result__label">Key Result:</span>
                      <span className="result__value">
                        {testimonial.results}
                      </span>
                    </div>

                    <div className="testimonial__footer">
                      <div className="testimonial__author">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="author__avatar"
                        />
                        <div className="author__info">
                          <h4 className="author__name">{testimonial.name}</h4>
                          <p className="author__role">{testimonial.role}</p>
                          <p className="author__company">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      <div className="testimonial__project">
                        <span className="project__label">Project:</span>
                        <span className="project__name">
                          {testimonial.project}
                        </span>
                      </div>
                    </div>

                    <div className="testimonial__company-logo">
                      <img
                        src={testimonial.companyLogo}
                        alt={`${testimonial.company} logo`}
                        className="company__logo"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials__controls">
            <button
              className="control__btn prev"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            <div className="testimonials__indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="control__btn next"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="testimonials__stats">
          <div className="stat__card">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat__card">
            <h3>50+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat__card">
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat__card">
            <h3>99%</h3>
            <p>On-Time Delivery</p>
          </div>
        </div>

        <div className="testimonials__cta">
          <h3>Ready to Join These Success Stories?</h3>
          <p>
            Let's discuss how I can help transform your business with custom
            software solutions.
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
