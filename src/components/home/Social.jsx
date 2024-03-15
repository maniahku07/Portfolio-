import React from 'react'

const Social = () => {
    return (
        <div className="home-social">
            <a aria-label="GitHub" href="https://github.com/maniahku07" className='home-social-icon' target="_blank" rel="noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/manish-kumar-26205a267/" className='home-social-icon' target="_blank" rel="noreferrer">
                <i className="uil uil-linkedin-alt"></i>
            </a>
            {/* <a href="https://www.youtube.com/@webcosmin" className='home-social-icon' target="_blank">
                <i className="uil uil-youtube"></i>
            </a> */}
            <a aria-label="Instagram" href="https://www.instagram.com/_manish_ku07/" className='home-social-icon' target="_blank" rel="noreferrer">
                <i className="uil uil-instagram"></i>
            </a>
            <a aria-label="Facebook" href="#" className='home-social-icon' target="_blank" rel="noreferrer">
                <i className="uil uil-facebook-f"></i>
            </a>
        </div>
    )
}

export default Social