import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../../images/logo.png';


function Navigation() {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (
        <Navbar className={scrolled ? "navbar scrolled" : "navbar"} collapseOnSelect expand="sm" id="navbar" sticky="top" variant="dark" >
            <Container>
                <Navbar.Brand href="#home" className="brand-container">
                    <img
                        alt=""
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top brand-logo"
                    />{' '}
                    <div className='brand-text'>
                        <div className='nav-title'>ALBRON DGS INC</div>
                        <div className='nav-subtitle'>Engineering Design & Drafting</div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link><Link className='link' to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link className='link' to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link className='link' to="/services">Services</Link></Nav.Link>
                        <Nav.Link><Link className='link' to="/projects">Projects</Link></Nav.Link>
                        <Nav.Link><Link className='link' to="/contact">Contact</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;