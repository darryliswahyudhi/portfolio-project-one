import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import ProjectPage from './components/project-page';
import AboutPage from './components/about-page';
import ContactPage from './components/contact-page';
import './css/App.css';

function App() {
  return (
    <div className="App h-screen w-full overflow-auto">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/*" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
