//Imports from React
import React from 'react';

//Imports from files
import '../css/project-page.css';
import Header from './header';
import Footer from './footer';

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
                <div className="project-data-science">
                    <span>Data Science Projects</span>

                </div>
                <div className="project-data-engineering">
                    <span>Data Engineering Projects</span>

                </div>
                <div className="project-cloud-computation">
                    <span>Cloud Computation Projects</span>

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default ProjectPage;