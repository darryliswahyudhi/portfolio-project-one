//Imports from React
import React from 'react';

//Imports from files
import '../css/header.css';

function Header() {
    return (
        <header className="header-page-container">
            <div className="header-page-body">
                <div className="header-left">
                    <div className="header-logo">
                        <p>Logo</p>
                    </div>
                </div>
                <div className="header-right">
                    <ul className="header-nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="header-button">
        <button className="header-email">example@gmail.com</button>
    </div>
</div>

            </div>
        </header>
    );
}

export default Header;
