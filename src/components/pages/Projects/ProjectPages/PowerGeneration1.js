import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import { Container } from "react-bootstrap";
import Footer from "../../../common/Footer/Footer";
import { Link } from 'react-router-dom';

import PG1Image1 from "../../../../images/PowerGen/pg1.jpg";
import PG1Image2 from "../../../../images/PowerGen/pg2.jpg";
export const PowerGeneration1 = () => {
    return (
        <div className="powergeneration1page">
            <Navigation />
            <PageHeader title="Power Generation 1" image={PG1Image1} />
            <Container>
                <div className="projectpage-backlink-container">
                    <Link className="projectpage-backlink" to="/projects/powergeneration">← Power Generation</Link>
                </div>
                <div className="projectpage-featured-video-container">
                    <iframe className="projectpage-featured-video" src="https://www.youtube.com/embed/2HgSDpbSzs0?si=Filjj5z1awurCcSn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="projectpage-details-container">
                    <h2>Overview</h2>
                    <p>The XYZ Compressor Station is a vital infrastructure project enhancing gas transportation efficiency in [location]. Featuring [capacity] compression capacity and [horsepower] power, it optimizes gas flow with advanced control systems. Construction began [start date] and completed [timeline]. Despite challenges, the project achieved milestones on schedule.</p>
                </div>

                <div className="projectpage-details-container">
                    <h2>Project Scope</h2>
                    <p>The XYZ Compressor Station is a vital infrastructure project enhancing gas transportation efficiency in [location]. Featuring [capacity] compression capacity and [horsepower] power, it optimizes gas flow with advanced control systems. Construction began [start date] and completed [timeline]. Despite challenges, the project achieved milestones on schedule.</p>
                </div>

                <div className="pg1-gallery projectpage-gallery">
                    <div className="gallery-default-row">
                        <img className="gallery-default-row-image gallery-image" src={PG1Image1} alt="Power Generation 1" />
                        <img className="gallery-default-row-image gallery-image" src={PG1Image2} alt="Power Generation 1" />
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default PowerGeneration1;