import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import Container from "react-bootstrap/esm/Container";
import ProjectItem from "../../../common/ProjectItem/ProjectItem";
import Footer from "../../../common/Footer/Footer";

import BgImage from '../../../../images/p1.jpg';



export const EngineeringandDraftingPage = () => {
    return (
        <div className="engineeringanddraftingpage">
            <Navigation />
            <PageHeader image={BgImage} title="As Built" />
            <Container>
                <div className="servicepage-content">
                    <div className="asbuiltpage-content-container">
                        <div className="servicepage-paragraphs">
                            <h1 className="servicespage-title">Comprehensive As-Built Documentation Services for Construction Projects</h1>
                            <p>At Albron DGS Inc, we offer comprehensive As Built services to accurately document and capture the final state of a construction project. With meticulous attention to detail and a commitment to quality, we provide clients with as-built drawings and documentation that serve as valuable resources for future expansion and maintenance.</p>
                            <div className="servicepage-image">
                            </div>
                            <div className="servicepage-provide-paragraph">
                                <h2>What We Provide</h2>
                                <p>We provide As-Building services to assist various EPCM on their projects. Using the latest technology and techniques, our team captures accurate measurements and detailed information about the physical characteristics of the built environment.

                                    From updating existing drawings to creating new documentation from scratch, we ensure that every detail is captured with precision and clarity. Whether it's a small-scale expansion or a large-scale construction project, our As Built services provide clients with the information they need to make informed decisions and effectively manage their assets.

                                    With a focus on accuracy and efficiency, we strive to deliver As Built documentation that meets the highest standards of quality and reliability. Our commitment to excellence ensures that every project is completed on time, within budget, and to the satisfaction of our clients.</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="services-projects-section">
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default EngineeringandDraftingPage