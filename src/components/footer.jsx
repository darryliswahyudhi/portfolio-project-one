//Imports from React
import React from 'react';
import { Link } from 'react-router-dom';

//Imports from files
import '../css/footer.css';
import InstagramIcon from '../images/icons8-instagram.svg'; // replace with your image path
import GithubIcon from '../images/icons8-github.svg'; // replace with your image path
import TwitterIcon from '../images/icons8-twitter.svg'; // replace with your image path
import LinkedInIcon from '../images/icons8-linkedin.svg'; // replace with your image path
import DevToIcon from '../images/icons8-dev.svg'; // replace with your image path

function Footer() {
    return (
        <footer className="footer-container flex justify-between items-center p-5 bg-blue-500">
            <div className="footer-body">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="footer-msg">
                            <div className="footer-msg-img">
                                <p>This is for image</p>
                            </div>
                            <h3>Darryl Pratama</h3>
                            <p>This is for description</p>
                        </div>
                        <div className="footer-list-container">
                            <ul className="footer-list">
                                <li><img className="footer-icon" src={InstagramIcon} alt="Instagram" /></li>
                                <li><img className="footer-icon" src={GithubIcon} alt="Github" /></li>
                                <li><img className="footer-icon" src={DevToIcon} alt="Dev.to" /></li>
                                <li><img className="footer-icon" src={TwitterIcon} alt="Twitter" /></li>
                                <li><img className="footer-icon" src={LinkedInIcon} alt="LinkedIn" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright 2023</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
