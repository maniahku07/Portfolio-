import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h2 className="footer-title">Manish Kumar</h2>

                <ul className="footer-list">
                    <li>
                        <a aria-label="About Section" href="#about" className="footer-link">About</a>
                    </li>
                    <li>
                        <a aria-label="Projects Section" href="#projects" className="footer-link">Projects</a>
                    </li>
                    <li>
                        <a aria-label="Resources Section" href="#resources" className="footer-link">Resources</a>
                    </li>
                </ul>

                <div className="footer-social">
                    <a aria-label="GitHub" href="https://github.com/maniahku07" className='footer-social-link' target="_blank" rel="noreferrer">
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a aria-label="LinkedIn" href="https://www.linkedin.com/in/manish-kumar-26205a267/" className='footer-social-link' target="_blank" rel="noreferrer">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a aria-label="Instagram" href="https://www.instagram.com/_manish_ku07/" className='footer-social-link' target="_blank" rel="noreferrer">
                        <i className="uil uil-instagram"></i>
                    </a>
                </div>
            </div>
        </footer >
    )
}

export default Footer