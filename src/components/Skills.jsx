import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Skills</h2>
        <div className="skills-grid fade-in">
          <div className="skill-category">
            <h3>Full Stack Development</h3>
            <div className="skill-tags">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Mongoose</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">SQL</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>DSA & Programming</h3>
            <div className="skill-tags">
              <span className="skill-tag">C++</span>
              <span className="skill-tag">Arrays</span>
              <span className="skill-tag">Sorting Algorithms</span>
              <span className="skill-tag">Searching</span>
              <span className="skill-tag">Recursion</span>
              <span className="skill-tag">Linked Lists</span>
              <span className="skill-tag">Stacks</span>
              <span className="skill-tag">Queues</span>
              <span className="skill-tag">Time Complexity</span>
              <span className="skill-tag">Space Complexity</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Technical Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Version Control</span>
              <span className="skill-tag">Clean Code</span>
              <span className="skill-tag">Code Reviews</span>
              <span className="skill-tag">Unit Testing</span>
              <span className="skill-tag">JUnit</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">Problem-Solving</span>
              <span className="skill-tag">Communication</span>
              <span className="skill-tag">Teamwork</span>
              <span className="skill-tag">Adaptability</span>
              <span className="skill-tag">Time Management</span>
              <span className="skill-tag">Attention to Detail</span>
              <span className="skill-tag">Creativity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;