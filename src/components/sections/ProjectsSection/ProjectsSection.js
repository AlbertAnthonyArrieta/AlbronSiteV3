import Container from "react-bootstrap/esm/Container"
import ProjectItem from "../../common/ProjectItem/ProjectItem"
import Battery1Image from '../../../images/WellsiteBattery1/wsb1-3.jpg'
import Battery2Image from '../../../images/WellsiteBattery2/wsb2-1.jpg'
import PowerGenImage from '../../../images/PowerGen/pg1.jpg'
import BigButton from "../../common/BigButton/BigButton"

export const ProjectsSection = () => {
 return (
    <div className="projects-section">
        <Container>
            <h1>Featured Projects</h1>
            <div className="projects-container">
                <ProjectItem image={Battery1Image} title="Wellsite Battery 1" desc="Location" />
                <ProjectItem image={Battery2Image} title="Wellsite Battery 2" desc="Location" />
                <ProjectItem image={PowerGenImage} title="Power Generation" desc="Location" />
            </div>
            <BigButton text="View All Projects" type="secondary"/>
        </Container>
    </div>
 )
}

export default ProjectsSection