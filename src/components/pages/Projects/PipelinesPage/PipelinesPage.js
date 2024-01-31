import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import Container from "react-bootstrap/esm/Container";
import ProjectItem from "../../../common/ProjectItem/ProjectItem";
import Footer from "../../../common/Footer/Footer";

import BgImage from '../../../../images/p2.jpg';

export const FacilitiesPage = () => {
    return (
        <div className="wellpadspage">
            <Navigation />
            <PageHeader title="Pipelines" image={BgImage} />
            <Container>
                <div className="projectspage-content">
                    <h1 className="projectspage-title">Come back next time!</h1>
                    <div className="projects-container">
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default FacilitiesPage