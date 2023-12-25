//Imports from React
import React from 'react';

//Imports from files
import Header from './header';
import '../css/home-page.css';


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
      <span>Data Science</span><span>Data Engineering</span>
    </div>
    <div className="content-div">
        <p>This is content</p>
    </div>
  </div>
</div>

    );
}

export default HomePage;
