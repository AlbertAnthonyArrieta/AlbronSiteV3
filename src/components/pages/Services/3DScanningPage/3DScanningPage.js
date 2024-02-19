import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import Container from "react-bootstrap/esm/Container";
import ProjectItem from "../../../common/ProjectItem/ProjectItem";
import Footer from "../../../common/Footer/Footer";

import BgImage from '../../../../images/albroncollage1.jpg';
import EngImage from '../../../../images/CompressorStation2/cs2-6(vert).jpg';

import CS1Image from "../../../../images/CompressorStation1/cs1-3.jpg";
import WSB1Image from "../../../../images/WellsiteBattery1/wsb1-1.jpg";



export const EngineeringandDraftingPage = () => {
    return (
        <div className="engineeringanddraftingpage">
            <Navigation />
            <PageHeader image={BgImage} title="3D Scanning" />
            <Container>
                <div className="servicepage-content">
                    <div className="servicepage-content-container">
                        <div className="servicepage-paragraphs">
                            <h1 className="servicespage-title">3D Scanning Services</h1>
                            <p>At Albron DGS Inc, we can work on available 3D scans provided by the client or we can also provide the 3D scans ourselves. We offer cutting-edge 3D Scanning services to capture precise digital representations of physical objects and environments. With state-of-the-art equipment and expertise, we provide clients with accurate data that can be used for a variety of applications, from locating tie-in locations, expansion projects, and documentation.</p>
                            <div className="servicepage-provide-paragraph">
                                <h2>What We Provide</h2>
                                <p>Our 3D Scanning services utilize advanced laser scanning technology to capture detailed measurements and geometric data with unparalleled accuracy. 

                                    From as-built documentation to virtual reality simulations, our scans provide valuable insights and opportunities for innovation across a wide range of industries.

                                    With a focus on quality and reliability, we strive to exceed our clients' expectations with every project. Our commitment to excellence ensures that every scan is completed with precision, efficiency, and attention to detail, resulting in deliverables that are both accurate and actionable.</p>
                            </div>
                        </div>
                        <div className="servicepage-image">
                            <img src={EngImage} width="450px" alt="Engineering and Drafting" />
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