import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Observer to detect when the section is in view
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about" // Ensure this ID is added for the scroll navigation
      className={`about-me-section bg-dark text-white py-5 ${
        isVisible ? 'about-me-visible' : 'about-me-hidden'
      }`}
    >
      <div className="container">
        <h2 className="text-center display-4 mb-4">
        About Me
        </h2>
        <div className="row align-items-center">
          {/* Personal Info Section */}
          <div className="col-md-6">
            <h3 className="h5 fw-bold mb-3">Personal Information</h3>
            <ul className="list-unstyled text-secondary">
              <li><strong>Name:</strong> Sindi Setiawati</li>
              <li><strong>Status:</strong> IT Student</li>
              <li><strong>Specialization:</strong> Web Development & Design</li>
              <li><strong>Email:</strong> sindisetiawati707@gmail.com</li>
              <li><strong>Location:</strong> Yogyakarta, Indonesia</li>
            </ul>
          </div>

          {/* Fun Facts Section */}
          <div className="col-md-6">
            <div className="row text-center">
              <div className="col-6 mb-3">
                <div className="p-3 bg-secondary bg-opacity-25 rounded">
                  <h3 className="text-warning fw-bold">1+</h3>
                  <p className="small text-secondary">Years of Coding</p>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="p-3 bg-secondary bg-opacity-25 rounded">
                  <h3 className="text-warning fw-bold">5+</h3>
                  <p className="small text-secondary">Projects Completed</p>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3 bg-secondary bg-opacity-25 rounded">
                  <h3 className="text-warning fw-bold">10+</h3>
                  <p className="small text-secondary">Courses Taken</p>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3 bg-secondary bg-opacity-25 rounded">
                  <h3 className="text-warning fw-bold">2+</h3>
                  <p className="small text-secondary">Ability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
