//Imports from React
import React from "react";

//Imports from files
import Header from "./header";
import Footer from './footer';
import "../css/home-page.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <div>
        <Header />
      </div>
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
          <span>Data Science</span>
          <span>Data Engineering</span>
          <span>Cloud Engineering</span>
        </div>
        <div className="content-div">
          <div className="about-content">
            <div className="about-title">
              <h1>About</h1>
            </div>
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
            <div className="project-title">
              <h1>Projects</h1>
            </div>
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
          <div className="project-link">
            <button>Button</button>
          </div>
          <div className="resume-content">
            <div className="resume-desc">
              <h3>Resume</h3>
              <p>This is for description</p>
              <button>Button</button>
            </div>
            <div className="resume-img">
              <p>This is for image</p>
            </div>
          </div>
          <div className="contact-content">
            <div className="contact-img">
              <p>This is for image</p>
            </div>
            <div className="contact-form">
              <h2>Contact</h2>
              <form>
                <label for="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                ></input>
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                ></input>
                <label for="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
