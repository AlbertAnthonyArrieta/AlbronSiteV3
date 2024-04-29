import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import Logo from '../../../images/logo.png';


function Navigation() {

    return (
        <Navbar className="navbar" collapseOnSelect expand="sm" id="navbar" sticky="top" variant="dark" >
            <Container>
                <Link to='/' >
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
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <NavDropdown title="Services"
                            className="nav-dropdown">
                            <NavDropdown.Item><Link className='link' to="/services/engineeringanddrafting">Engineering Design & Drafting</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='link' to="/services/constructiondesign">Construction Design Visualization</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='link' to="/services/3danimation">3D Animation</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='link' to="/services/asbuilt">As Built</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='link' to="/services/3dscanning">3D Scanning</Link></NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Projects"
                            className="nav-dropdown">
                            <NavDropdown.Item><Link className='link' to="/projects/facilities">Facilities</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='link' to="/projects/wellpads">Well Pads </Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='link' to="/projects/pipelines">Pipelines</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='link' to="/projects/powergeneration">Power Generation</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><Link className='link' to="/contact">Contact</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;