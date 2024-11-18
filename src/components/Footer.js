// Footer.js
import React from 'react';
import '../styles/Footer.css'; // Import your CSS file for styling
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Company Profile</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Injection Moulding</a></li>
                        <li><a href="#">Retrofit Range</a></li>
                        <li><a href="#">Industry 4.0</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Product Catalogues</a></li>
                        <li><a href="#">Video Gallery</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2017 ELECTRONICA PLASTIC MACHINES LIMITED</p>
                <p>All Rights Reserved</p>
                <p>Designed & Developed by Vidhart events</p>
            </div>
        </footer>
    );
};

export default Footer;