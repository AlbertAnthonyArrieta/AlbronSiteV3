import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import Container from "react-bootstrap/esm/Container";
import ProjectItem from "../../../common/ProjectItem/ProjectItem";
import Footer from "../../../common/Footer/Footer";

import BgImage from "../../../../images/CompressorStation2/cs2-1.jpg";
import CS1Image from "../../../../images/CompressorStation1/cs1-3.jpg";
import CS2Image from "../../../../images/CompressorStation2/cs2-7.jpg";

export const FacilitiesPage = () => {
    return (
        <div className="facilitiespage">
            <Navigation />
            <PageHeader title="Facilities" image={BgImage} />
            <Container>
                <div className="projectspage-content">
                    <h1 className="projectspage-title">Featured Projects</h1>
                    <div className="projects-container">
                        <ProjectItem image={CS1Image} title="Compressor Station 1" link="/projects/facilities" />
                        <ProjectItem image={CS2Image} title="Compressor Station 2" link="/projects/facilities" />
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default FacilitiesPage