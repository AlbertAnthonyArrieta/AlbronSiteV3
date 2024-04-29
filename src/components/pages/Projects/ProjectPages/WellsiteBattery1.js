import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import { Container } from "react-bootstrap";
import Footer from "../../../common/Footer/Footer";
import { Link } from 'react-router-dom';

import WSB1Image1 from "../../../../images/WellsiteBattery1/wsb1-1.jpg";
import WSB1Image2 from "../../../../images/WellsiteBattery1/wsb1-2.jpg";
import WSB1Image3 from "../../../../images/WellsiteBattery1/wsb1-3.jpg";
import WSB1Image4 from "../../../../images/WellsiteBattery1/wsb1-4.jpg";
export const WellsiteBattery1 = () => {
    return (
        <div className="wellsitebattery1page">
            <Navigation />
            <PageHeader title="Wellsite Battery 1" image={WSB1Image1} />
            <Container>
                <div className="projectpage-backlink-container">
                    <Link className="projectpage-backlink" to="/projects/wellpads">← Well Pads</Link>
                </div>
                <div className="projectpage-featured-video-container">
                <iframe className="projectpage-featured-video" src="https://www.youtube.com/embed/O6w3HmErExk?si=cNTdtIWtLbMUr1fM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="projectpage-details-container">
                    <h2>Overview</h2>
                    <p>The XYZ Compressor Station is a vital infrastructure project enhancing gas transportation efficiency in [location]. Featuring [capacity] compression capacity and [horsepower] power, it optimizes gas flow with advanced control systems. Construction began [start date] and completed [timeline]. Despite challenges, the project achieved milestones on schedule.</p>
                </div>

                <div className="projectpage-details-container">
                    <h2>Project Scope</h2>
                    <p>The XYZ Compressor Station is a vital infrastructure project enhancing gas transportation efficiency in [location]. Featuring [capacity] compression capacity and [horsepower] power, it optimizes gas flow with advanced control systems. Construction began [start date] and completed [timeline]. Despite challenges, the project achieved milestones on schedule.</p>
                </div>

                <div className="wsb1-gallery projectpage-gallery">
                    <div className="gallery-default-row">
                        <img className="gallery-default-row-image gallery-image" src={WSB1Image1} alt="Wellsite Battery 1" />
                        <img className="gallery-default-row-image gallery-image" src={WSB1Image2} alt="Wellsite Battery 1" />
                    </div>
                    <div className="gallery-default-row">
                        <img className="gallery-image" width="740px" src={WSB1Image3} alt="Wellsite Battery 1" />
                        <img className="gallery-image" width="655px" src={WSB1Image4} alt="Wellsite Battery 1" />
                    </div>
                </div>

            </Container>
            <Footer />
        </div>
    )
}

export default WellsiteBattery1;