import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import { Container } from "react-bootstrap";
import Footer from "../../../common/Footer/Footer";
import { Link } from 'react-router-dom';

import PG2Image1 from "../../../../images/PowerGen2/PG2-7.jpg";
import PG2Image2 from "../../../../images/PowerGen2/PG2-1.jpg";
import PG2Image3 from "../../../../images/PowerGen2/PG2-2.jpg";
import PG2Image4 from "../../../../images/PowerGen2/PG2-3.jpg";
import PG2Image5 from "../../../../images/PowerGen2/PG2-4.jpg";
import PG2Image6 from "../../../../images/PowerGen2/PG2-5.jpg";
import PG2Image7 from "../../../../images/PowerGen2/PG2-6.jpg";

export const PowerGeneration2 = () => {
    return (
        <div className="powergeneration2page">
            <Navigation />
            <PageHeader title="Power Generation 2" image={PG2Image1} />
            <Container>
                <div className="projectpage-backlink-container">
                    <Link className="projectpage-backlink" to="/projects/powergeneration">← Power Generation</Link>
                </div>
                <div className="projectpage-featured-video-container">
                    <iframe className="projectpage-featured-video" src="https://www.youtube.com/embed/iC89_UM_FRU?si=Q2SQEvodMHpITkr_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="projectpage-details-container">
                    <h2>Project Scope</h2>
                    <p>Creation of Construction 3D Visualization and 3D Animation.</p>
                </div>

                <div className="pg2-gallery projectpage-gallery">
                    <div className="gallery-default-row">
                        <img className="gallery-default-row-image gallery-image" src={PG2Image2} alt="Power Generation 2" />
                        <img className="gallery-default-row-image gallery-image" src={PG2Image3} alt="Power Generation 2" />
                    </div>
                    <div className="gallery-default-row">
                        <img className="gallery-default-row-image gallery-image" src={PG2Image4} alt="Power Generation 2" />
                        <img className="gallery-default-row-image gallery-image" src={PG2Image5} alt="Power Generation 2" />
                    </div>
                    <div className="gallery-default-row">
                        <img className="gallery-default-row-image gallery-image" src={PG2Image6} alt="Power Generation 2" />
                        <img className="gallery-default-row-image gallery-image" src={PG2Image7} alt="Power Generation 2" />
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default PowerGeneration2;