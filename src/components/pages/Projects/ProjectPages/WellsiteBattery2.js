import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import { Container } from "react-bootstrap";
import Footer from "../../../common/Footer/Footer";
import { Link } from 'react-router-dom';

import WSB2Image1 from "../../../../images/WellsiteBattery2/wsb2-1.jpg";
import WSB2Image2 from "../../../../images/WellsiteBattery2/wsb2-2.jpg";
import WSB2Image3 from "../../../../images/WellsiteBattery2/wsb2-3.jpg";
export const WellsiteBattery2 = () => {
    return (
        <div className="wellsitebattery1page">
            <Navigation />
            <PageHeader title="Wellsite Battery 2" image={WSB2Image2} />
            <Container>
                <div className="projectpage-backlink-container">
                    <Link className="projectpage-backlink" to="/projects/wellpads">← Well Pads</Link>
                </div>
                <div className="projectpage-featured-video-container">
                <iframe className="projectpage-featured-video" src="https://www.youtube.com/embed/KWhVdHN65q8?si=a_KaiE1hENKfzFWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="projectpage-details-container">
                    <h2>Overview</h2>
                    <p>This Wellsite project was created in four phases with 18 Wellheads.  The process equipment involved is Desander, Test Separator and Sweetening Package for each wellhead.  The facility also shows Genset, MCC/Instrument Air Building, Chemical Tanks and Six (8) Product Oil Storage Tanks. </p>
                </div>

                <div className="projectpage-details-container">
                    <h2>Project Scope</h2>
                    <p>Complete Mechanical Drawing Package: Plot Plan, PFD’s and PID’s.  Structural Detail Drawings, Pile Location Plans and Piling Schedule, Construction 3D Visualization and animation </p>
                </div>

                <div className="wsb2-gallery projectpage-gallery">
                <div className="gallery-default-row">
                        <img className="gallery-default-row-image gallery-image" src={WSB2Image1} alt="Wellsite Battery 1" />
                        <img className="gallery-default-row-image gallery-image" src={WSB2Image2} alt="Wellsite Battery 1" />
                    </div>
                    <div className="gallery-default-row">
                        <img className="gallery-image" width="740px" src={WSB2Image3} alt="Wellsite Battery 1" />
                        
                    </div>
                </div>

            </Container>
            <Footer />
        </div>
    )
}

export default WellsiteBattery2;