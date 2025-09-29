import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <div className="about-content fade-in">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              <strong>📧 Email:</strong> himanshukirodiwal21@gmail.com
            </p>
            <p>
              <strong>📱 Phone:</strong> +91 8058875153
            </p>
            <p>
              <strong>📍 Location:</strong> Kota, Rajasthan
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
            <div className="resume-download">
              <a
                href="assets/Himanshu-CV.pdf"
                download
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
