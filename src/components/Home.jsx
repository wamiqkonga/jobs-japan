import React from 'react';
import Logo from './logo.png';

const Home = () => {
  return (
    <>
    
    <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
    

    </>
  );
}

export default Home;
