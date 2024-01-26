import Container from "react-bootstrap/esm/Container"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import Logo from '../../../images/logo.png';

export const Footer = () => {
    return (
        <div className="footer">
            <Container>

                <div className="footer-content">
                    <div className="footer-contact">
                        <img width='100px' height='100px' src={Logo} alt="Albron DGS Inc" />
                        <div className="footer-contact-content">
                            <div className="footer-contact-item">
                                <FontAwesomeIcon icon={faEnvelope} className="footer-contact-icon"></FontAwesomeIcon>
                                <a href="mailto:aarrieta@albrondgsinc.com">Email: aarrieta@albrondgsinc.com</a>
                            </div>
                            <div className="footer-contact-item">
                                <FontAwesomeIcon icon={faPhone} className="footer-contact-icon"></FontAwesomeIcon>
                                <a href="tel:4037039251">Phone: +1 (403)-703-9251</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h3 className="footer-category-title">Site Map</h3>
                        <Link to="/services">Services</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="footer-links">
                        <h3 className="footer-category-title">About Us</h3>
                        <Link to="/">Our Company</Link>
                        <Link to="/">Our Team</Link>
                    </div>
                    <div className="footer-links">
                        <h3 className="footer-category-title">Services</h3>
                        <Link to="/">Engineering Design & Drafting</Link>
                        <Link to="/">As Built</Link>
                        <Link to="/">3D Scanning</Link>
                        <Link to="/">3D Animation</Link>
                        <Link to="/">Construction Design Visualization</Link>
                    </div>
                </div>

                <div className="footer-credits">
                    <p>Albron Designs & Graphic Systems Incorporated <span className="text-orange">©2024 All rights reserved</span></p>
                    <p>Website Designed and Developed by <a href="https://albertarrieta.dev/" className="text-orange">Albert Arrieta</a></p>
                </div>
            </Container>
        </div>
    )
}

export default Footer