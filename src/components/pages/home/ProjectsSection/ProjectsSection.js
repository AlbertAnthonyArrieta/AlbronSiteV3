import Container from "react-bootstrap/esm/Container";
import ProjectItem from "../../../common/ProjectItem/ProjectItem";
import CompressorImage from '../../../../images/CompressorStation2/cs2-1.jpg';
import WellBatteryImage from '../../../../images/WellsiteBattery2/wsb2-1.jpg';
import PipelinesImage from '../../../../images/p2.jpg';
import PowerGenImage from '../../../../images/PowerGen/pg1.jpg';

export const ProjectsSection = () => {
 return (
    <div className="projects-section">
        <Container>
            <h1>Our Projects</h1>
            <div className="projects-container">
                <ProjectItem image={CompressorImage} title="Facilities" link="/projects/facilities"/>
                <ProjectItem image={WellBatteryImage} title="Well Pads" link="projects/wellpads" />
                <ProjectItem image={PipelinesImage} title="Pipelines" link="projects/pipelines"/>
                <ProjectItem image={PowerGenImage} title="Power Generation" link="projects/powergeneration" />
            </div>
        </Container>
    </div>
 )
}

export default ProjectsSection