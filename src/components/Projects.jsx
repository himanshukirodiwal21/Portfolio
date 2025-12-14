import React from "react";

const Projects = () => {
  return (
    <>
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title fade-in">Projects</h2>
          <div className="projects-grid fade-in">
            <a
              href="https://github.com/himanshukirodiwal21/UniPlay"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="project-card">
                <div className="project-header">
                  <div className="project-icon">🏆</div>
                  <div className="project-title">UniPlay – University Sports Platform</div>
                </div>
                <div className="project-content">
                  <p>
                    A full-stack MERN-based university sports management platform featuring
                    admin-controlled event approvals, team registrations, live match score
                    updates, event status tracking, and a centralized dashboard for managing
                    tournaments, campus competitions, and overall event workflows in a
                    scalable and user-friendly system.
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://himanshukirodiwal21.github.io/Solar-explorer/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="project-card">
                <div className="project-header">
                  <div className="project-icon">🪐</div>
                  <div className="project-title">Solar Explorer</div>
                </div>
                <div className="project-content">
                  <p>
                    Solar Explorer is an interactive solar system model built
                    entirely with HTML and CSS. It allows users to explore
                    planets, their facts, and moons through a clean, responsive
                    interface without using JavaScript. This project highlights
                    advanced CSS techniques, creative UI design, and my ability
                    to build engaging, educational web experiences.
                  </p>
                </div>
              </div>
            </a>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🎵</div>
                <div className="project-title">Spotify Clone</div>
              </div>
              <div className="project-content">
                <p>
                  A full-featured music streaming application built with modern
                  web technologies, featuring user authentication, playlist
                  management, and audio playback functionality.
                </p>
              </div>
            </div>

            <a
              href="https://himanshukirodiwal21.github.io/Tourist-Guide/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="project-card">
                <div className="project-header">
                  <div className="project-icon">🗺️</div>
                  <div className="project-title">Tourist Guide</div>
                </div>
                <div className="project-content">
                  <p>
                    An interactive travel guide web app that helps users explore
                    new destinations, discover must-visit attractions, and plan
                    memorable trips efficiently, offering detailed guides,
                    travel tips, and curated recommendations for a seamless
                    experience.
                  </p>
                </div>
              </div>
            </a>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">📱</div>
                <div className="project-title">QR Code Reader</div>
              </div>
              <div className="project-content">
                <p>
                  A responsive web application that allows users to scan and
                  generate QR codes, with support for various data types and
                  formats.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🛒</div>
                <div className="project-title">E-commerce Website</div>
              </div>
              <div className="project-content">
                <p>
                  A complete online shopping platform with user authentication,
                  product catalog, shopping cart, and payment integration
                  capabilities.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">📚</div>
                <div className="project-title">Online Bookstore</div>
              </div>
              <div className="project-content">
                <p>
                  A digital bookstore application featuring book search,
                  reviews, recommendations, and secure online purchasing
                  functionality.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🌤️</div>
                <div className="project-title">Weather Website</div>
              </div>
              <div className="project-content">
                <p>
                  A real-time weather application that provides current weather
                  conditions, forecasts, and location-based weather information.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">💼</div>
                <div className="project-title">Portfolio Website</div>
              </div>
              <div className="project-content">
                <p>
                  A personal portfolio built from scratch using React and Vite.
                  Features a modern, responsive design with dynamic animations
                  to showcase my skills, projects, and experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
