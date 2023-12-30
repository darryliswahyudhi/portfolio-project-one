//Imports from React
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//Imports from files
import "../css/project-page.css";
import Header from "./header";
import Footer from "./footer";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

function ProjectPage() {
  const [direction, setDirection] = useState(0);
  const [index, setIndex] = useState(0);

  const projectSections = [
    <div className="project-section">
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
    </div>,
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
        </div>
      </div>
    </div>,
    <div className="project-section">
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
    </div>,
  ];

  const numSections = projectSections.length;

  return (
    <div className="project-page-container">
      <div>
        <Header />
      </div>
      <div className="project-page-body">
        <div className="project-body-title">
          <span>Projects</span>
        </div>
        <div className="project-container">
        <button onClick={() => {setIndex((numSections + index - 1) % numSections); setDirection(-1);}}>Prev</button>
        <button onClick={() => {setIndex((index + 1) % numSections); setDirection(1);}}>Next</button>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 1 },
              }}
            >
              {projectSections[index]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ProjectPage;
