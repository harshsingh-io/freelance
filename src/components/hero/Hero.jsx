import React, { useState, useEffect } from "react";
import {
  FaArrowDown,
  FaRocket,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";
import "./hero.css";
import harshImage from "../../assets/harsh_singh_image.webp";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__container container">
        <div className={`hero__content ${isLoaded ? "fade-in" : ""}`}>
          <div className="hero__text">
            <h5 className="hero__greeting">Hello, I'm</h5>
            <h1 className="hero__title">
              Transform Your Ideas Into
              <span className="hero__highlight">
                {" "}
                Powerful Digital Solutions
              </span>
            </h1>
            <p className="hero__subtitle">
              Full-Stack Developer & Mobile App Expert | Helping Businesses
              Scale Through Technology
            </p>
            <p className="hero__description">
              I create custom mobile apps, web applications, and AI-powered
              solutions that drive real business results. From concept to
              launch, I'll help you build software that your users will love and
              your business will thrive on.
            </p>

            <div className="hero__cta">
              <button
                onClick={scrollToPortfolio}
                className="btn btn-primary btn-lg"
              >
                View My Work
              </button>
              <button
                onClick={scrollToContact}
                className="btn btn-accent btn-lg"
              >
                Start Your Project
              </button>
            </div>
          </div>

          <div className="hero__stats">
            <div className="stat__item">
              <div className="stat__icon">
                <FaProjectDiagram />
              </div>
              <div className="stat__content">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="stat__item">
              <div className="stat__icon">
                <FaUsers />
              </div>
              <div className="stat__content">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="stat__item">
              <div className="stat__icon">
                <FaRocket />
              </div>
              <div className="stat__content">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`hero__image ${isLoaded ? "slide-in-right" : ""}`}>
          <div className="hero__image-wrapper">
            <img
              src={harshImage}
              alt="Harsh Singh - Full-Stack Developer"
              className="hero__img"
            />
            <div className="hero__image-bg"></div>
          </div>

          <div className="floating-badge">
            <span className="badge-text">Available for Freelance</span>
            <div className="badge-pulse"></div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <a href="#services" className="scroll-down">
          <FaArrowDown />
          <span>Scroll Down</span>
        </a>
      </div>

      {/* Animated background elements */}
      <div className="hero__bg-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </section>
  );
};

export default Hero;
