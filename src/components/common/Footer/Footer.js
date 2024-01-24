import Container from "react-bootstrap/esm/Container"

export const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
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