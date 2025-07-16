import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFilter,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
} from "react-icons/fa";
import "./portfolio.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleProjects((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll(".portfolio__item");
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "LuLu AI Stylist App",
      category: "mobile",
      client: "Persist Ventures",
      challenge:
        "Create an AI-powered fashion styling platform that provides personalized outfit recommendations",
      solution:
        "Developed a Flutter mobile app with FastAPI backend, integrating OpenAI for intelligent styling advice",
      results: [
        "95% user satisfaction rate",
        "40% increase in user engagement",
        "Featured on Product Hunt",
      ],
      technologies: ["Flutter", "FastAPI", "OpenAI", "PostgreSQL"],
      image:
        "https://github.com/harshsingh-io/lulu_stylist_app/blob/main/screenshots/ai-fashion-mockup.png?raw=true",
      screenshots: [
        "https://github.com/harshsingh-io/lulu_stylist_app/blob/main/screenshots/ai-fashion-mockup.png?raw=true",
        "https://github.com/harshsingh-io/lulu_stylist_app/blob/main/screenshots/1.jpg?raw=true",
        "https://github.com/harshsingh-io/lulu_stylist_app/blob/main/screenshots/2.jpg?raw=true",
        "https://github.com/harshsingh-io/lulu_stylist_app/blob/main/screenshots/4.jpg?raw=true",
        "https://github.com/harshsingh-io/lulu_stylist_app/blob/main/screenshots/5.jpg?raw=true",
        "https://github.com/harshsingh-io/lulu_stylist_app/blob/main/screenshots/6.jpg?raw=true",
        "https://github.com/harshsingh-io/lulu_stylist_app/blob/main/screenshots/7.jpg?raw=true",
        "https://github.com/harshsingh-io/lulu_stylist_app/blob/main/screenshots/8.jpg?raw=true",
        "https://github.com/harshsingh-io/lulu_stylist_app/blob/main/screenshots/9.jpg?raw=true",
      ],
      demoVideoId: "1tngnYXZliwu5czziU4tnQ8ymeX5zZpxT",
      github: "https://github.com/harshsingh-io/lulu_stylist_app",
      demo: "#",
      timeline: "3 months",
      budget: "$15,000",
      featured: true,
    },
    {
      id: 2,
      title: "Passport Seva Android App",
      category: "mobile",
      client: "Government Services",
      challenge:
        "Modernize passport application process with a user-friendly mobile interface",
      solution:
        "Built modern Android app with Jetpack Compose following Clean Architecture principles",
      results: [
        "50% reduction in application time",
        "90% user approval rating",
        "200% increase in mobile applications",
      ],
      technologies: ["Android", "Kotlin", "Jetpack Compose", "MVVM"],
      image:
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/passportMockup.png?raw=true",
      screenshots: [
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/passportMockup.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/homePage.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/appointmentBookingScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/feeCalculatorScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/dark_theme/documentAdvisorScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/loginScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/registrationScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/appointmentBookingDateAndTimeScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/appointmentDetiailsScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/documentAdvisorScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/annexuresScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/faqScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/profileScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/editProfileScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/light_theme/servicesScreen.png?raw=true",
        "https://github.com/harshsingh-io/passport-seva/blob/main/screenshots/dark_theme/homeScreen.png?raw=true",
      ],
      demoVideoId: "1VSdQYoRXCivt442kYAqxiPsILtdZYNDI",
      github: "https://github.com/harshsingh-io/passport-seva",
      demo: "#",
      timeline: "4 months",
      budget: "$12,000",
      featured: true,
    },
    {
      id: 3,
      title: "Tensix Media Website",
      category: "web",
      client: "Tensix Media Softech",
      challenge:
        "Create a modern, responsive website to showcase company services and portfolio",
      solution:
        "Developed React-based website with Next.js, featuring portfolio showcase and client testimonials",
      results: [
        "300% increase in website traffic",
        "60% improvement in lead generation",
        "100% mobile responsiveness score",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
      image:
        "https://github.com/harshsingh-io/certifications-and-achievements/blob/main/tensixmediaMockup.png?raw=true",
      screenshots: [
        "https://github.com/harshsingh-io/certifications-and-achievements/blob/main/tensixmediaMockup.png?raw=true",
      ],
      github: "https://github.com/harshsingh-io/tensixmedia",
      demo: "https://harshsinghh.me/tensixmedia/",
      timeline: "2 months",
      budget: "$8,000",
      featured: true,
    },
    {
      id: 4,
      title: "AI Fruit Freshness Analysis",
      category: "ai",
      client: "AgriTech Solutions",
      challenge:
        "Develop AI system to automatically detect fruit freshness for quality control",
      solution:
        "Built deep learning model using TensorFlow for computer vision-based freshness detection",
      results: [
        "94% accuracy in freshness detection",
        "80% reduction in manual inspection time",
        "Deployed across 50+ facilities",
      ],
      technologies: ["TensorFlow", "Python", "OpenCV", "FastAPI"],
      image:
        "https://github.com/harshsingh-io/certifications-and-achievements/blob/main/freshnessAnalysisMockup.png?raw=true",
      screenshots: [
        "https://github.com/harshsingh-io/certifications-and-achievements/blob/main/freshnessAnalysisMockup.png?raw=true",
      ],
      github: "https://github.com/harshsingh-io/fruit_freshness_analysis",
      demo: "#",
      timeline: "5 months",
      budget: "$20,000",
      featured: true,
    },
    {
      id: 5,
      title: "Testline Quiz Platform",
      category: "mobile",
      client: "EduTech Startup",
      challenge:
        "Create engaging quiz platform with real-time scoring and analytics",
      solution:
        "Developed Flutter quiz app with gamification elements and interactive experience",
      results: [
        "10,000+ active users",
        "85% completion rate",
        "Featured in top education apps",
      ],
      technologies: ["Flutter", "http", "flutter_markdown", "confetti"],
      image:
        "https://github.com/harshsingh-io/certifications-and-achievements/blob/main/testlineQuizMockup.png?raw=true",
      screenshots: [
        "https://github.com/harshsingh-io/certifications-and-achievements/blob/main/testlineQuizMockup.png?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/dark_theme/1.jpg?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/dark_theme/2.jpg?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/dark_theme/3.jpg?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/dark_theme/4.jpg?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/dark_theme/5.jpg?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/light_theme/1.jpg?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/light_theme/2.jpg?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/light_theme/3.jpg?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/light_theme/4.jpg?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/light_theme/5.jpg?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/light_theme/6.jpg?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/1.jpg?raw=true",
        "https://github.com/harshsingh-io/testline_quiz_app/blob/main/assets/screenshots/2.jpg?raw=true",
      ],
      demoVideoId: "14pQjzmEMRyg7yI5N2PDnCxA04VvqxWYE",
      github: "https://github.com/harshsingh-io/testline_quiz_app",
      demo: "https://github.com/harshsingh-io/testline_quiz_app/raw/main/app-debug.apk",
      timeline: "3 months",
      budget: "$10,000",
      featured: true,
    },
    {
      id: 6,
      title: "KanbanBoard Task Manager",
      category: "mobile",
      client: "Productivity Solutions",
      challenge:
        "Build comprehensive project management tool with drag-and-drop functionality",
      solution:
        "Created Android app with real-time collaboration features and intuitive UI",
      results: [
        "95% user retention rate",
        "40% increase in team productivity",
        "1000+ downloads in first month",
      ],
      technologies: ["Android", "Kotlin", "Firebase", "Retrofit"],
      image:
        "https://github.com/harshsingh-io/portfolio/blob/master/src/assets/P6.webp?raw=true",
      screenshots: [
        "https://github.com/harshsingh-io/portfolio/blob/master/src/assets/P6.webp?raw=true",
        "https://github.com/harshsingh-io/KanbanBoard/blob/main/Sample/intro.jpg?raw=true",
        "https://github.com/harshsingh-io/KanbanBoard/blob/main/Sample/signup.jpg?raw=true",
        "https://github.com/harshsingh-io/KanbanBoard/blob/main/Sample/login.jpg?raw=true",
        "https://github.com/harshsingh-io/KanbanBoard/blob/main/Sample/mainactivity.jpg?raw=true",
        "https://github.com/harshsingh-io/KanbanBoard/blob/main/Sample/navigation.jpg?raw=true",
        "https://github.com/harshsingh-io/KanbanBoard/blob/main/Sample/editprofile.jpg?raw=true",
        "https://github.com/harshsingh-io/KanbanBoard/blob/main/Sample/taskandcard.jpg?raw=true",
        "https://github.com/harshsingh-io/KanbanBoard/blob/main/Sample/searchmember.jpg?raw=true",
        "https://github.com/harshsingh-io/KanbanBoard/blob/main/Sample/boardmembers.jpg?raw=true",
      ],
      demoVideoId: "1fwTLTl2HqU00ISOEnXdZZmKgwmUE15fG",
      github: "https://github.com/harshsingh-io/KanbanBoard",
      demo: "#",
      timeline: "4 months",
      budget: "$14,000",
      featured: true,
    },
    {
      id: 7,
      title: "Empowerverse | Hopecore",
      category: "mobile",
      client: "Community Empowerment",
      challenge:
        "Create platform for community empowerment initiatives and social impact",
      solution:
        "Built React Native platform connecting communities with empowerment resources and educational content",
      results: [
        "Launched on Google Play Store",
        "Active community engagement",
        "Social impact initiatives",
      ],
      technologies: [
        "React Native",
        "Firebase",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      image:
        "https://github.com/harshsingh-io/certifications-and-achievements/blob/main/empowerverseMockup.png?raw=true",
      screenshots: [
        "https://github.com/harshsingh-io/certifications-and-achievements/blob/main/empowerverseMockup.png?raw=true",
      ],
      github: "#",
      demo: "https://empowerverse.org/",
      playStore:
        "https://play.google.com/store/apps/details?id=com.empowerverse.app&hl=en_IN",
      timeline: "6 months",
      budget: "$18,000",
      featured: true,
    },
    {
      id: 8,
      title: "EcoSync: Electricity Tracking",
      category: "mobile",
      client: "GreenTech Solutions",
      challenge:
        "Monitor and optimize electricity usage in real-time for environmental impact",
      solution:
        "Developed Android app with IoT integration for real-time electricity monitoring and optimization",
      results: [
        "30% reduction in energy consumption",
        "Real-time monitoring capabilities",
        "Environmental impact tracking",
      ],
      technologies: [
        "Kotlin",
        "Android SDK",
        "Data Visualization",
        "IoT Integration",
      ],
      image:
        "https://github.com/harshsingh-io/EcoSync/blob/main/Splash_screen.png?raw=true",
      screenshots: [
        "https://github.com/harshsingh-io/EcoSync/blob/main/Splash_screen.png?raw=true",
        "https://github.com/harshsingh-io/EcoSync/blob/main/Authentication_page.png?raw=true",
        "https://github.com/harshsingh-io/EcoSync/blob/main/Sign_in.png?raw=true",
        "https://github.com/harshsingh-io/EcoSync/blob/main/HomePage.png?raw=true",
        "https://github.com/harshsingh-io/EcoSync/blob/main/StatisticPage.png?raw=true",
        "https://github.com/harshsingh-io/EcoSync/blob/main/UserProfile.png?raw=true",
      ],
      github: "https://github.com/harshsingh-io/EcoSync",
      demo: "#",
      timeline: "4 months",
      budget: "$12,000",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web Apps" },
    { id: "ai", label: "AI/ML Projects" },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setShowVideo(false);
    setIsAnimating(false);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowVideo(false);
    setCurrentImageIndex(0);
    document.body.style.overflow = "unset";
  };

  // Navigation functions for the image slider in modal
  const nextImage = () => {
    if (!selectedProject || isAnimating) return;

    setDirection("next");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => {
        const maxIndex = selectedProject.screenshots.length - 2; // Skip first image (cover)
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
      setIsAnimating(false);
    }, 300);
  };

  const prevImage = () => {
    if (!selectedProject || isAnimating) return;

    setDirection("prev");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => {
        const maxIndex = selectedProject.screenshots.length - 2; // Skip first image (cover)
        return prevIndex === 0 ? maxIndex : prevIndex - 1;
      });
      setIsAnimating(false);
    }, 300);
  };

  // Function to directly navigate to a specific image when clicking a dot
  const goToImage = (index) => {
    if (isAnimating || index === currentImageIndex || !selectedProject) return;

    setDirection(index > currentImageIndex ? "next" : "prev");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  // Preload images when a project is selected
  useEffect(() => {
    if (selectedProject && selectedProject.screenshots) {
      selectedProject.screenshots.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h5>My Work</h5>
        <h2>Success Stories & Case Studies</h2>
        <p className="portfolio__intro">
          Real projects, real results. Here's how I've helped businesses
          transform their ideas into successful digital solutions that drive
          growth and deliver measurable ROI.
        </p>

        {/* Filter Buttons */}
        <div className="portfolio__filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter__btn ${
                activeFilter === category.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              <FaFilter />
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio__container">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`portfolio__item ${
                visibleProjects.includes(index) ? "fade-in" : ""
              }`}
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio__item-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio__overlay">
                  <button
                    className="view-case-study"
                    onClick={() => openModal(project)}
                  >
                    <FaPlay /> Live Preview
                  </button>
                </div>
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>

              <div className="portfolio__item-content">
                <span className="portfolio__category">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="portfolio__client">Client: {project.client}</p>
                <p className="portfolio__description">{project.challenge}</p>

                <div className="portfolio__results">
                  <h4>Key Results:</h4>
                  <ul>
                    {project.results.slice(0, 2).map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>

                <div className="portfolio__tech">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech__badge">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech__more">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="portfolio__actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                  >
                    <FaGithub /> Code
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced Live Preview Modal */}
        {selectedProject && (
          <div className="modal__overlay" onClick={closeModal}>
            <div
              className="modal__content modal__content--enhanced"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal__close" onClick={closeModal}>
                <FaTimes />
              </button>

              <div className="modal__header">
                <h2>{selectedProject.title}</h2>
                <span className="modal__category">
                  {selectedProject.category}
                </span>
              </div>

              <div className="modal__body modal__body--enhanced">
                {/* Live Preview Section */}
                <div className="modal__preview-section">
                  {selectedProject.screenshots &&
                  selectedProject.screenshots.length > 1 ? (
                    <div className="modal__phone-container">
                      <div className="modal__phone">
                        <div className="phone__notch"></div>
                        <div className="phone__screen">
                          {/* Media Toggle */}
                          {selectedProject.demoVideoId && (
                            <div className="media__toggle">
                              <div className="toggle__buttons">
                                <button
                                  className={`toggle__button ${
                                    !showVideo ? "active" : ""
                                  }`}
                                  onClick={() => setShowVideo(false)}
                                >
                                  Images
                                </button>
                                <button
                                  className={`toggle__button ${
                                    showVideo ? "active" : ""
                                  }`}
                                  onClick={() => setShowVideo(true)}
                                >
                                  Video
                                </button>
                              </div>
                            </div>
                          )}

                          {/* Screen Content */}
                          <div className="screen__content">
                            {showVideo && selectedProject.demoVideoId ? (
                              <iframe
                                src={`https://drive.google.com/file/d/${selectedProject.demoVideoId}/preview`}
                                width="100%"
                                height="100%"
                                allow="autoplay"
                                className="app__video"
                                frameBorder="0"
                              />
                            ) : (
                              <div
                                className={`screenshot__slider ${
                                  isAnimating ? `sliding-${direction}` : ""
                                }`}
                              >
                                <img
                                  src={
                                    selectedProject.screenshots[
                                      currentImageIndex + 1
                                    ]
                                  } // Skip first image (cover)
                                  alt={`${selectedProject.title} screenshot ${
                                    currentImageIndex + 1
                                  }`}
                                  className="app__screenshot"
                                  key={currentImageIndex}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Navigation Controls */}
                      {!showVideo && selectedProject.screenshots.length > 2 && (
                        <>
                          <div className="image__navigation">
                            <button
                              className="nav__button nav__button--prev"
                              onClick={prevImage}
                            >
                              <FaChevronLeft />
                            </button>
                            <button
                              className="nav__button nav__button--next"
                              onClick={nextImage}
                            >
                              <FaChevronRight />
                            </button>
                          </div>

                          <div className="pagination__dots">
                            {selectedProject.screenshots
                              .slice(1)
                              .map((_, index) => (
                                <div
                                  key={index}
                                  className={`pagination__dot ${
                                    index === currentImageIndex ? "active" : ""
                                  }`}
                                  onClick={() => goToImage(index)}
                                />
                              ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="modal__mockup-container">
                      <img
                        src={selectedProject.image}
                        alt={`${selectedProject.title} mockup`}
                        className="modal__mockup-image"
                      />
                    </div>
                  )}
                </div>

                {/* Project Details Section */}
                <div className="modal__details-section">
                  <div className="modal__section">
                    <h3>Challenge</h3>
                    <p>{selectedProject.challenge}</p>
                  </div>

                  <div className="modal__section">
                    <h3>Solution</h3>
                    <p>{selectedProject.solution}</p>
                  </div>

                  <div className="modal__section">
                    <h3>Results</h3>
                    <ul>
                      {selectedProject.results.map((result, idx) => (
                        <li key={idx}>{result}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal__meta">
                    <div className="meta__item">
                      <strong>Client:</strong> {selectedProject.client}
                    </div>
                    <div className="meta__item">
                      <strong>Timeline:</strong> {selectedProject.timeline}
                    </div>
                    <div className="meta__item">
                      <strong>Budget:</strong> {selectedProject.budget}
                    </div>
                  </div>

                  <div className="modal__technologies">
                    <h3>Technologies Used</h3>
                    <div className="tech__list">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="tech__badge tech__badge--modal"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal__actions">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--modal"
                    >
                      <FaGithub /> View Code
                    </a>
                    {selectedProject.demo !== "#" && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn--modal"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    {selectedProject.playStore && (
                      <a
                        href={selectedProject.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--modal btn--store"
                      >
                        Google Play
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
