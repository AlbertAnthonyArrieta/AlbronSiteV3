import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import Container from "react-bootstrap/esm/Container";
import ProjectItem from "../../../common/ProjectItem/ProjectItem";
import Footer from "../../../common/Footer/Footer";

import BgImage from "../../../../images/WellsiteBattery1/wsb1-3.jpg";
import WSB1Image from "../../../../images/WellsiteBattery1/wsb1-1.jpg";
import WSB2Image from "../../../../images/WellsiteBattery2/wsb2-2.jpg";

export const FacilitiesPage = () => {
    return (
        <div className="wellpadspage">
            <Navigation />
            <PageHeader title="Projects" image={BgImage} />
            <Container>
                <div className="projectspage-content">
                    <h1 className="projectspage-title">Well Pads</h1>
                    <div className="projects-container">
                        <ProjectItem image={WSB1Image} title="Wellsite Battery 1" link="/projects/wellpads/WB1" />
                        <ProjectItem image={WSB2Image} title="Wellsite Battery 2" link="/projects/wellpads/WB2" />
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default FacilitiesPage