import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import Container from "react-bootstrap/esm/Container";
import ProjectItem from "../../../common/ProjectItem/ProjectItem";
import Footer from "../../../common/Footer/Footer";

import BgImage from '../../../../images/WellsiteBattery2/wsb2-2.jpg';
import ConImage from '../../../../images/albroncollage1.jpg';

import CS1Image from "../../../../images/CompressorStation1/cs1-3.jpg";
import WSB1Image from "../../../../images/WellsiteBattery1/wsb1-1.jpg";



export const EngineeringandDraftingPage = () => {
    return (
        <div className="engineeringanddraftingpage">
            <Navigation />
            <PageHeader image={BgImage} title="Construction Design" />
            <Container>
                <div className="servicepage-content">
                    <div className="servicepage-content-container">
                        <div className="servicepage-paragraphs">
                            <h1 className="servicespage-title">Construction Design and Visualization Solutions Tailored to Your Needs</h1>
                            <p>At Albron DGS Inc, we have a team specialized in Construction Design and Visualization, offering a range of tailored solutions to meet the unique needs of our clients. With years of experience in the field, our team of experts is dedicated to delivering top-notch services that ensure optimal project outcomes. Our commitment to excellence extends beyond project completion, as we provide ongoing support and maintenance to guarantee long-term success. Additionally, we prioritize sustainability in our designs, striving to minimize environmental impact while maximizing efficiency and functionality.</p>

                            <div className="constructionpage-container">
                                <img src={ConImage} className="construction-image" alt="Engineering and Drafting" />
                                <div>
                                    <h2>What We Provide</h2>
                                    <p>Our Construction Design and Visualization services are meticulously crafted to provide comprehensive support throughout the project lifecycle. From initial concept development to detailed construction planning, our team utilizes advanced visualization tools and techniques to bring ideas to life with stunning clarity and precision.

                                        With a focus on innovation and efficiency, we strive to optimize project outcomes. Our commitment to excellence ensures that every project is completed on time, within budget, and to the highest standards of quality.</p>
                                </div>
                            </div>
                        </div>

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