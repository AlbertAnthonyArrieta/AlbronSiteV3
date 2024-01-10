import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../../images/logo.png';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="sm" id="navbar" sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="brand-container">
                    <img
                        alt=""
                        src={Logo}
                        width="70"
                        height="70"
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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Services</Nav.Link>
                        <Nav.Link href="#contact">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;