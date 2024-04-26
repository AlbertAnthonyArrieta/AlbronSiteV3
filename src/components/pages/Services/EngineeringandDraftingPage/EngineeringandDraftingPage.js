import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import Container from "react-bootstrap/esm/Container";
import ProjectItem from "../../../common/ProjectItem/ProjectItem";
import Footer from "../../../common/Footer/Footer";

import BgImage from '../../../../images/p3.jpg';
import EngImage from '../../../../images/CompressorStation2/cs2-6(vert).jpg';

import CS1Image from "../../../../images/CompressorStation1/cs1-3.jpg";
import WSB1Image from "../../../../images/WellsiteBattery1/wsb1-1.jpg";



export const EngineeringandDraftingPage = () => {
    return (
        <div className="engineeringanddraftingpage">
            <Navigation />
            <PageHeader image={BgImage} title="Engineering and Drafting" />
            <Container>
                <div className="servicepage-content">
                    <div className="servicepage-content-container">
                        <div className="servicepage-paragraphs">
                            <h1 className="servicespage-title">We are Experienced Mechancal Designers and Drafters</h1>
                            <p>We are a team of professional Mechanical Designers with extensive experience in Oil & Gas, Power Generation and various equipment fabrication. Our main goal is to provide the highest quality mechanical design and drawing package on schedule and on budget. </p>
                            <div className="servicepage-provide-paragraph">
                                <h2>What We Provide</h2>
                                <p>At Albron DGS Inc, we deliver comprehensive solutions tailored to the engineering design sector. Our services encompass detailed mechanical design, precision drafting, and bespoke project planning for industries including Oil & Gas and Power Generation. Our expert team, armed with cutting-edge technology and a wealth of experience, ensures that every blueprint and schematic meets the highest standards of accuracy and functionality. We take pride in our ability to transform complex concepts into tangible, high-quality equipment, all while adhering strictly to our client's timelines and financial plans. Whether it's custom equipment design, detailed analysis, or project management, we are committed to excellence in every aspect of our service delivery.</p>
                            </div>
                        </div>
                        <img src={EngImage} className="servicepage-image" width="450px" alt="Engineering and Drafting" />
                    </div>
                </div>
                <div className="services-projects-section">
                    <h2>Featured Projects</h2>
                    <div className="services-projects-container">
                        <ProjectItem image={CS1Image} title="Compressor Station 1" link="/projects/facilities" />
                        <ProjectItem image={WSB1Image} title="Wellsite Battery 1" link="/projects/wellpads/WB1" />
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default EngineeringandDraftingPage