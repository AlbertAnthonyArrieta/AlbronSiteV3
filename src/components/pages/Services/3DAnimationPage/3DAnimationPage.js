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
            <PageHeader image={BgImage} title="3D Animation" />
            <Container>
                <div className="servicepage-content">
                    <div className="servicepage-content-container">
                        <div className="servicepage-paragraphs">
                            <h1 className="servicespage-title">We offer Professional 3D Animation for your Projects</h1>
                            <p>As part of construction design and visualization we also provide 3D Animation services, offering a comprehensive suite of services to bring your ideas to life with stunning visual effects and immersive storytelling. With a team of skilled animators and cutting-edge technology at our disposal, we are committed to delivering captivating animations that captivate audiences and elevate your brand.</p>
                            <div className="servicepage-provide-paragraph">
                                <h2>What We Provide</h2>
                                <p>Our 3D Animation services cover a wide range of applications, including product visualization, architectural walkthroughs, and promotional videos. From concept development to final rendering, our team works closely with clients to transform ideas into dynamic animations that resonate with target audiences.

                                    Using the latest software and techniques, we create realistic 3D models, fluid animations, and breathtaking visual effects that leave a lasting impression. Whether you're launching a new product, showcasing a building design, or telling a compelling story, our animations are tailored to meet your specific needs and objectives.

                                    With a focus on creativity and innovation, we strive to push the boundaries of what's possible in the world of animation. Our commitment to quality ensures that every project is delivered on time, within budget, and to the highest standards of excellence.</p>
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