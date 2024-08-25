import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
                <div className="radiologistYarIcon"></div>
                <p>
                RadiologyYar is a site for doctors and residents in the field of radiology, with the help of which diagnosis operations are performed with less errors and valuable conclusions can be reached with the data stored in it.
                </p>
                
            </div>
            <div className="footer-section">
            <h4>Producers</h4>
            <ul>
                <li><a className="footer-a" href="#">About Us</a></li>
                <li><a className="footer-a" href="#">Contact Us</a></li>
                <li><a className="footer-a" href="#">Feature Works</a></li>
                <li><a className="footer-a" href="#">Job Opportunities</a></li>
            </ul>
            </div>
            <div className="footer-section">
            <h4>Useful Links</h4>
            <ul>
                <li><a className="footer-a" href="http://salekan.ir/" target='_blank' rel="noreferrer">The Best Store to Buy Books</a></li>
                <li><a className="footer-a" href="https://www.isr.org.ir/" target='_blank' rel="noreferrer">Radiology Society website</a></li>
            </ul>
            </div>
            <div className="footer-section">
            <h4>Subscribe to Newsletter</h4>
            <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </form>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© Copyright, All Rights Reserved by Abbas Shabrang Maryan</p>
        </div>
    </footer>
  );
}

export default Footer;
