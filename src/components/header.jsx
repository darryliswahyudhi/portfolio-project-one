//Imports from React
import React, { useState, useEffect } from 'react';

//Imports from files
import '../css/header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024); // add this

    // add this
    useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 1024);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <header className="header-container flex justify-between items-center p-5 bg-blue-500">
        <div className="header-logo flex-grow">
          <p className="text-white">Logo</p>
        </div>
        <div className="header-right lg:w-1/2 w-full justify-end flex">
          <div className="menu-container">
            <button 
              className="header-navbar-button lg:hidden block" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
            {(isOpen || isLargeScreen ) && (
              <ul className={`header-nav ${isOpen ? 'block' : 'hidden'} lg:flex items-center`}>
                <li className="header-button mr-12"><a href="#" className="text-white">Home</a></li>
                <li className="header-button mr-12"><a href="#" className="text-white">About</a></li>
                <li className="header-button mr-12"><a href="#" className="text-white">Projects</a></li>
                <li className="header-button mr-12"><a href="#" className="text-white">Resume</a></li>
                <li className="header-button mr-12"><a href="#" className="text-white">Contact</a></li>
                <li className="header-button mr-12">
                  <button className="header-mail-button bg-white text-blue-500 px-5 py-2 rounded-full">example@gmail.com</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    );
  }

export default Header;
