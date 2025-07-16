import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaGraduationCap,
  FaAward,
  FaHeart,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./about.css";
import harshAboutImage from "../../assets/harsh-about.webp";

const About = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".about__card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const expertise = [
    {
      icon: <FaCode />,
      title: "Technical Excellence",
      description:
        "3+ years of hands-on experience building scalable applications with modern technologies.",
      details: [
        "Full-stack development expertise",
        "Mobile-first approach",
        "Clean, maintainable code",
        "Performance optimization",
      ],
    },
    {
      icon: <FaGraduationCap />,
      title: "Continuous Learning",
      description:
        "Always staying updated with the latest technologies and industry best practices.",
      details: [
        "Latest frameworks & tools",
        "Industry certifications",
        "Tech community involvement",
        "Open source contributions",
      ],
    },
    {
      icon: <FaAward />,
      title: "Proven Results",
      description:
        "Track record of delivering successful projects that drive real business growth.",
      details: [
        "50+ projects completed",
        "30+ satisfied clients",
        "99% on-time delivery",
        "100% client satisfaction",
      ],
    },
    {
      icon: <FaHeart />,
      title: "Client-Focused",
      description:
        "Your success is my priority. I build long-term partnerships, not just applications.",
      details: [
        "Transparent communication",
        "Regular progress updates",
        "Post-launch support",
        "Business growth focus",
      ],
    },
  ];

  const skills = [
    { name: "Mobile Development", level: 95, category: "Frontend" },
    { name: "React/Next.js", level: 90, category: "Frontend" },
    { name: "Flutter", level: 85, category: "Mobile" },
    { name: "Android/Kotlin", level: 92, category: "Mobile" },
    { name: "Python/FastAPI", level: 88, category: "Backend" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "AI/ML Integration", level: 80, category: "AI/ML" },
    { name: "Cloud/AWS", level: 82, category: "DevOps" },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h5>Get To Know Me</h5>
        <h2>About Harsh Singh</h2>

        <div className="about__container">
          <div className="about__content">
            <div className="about__image">
              <img
                src={harshAboutImage}
                alt="Harsh Singh - Full-Stack Developer"
                className="about__img"
              />
              <div className="about__image-overlay">
                <div className="overlay__text">
                  <span>Available for</span>
                  <span>Freelance Work</span>
                </div>
              </div>
            </div>

            <div className="about__text">
              <h3>Transforming Ideas Into Digital Reality</h3>
              <p>
                Hi, I'm Harsh Singh, a passionate full-stack developer with over
                3 years of experience creating digital solutions that make a
                real difference. I specialize in building mobile apps, web
                applications, and AI-powered systems that help businesses grow
                and succeed.
              </p>

              <p>
                What sets me apart is my focus on understanding your business
                goals first, then crafting technology solutions that drive
                measurable results. Whether you're a startup looking to validate
                your idea or an established business ready to scale, I'm here to
                turn your vision into reality.
              </p>

              <div className="about__stats">
                <div className="stat__item">
                  <h4>50+</h4>
                  <span>Projects Completed</span>
                </div>
                <div className="stat__item">
                  <h4>30+</h4>
                  <span>Happy Clients</span>
                </div>
                <div className="stat__item">
                  <h4>3+</h4>
                  <span>Years Experience</span>
                </div>
              </div>

              <div className="about__actions">
                <button onClick={scrollToContact} className="btn btn-primary">
                  Let's Work Together
                </button>
                <a href="/resume.pdf" download className="btn btn-outline">
                  <FaDownload /> Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="about__expertise">
            <h3>Why Choose Me?</h3>
            <div className="expertise__grid">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className={`about__card ${
                    visibleCards.includes(index) ? "fade-in" : ""
                  }`}
                  data-index={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card__icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <ul>
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="about__skills">
            <h3>Technical Skills</h3>
            <div className="skills__container">
              {skills.map((skill, index) => (
                <div key={index} className="skill__item">
                  <div className="skill__header">
                    <span className="skill__name">{skill.name}</span>
                    <span className="skill__category">{skill.category}</span>
                    <span className="skill__level">{skill.level}%</span>
                  </div>
                  <div className="skill__bar">
                    <div
                      className="skill__progress"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__journey">
            <h3>My Journey</h3>
            <div className="journey__timeline">
              <div className="timeline__item">
                <div className="timeline__year">2021</div>
                <div className="timeline__content">
                  <h4>Started My Development Journey</h4>
                  <p>
                    Began learning programming and fell in love with creating
                    digital solutions.
                  </p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__year">2022</div>
                <div className="timeline__content">
                  <h4>First Client Projects</h4>
                  <p>
                    Started freelancing and delivered my first mobile app that
                    helped a local business increase sales by 200%.
                  </p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__year">2023</div>
                <div className="timeline__content">
                  <h4>Expanded to Full-Stack</h4>
                  <p>
                    Mastered both frontend and backend development, specializing
                    in React and Python ecosystems.
                  </p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__year">2024</div>
                <div className="timeline__content">
                  <h4>AI Integration Specialist</h4>
                  <p>
                    Added AI/ML capabilities to my skillset, helping businesses
                    leverage artificial intelligence for competitive advantage.
                  </p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__year">2025</div>
                <div className="timeline__content">
                  <h4>Growing My Impact</h4>
                  <p>
                    Focusing on helping more businesses transform their
                    operations through custom software solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__cta">
            <h3>Ready to Build Something Amazing?</h3>
            <p>
              Let's discuss your project and explore how we can work together to
              achieve your business goals. I'm always excited to take on new
              challenges and create solutions that make a difference.
            </p>
            <div className="cta__actions">
              <button
                onClick={scrollToContact}
                className="btn btn-primary btn-lg"
              >
                Start Your Project
              </button>
              <a
                href="https://calendly.com/harshsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                <FaExternalLinkAlt /> Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
