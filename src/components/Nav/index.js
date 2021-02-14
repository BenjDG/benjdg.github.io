<<<<<<< HEAD
import React from 'react';

function Nav () {
  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
      <h2 className='m-2'>Ben Galloway</h2>
=======
import React from "react";

function Nav () {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <h2 className="m-2">Ben Galloway</h2>
<<<<<<< HEAD
      <ThemeSelect />
>>>>>>> 16d56b9... add theme select option
=======
>>>>>>> 648a043... remove theme code
      <button
        className='navbar-toggler'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='#about-me'>About Me</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#portfolio'>Portfolio</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
