import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import { Container } from "react-bootstrap";
import Footer from "../../../common/Footer/Footer";
import { Link } from 'react-router-dom';

import CS1Image1 from "../../../../images/CompressorStation1/cs1-3.jpg";
import CS1Image2 from "../../../../images/CompressorStation1/cs1-1.jpg";
import CS1Image3 from "../../../../images/CompressorStation1/cs1-2.jpg";


export const CompressorStation1 = () => {
    return (
        <div className="compressorstation1page">
            <Navigation />
            <PageHeader title="Compressor Station 1" image={CS1Image1} />
            <Container>
                <div className="projectpage-backlink-container">
                    <Link className="projectpage-backlink" to="/projects/facilities">← Facilities</Link>
                </div>
                <div className="projectpage-featured-video-container">
                    <iframe className="projectpage-featured-video" src="https://www.youtube.com/embed/BKhGL5oKbZc?si=Voq73YD4BJfS0RxB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="projectpage-details-container">
                    <h2>Project Scope</h2>
                    <p>Creation of Construction 3D Visualization and 3D Animation.</p>
                </div>

                <div className="cs1-gallery projectpage-gallery">
                    <div className="gallery-double-landscape">
                        <img className="gallery-double-landscape-image gallery-image" src={CS1Image2} alt="Compressor Station 1" />
                        <img className="gallery-double-landscape-image gallery-image" src={CS1Image1} alt="Compressor Station 1" />
                    </div>
                    <div className="gallery-single-vertical">
                        <img className="gallery-single-vertical-image gallery-image" src={CS1Image3} alt="Compressor Station 1" />
                    </div>
                </div>

            </Container>
            <Footer />
        </div>
    )
}

export default CompressorStation1;