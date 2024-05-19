import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dojo">Dojo</Link></li>
        <li><Link to="/resume-builder">Resume Builder</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/job-board">Job Board</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;