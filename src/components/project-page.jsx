//Imports from React
import React, { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

//Imports from files
import "../css/project-page.css";
import Header from "./header";
import Footer from "./footer";

function ProjectPage() {
  return (
    <div className="project-page-container">
      <div>
        <Header />
      </div>
      <div className="project-page-body">
        <div className="project-body-title">
          <span>Projects</span>
        </div>
      <div className="project-section">
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
              <div className="project">
            <div className="project-image">
              <p>this is for image</p>
            </div>
            <div className="project-image-desc">
              <h3>Project 3</h3>
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
      <div className="project">
        
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ProjectPage;
