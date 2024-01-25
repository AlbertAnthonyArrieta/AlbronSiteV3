import Container from "react-bootstrap/esm/Container"
import BigButton from "../../../common/BigButton/BigButton"

export const ContactSection = () => {
    return (
        <div className="contact-section">
            <Container>
                <div className="contact-container">
                    <div>
                        <h1 className="contact-title">Let's Work Together</h1>
                    </div>
                    <div className="contact-desc">
                        <p>Feel free to contact us for your ideas to put into detail. No job too big or small. If you're an individual contractor, innovator or a small fabricator, give us a call and let us know how we can help with your project. We are your team outside your office.</p>
                        <BigButton text="Contact Us" type="primary" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactSection