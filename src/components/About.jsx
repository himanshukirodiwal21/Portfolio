import React from "react";
import resumePdf from "../assets/Himanshu-CV.pdf";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <div className="about-content fade-in">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p style={{ display: "inline" }}>
              <strong>📧 Email:</strong>{" "}
              <a
                href="mailto:himanshukirodiwal21@gmail.com"
                style={{
                  color: "#ffd700",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                himanshukirodiwal21@gmail.com
              </a>
            </p>

            <p>
              <strong>📱 Phone:</strong>{" "}
              <span
                onClick={() => navigator.clipboard.writeText("+91 8058875153")}
                style={{ cursor: "pointer", color: "#ffd700" }}
                title="Click to copy"
              >
                +91 8058875153
              </span>
            </p>

            <p>
              <strong>📍 Location:</strong>{" "}
              <a
                href="https://www.google.com/maps?q=Jhunjhunu,+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ffd700",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Jhunjhunu, Rajasthan
              </a>
            </p>

            <p>
              <strong>🔗 LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/himanshu-kirodiwal-371b58246"
                style={{ color: "#ffd700" }}
              >
                View Profile
              </a>
            </p>
            <p>
              <strong>💻 GitHub:</strong>
              <a
                href="https://github.com/himanshukirodiwal21"
                style={{ color: "#ffd700" }}
              >
                View Profile
              </a>
            </p>
            <div className="resume-download">
              <a
                href={resumePdf}
                download="Himanshu-CV.pdf"
                className="download-btn"
              >
                📄 Download Resume
              </a>
            </div>
          </div>
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer currently pursuing my
              Bachelor's in Technology from Rajasthan Technical University. With
              a strong foundation in both front-end and back-end technologies, I
              love creating seamless digital experiences that solve real-world
              problems.
            </p>

            <p>
              My journey in tech began with a curiosity about how things work,
              which led me to explore various programming languages and
              frameworks. I've had the opportunity to work as an intern at
              OXmaint Inc, where I contributed to full-stack development
              projects and gained valuable experience in product enhancement and
              customer engagement.
            </p>

            <p>
              I'm particularly interested in modern web technologies, data
              structures and algorithms, and creating user-friendly interfaces.
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or working on personal
              projects that challenge my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
