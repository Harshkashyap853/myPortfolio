import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Harsh</h1>

            <ul className='footer__list'>
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className='footer__link'>Projects</a>
                    </li>
            </ul>

            <div className='footer__social'>
            <a href='https://www.instagram.com/harshkashyap853/' className='footer__social-link' target='_blank' rel="noopener noreferrer">
        <i class="bx bxl-instagram"></i>
        </a>
        <a href='https://www.linkedin.com/in/harsh-kashyap-786a1b233/' className='footer__social-link' target='_blank' rel="noopener noreferrer">
        <i class="bx bxl-linkedin"></i>
        </a>
        <a href='https://github.com/harshkashyap853' className='footer__social-link' target='_blank' rel="noopener noreferrer">
        <i class="bx bxl-github"></i>
        </a>
            </div>

            <span className='footer__copy'>&#169; Harsh Kashyap. All rights reserved</span>
        </div>

    </footer>
  )
}

export default Footer;