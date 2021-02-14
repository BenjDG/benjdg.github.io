<<<<<<< HEAD
import React from 'react';
import './styles.css';
=======
import React from "react";
// import "./styles.css";
>>>>>>> 098d1b5... add grid to header

function Contact () {
  return (
    <div className='container'>
      <section id='contact' className='contact-section'>
        <h2>Contact Me</h2>
        <hr />
        <div className='row contact-icons'>
          <div className='col text-center'>
            <a href='https://www.linkedin.com/in/ben-g-b2a74353/'><i className='fab fa-linkedin fa-9x' />
            </a>
          </div>
          <div className='col text-center'>
            <a href='https://github.com/BenjDG'><i className='fab fa-github-square fa-9x' />
            </a>
          </div>
          <div className='col text-center'>
            <a href='mailto:bdgalloway85@gmail.com'><i className='fas fa-envelope fa-9x' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
