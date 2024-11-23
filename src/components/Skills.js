import React, { useState, useEffect, useRef } from "react";
import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/js.png";
import meter4 from "../assets/img/react.png";
import meter5 from "../assets/img/figmaa.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
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
    <section className="skill" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Add the class based on visibility state */}
            <div className={isVisible ? "skill-bx animate-fadeIn" : "skill-bx hidden"}>
              <h2>Skills</h2>
              <div className="skills-grid">
                <div className={isVisible ? "skill-item animate-slideInUp" : "skill-item hidden"}>
                  <img src={meter1} alt="Skill 1" className="skill-image" />
                </div>
                <div className={isVisible ? "skill-item animate-slideInUp" : "skill-item hidden"}>
                  <img src={meter2} alt="Skill 2" className="skill-image" />
                </div>
                <div className={isVisible ? "skill-item animate-slideInUp" : "skill-item hidden"}>
                  <img src={meter3} alt="Skill 3" className="skill-image" />
                </div>
                <div className={isVisible ? "skill-item animate-slideInUp" : "skill-item hidden"}>
                  <img src={meter4} alt="Skill 4" className="skill-image" />
                </div>
                <div className={isVisible ? "skill-item animate-slideInUp" : "skill-item hidden"}>
                  <img src={meter5} alt="Skill 5" className="skill-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
