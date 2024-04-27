import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import Container from "react-bootstrap/esm/Container";
import ProjectItem from "../../../common/ProjectItem/ProjectItem";
import Footer from "../../../common/Footer/Footer";

import BgImage from '../../../../images/PowerGen/pg2.jpg';
import PowerGen1Image from '../../../../images/PowerGen/pg1.jpg';

export const FacilitiesPage = () => {
    return (
        <div className="powergenerationspage">
            <Navigation />
            <PageHeader className="" title="Projects" image={BgImage} />
            <Container>
                <div className="projectspage-content">
                    <h1 className="projectspage-title">Power Generation</h1>
                    <div className="projects-container">
                        <ProjectItem image={PowerGen1Image} title="Power Generation 1" link="/projects/powergeneration/powergeneration1" />
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default FacilitiesPage