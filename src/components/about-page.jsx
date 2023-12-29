//Imports from React
import React from "react";

//Imports from files
import "../css/about-page.css";
import Header from "./header";
import Footer from "./footer";

function AboutPage() {
  return (
    <div className="about-page-container">
      <div>
        <Header />
      </div>
      <div className="about-page-body">
        <div className="about-me">
          <div className="about-me-img">
            <p>This is for image</p>
          </div>
          <div className="about-me-desc">
            <h3>About Me</h3>
            <p>This is for description</p>
          </div>
        </div>
        <div className="about-story">
          <div className="about-story-desc">
            <h3>My Story</h3>
            <p>This is for description</p>
          </div>
          <div className="about-story-img">
            <p>This is for image</p>
          </div>
        </div>
        <div className="about-skills-hook">
            <span>Here's the list of tools I use</span>    
        </div>
        <div className="about-skills">
          <div className="about-data-science">
            <h2>Data Science</h2>
            <div className="skill-grid-list">
              <div className="skill-grid">
                <div className="skill">Skill 1</div>
                <div className="skill">Skill 2</div>
                <div className="skill">Skill 3</div>
                <div className="skill">Skill 4</div>
                <div className="skill">Skill 5</div>
                <div className="skill">Skill 6</div>
                <div className="skill">Skill 7</div>
                <div className="skill">Skill 8</div>
              </div>
            </div>
          </div>

          <div className="about-data-engineering">
            <h2>Data Engineering</h2>
            <div className="skill-grid-list">
              <div className="skill-grid">
                <div className="skill">Skill 1</div>
                <div className="skill">Skill 2</div>
                <div className="skill">Skill 3</div>
                <div className="skill">Skill 4</div>
                <div className="skill">Skill 5</div>
                <div className="skill">Skill 6</div>
                <div className="skill">Skill 7</div>
                <div className="skill">Skill 8</div>
              </div>
            </div>
          </div>
          <div className="about-cloud-computation">
            <h2>Cloud Computation</h2>
            <div className="skill-grid-list">
              <div className="skill-grid">
                <div className="skill">Skill 1</div>
                <div className="skill">Skill 2</div>
                <div className="skill">Skill 3</div>
                <div className="skill">Skill 4</div>
                <div className="skill">Skill 5</div>
                <div className="skill">Skill 6</div>
                <div className="skill">Skill 7</div>
                <div className="skill">Skill 8</div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-projects-hook">
            <span>Want to see how I use them? (Arrow pointing to right)</span>
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
