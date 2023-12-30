//Imports from React
import React, { useState } from "react";

//Imports from files
import "../css/project-page.css";
import Header from "./header";
import Footer from "./footer";

function ProjectPage() {
  const sections = ["data-science", "data-engineering", "cloud-computation"]; 
  const [currentSection, setCurrentSection] = useState("data-science");

  const getPreviousSection = () => {
    const prevIndex = sections.indexOf(currentSection) === 0 ? sections.length - 1 : sections.indexOf(currentSection) - 1;
    return sections[prevIndex];
  };

  const getNextSection = () => {
    const nextIndex = sections.indexOf(currentSection) === sections.length - 1 ? 0 : sections.indexOf(currentSection) + 1;
    return sections[nextIndex];
  };

  const handlePrev = () => {
    setCurrentSection(getPreviousSection());
  };

  const handleNext = () => {
    setCurrentSection(getNextSection());
  };

  return (
    <div className="project-page-container">
      <div>
        <Header />
      </div>
      <div className="project-page-body">
        <div className="project-body-title">
          <span>Projects</span>
        </div>
        <div className="data-barba-container">
          {currentSection === "data-science" && (
            <div className="data-barba-container" data-barba-namespace="data-science">
              <span>Data Science</span>
              <div className="ds-showcase">
                <div className="project-content">
                  <div className="project">
                    <div className="project-image">
                      <p>this is for image</p>
                    </div>
                    <div className="project-image-desc">
                      <h3>Project 1</h3>
                      <p>This is description</p>
                    </div>
                  </div>
                  <div className="project">
                    <div className="project-image">
                      <p>this is for image</p>
                    </div>
                    <div className="project-image-desc">
                      <h3>Project 2</h3>
                      <p>This is description</p>
                    </div>
                  </div>
                  <div className="project">
                    <div className="project-image">
                      <p>this is for image</p>
                    </div>
                    <div className="project-image-desc">
                      <h3>Project 3</h3>
                      <p>This is description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentSection === "data-engineering" && (
            <div className="data-barba-container" data-barba-namespace="data-engineering">
              <span>Data Engineering</span>
              <div className="de-showcase">
                <div className="project-content">
                  <div className="project">
                    <div className="project-image">
                      <p>this is for image</p>
                    </div>
                    <div className="project-image-desc">
                      <h3>Project 1</h3>
                      <p>This is description</p>
                    </div>
                  </div>
                  <div className="project">
                    <div className="project-image">
                      <p>this is for image</p>
                    </div>
                    <div className="project-image-desc">
                      <h3>Project 2</h3>
                      <p>This is description</p>
                    </div>
                  </div>
                  <div className="project">
                    <div className="project-image">
                      <p>this is for image</p>
                    </div>
                    <div className="project-image-desc">
                      <h3>Project 3</h3>
                      <p>This is description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentSection === "cloud-computation" && (
            <div className="data-barba-container" data-barba-namespace="cloud-computation">
              <span>Cloud Computation</span>
              <div className="cc-showcase">
                <div className="project-content">
                  <div className="project">
                    <div className="project-image">
                      <p>this is for image</p>
                    </div>
                    <div className="project-image-desc">
                      <h3>Project 1</h3>
                      <p>This is description</p>
                    </div>
                  </div>
                  <div className="project">
                    <div className="project-image">
                      <p>this is for image</p>
                    </div>
                    <div className="project-image-desc">
                      <h3>Project 2</h3>
                      <p>This is description</p>
                    </div>
                  </div>
                  <div className="project">
                    <div className="project-image">
                      <p>this is for image</p>
                    </div>
                    <div className="project-image-desc">
                      <h3>Project 3</h3>
                      <p>This is description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="prev-project" onClick={handlePrev}>Prev</button>
        <button className="next-project" onClick={handleNext}>Next</button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ProjectPage;
