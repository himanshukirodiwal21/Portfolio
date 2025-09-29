import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Education</h2>
        <div className="education-timeline fade-in">
          <div className="education-item">
            <h3>Bachelor of Technology</h3>
            <h4>University Department Rajasthan Technical University, Kota</h4>
            <p><strong>Duration:</strong> 2022 - 2026</p>
            <p><strong>Branch:</strong> Information Technology</p>
            <p>
              Currently pursuing my undergraduate degree in{" "}
              <i><b>Information Technology</b></i>, focusing on computer
              science and engineering fundamentals.
            </p>
          </div>

          <div className="education-item">
            <h3>Senior Secondary Education (12th)</h3>
            <h4>Karni Vidhya Niketan, Khetri, Jhunjhunu, Rajasthan</h4>
            <p><strong>Year:</strong> 2021</p>
            <p><strong>Percentage:</strong> 93.60%</p>
            <p>
              Completed higher secondary education with exceptional academic
              performance, laying a strong foundation for technical studies.
            </p>
          </div>

          <div className="education-item">
            <h3>Secondary Education (10th)</h3>
            <h4>Karni Vidhya Niketan, Khetri, Jhunjhunu, Rajasthan</h4>
            <p><strong>Year:</strong> 2019</p>
            <p><strong>Percentage:</strong> 79.33%</p>
            <p>
              Completed secondary education with outstanding academic
              performance, establishing a solid groundwork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
