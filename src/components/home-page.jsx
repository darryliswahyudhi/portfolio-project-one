//Imports from React
import React from "react";

//Imports from files
import Header from "./header";
import "../css/home-page.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page-body">
        <div className="top-div">
          <div className="left-div">
            <p>First paragraph</p>
            <p>Second paragraph</p>
            <p>Third paragraph</p>
            <div className="right-button-div">
              <button>Button</button>
            </div>
          </div>
          <div className="right-div">
            <p>Image</p>
          </div>
        </div>
        <div className="bottom-div">
          <span>Data Science</span><span>Data Engineering</span><span>Cloud Engineering</span>
        </div>
        <div className="content-div">
        <div className="about-content">
            <div className="about-top">
                <div className="about-content-img">
                <p>this is for image</p>
                </div>
                <div className="about-content-p">
                <span>About Me</span>
                              <p>this is for description</p>
                              <button>Button</button>
                </div>
            </div>
            </div>
            <div className="project-content">
                <p>this is for project</p>
            </div>
            <div className="resume-content">
                <p>this is for resume</p>
            </div>
            <div className="contact-content">
                <p>this is for contact</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
