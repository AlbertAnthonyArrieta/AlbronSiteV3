import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import { Container } from "react-bootstrap";
import Footer from "../../../common/Footer/Footer";
import { Link } from 'react-router-dom';

import CS2Image1 from "../../../../images/CompressorStation2/cs2-7.jpg";
import CS2Image2 from "../../../../images/CompressorStation2/cs2-1.jpg";
import CS2Image3 from "../../../../images/CompressorStation2/cs2-2.jpg";
import CS2Image4 from "../../../../images/CompressorStation2/cs2-3.jpg";
import CS2Image5 from "../../../../images/CompressorStation2/cs2-4.jpg";
import CS2Image6 from "../../../../images/CompressorStation2/cs2-5.jpg";
import CS2Image7 from "../../../../images/CompressorStation2/cs2-6(vert).jpg";
import CS2Image8 from "../../../../images/CompressorStation2/cs2-7.jpg";
import CS2Image9 from "../../../../images/CompressorStation2/cs2-8.jpg";
import CS2Image10 from "../../../../images/CompressorStation2/cs2-9.jpg";
import CS2Image11 from "../../../../images/CompressorStation2/cs2-10.jpg";
import CS2Image12 from "../../../../images/CompressorStation2/cs2-11.jpg";
import CS2Image13 from "../../../../images/CompressorStation2/cs2-12.jpg";

export const CompressorStation2 = () => {
    return (
        <div className="compressorstation2page">
            <Navigation />
            <PageHeader title="Compressor Station 2" image={CS2Image1} />
            <Container>
                <div className="projectpage-backlink-container">
                    <Link className="projectpage-backlink" to="/projects/facilities">← Facilities</Link>
                </div>
                <div className="projectpage-featured-video-container">
                    <iframe className="projectpage-featured-video" src="https://www.youtube.com/embed/9DFx7ndN8z0?si=sGpkkn3EFAwvLBXS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="projectpage-details-container">
                    <h2>Overview</h2>
                    <p>The XYZ Compressor Station is a vital infrastructure project enhancing gas transportation efficiency in [location]. Featuring [capacity] compression capacity and [horsepower] power, it optimizes gas flow with advanced control systems. Construction began [start date] and completed [timeline]. Despite challenges, the project achieved milestones on schedule.</p>
                </div>

                <div className="projectpage-details-container">
                    <h2>Project Scope</h2>
                    <p>The XYZ Compressor Station is a vital infrastructure project enhancing gas transportation efficiency in [location]. Featuring [capacity] compression capacity and [horsepower] power, it optimizes gas flow with advanced control systems. Construction began [start date] and completed [timeline]. Despite challenges, the project achieved milestones on schedule.</p>
                </div>

                <div className="cs2-gallery projectpage-gallery">
                    <div className="cs2-gallery-firstrow">
                        <div className="gallery-double-landscape">
                            <img className="gallery-double-landscape-image gallery-image" src={CS2Image5} alt="Compressor Station 2" />
                            <img className="gallery-double-landscape-image gallery-image" src={CS2Image6} alt="Compressor Station 2" />
                        </div>
                        <div className="gallery-single-vertical">
                            <img className="gallery-single-vertical-image gallery-image" src={CS2Image7} alt="Compressor Station 2" />
                        </div>
                    </div>
                    <div className="gallery-default-row">
                        <img className="gallery-default-row-image gallery-image" src={CS2Image1} alt="Power Generation 2" />
                        <img className="gallery-default-row-image gallery-image" src={CS2Image2} alt="Power Generation 2" />
                    </div>
                    <div className="gallery-default-row">
                        <img className="gallery-default-row-image gallery-image" src={CS2Image3} alt="Power Generation 2" />
                        <img className="gallery-default-row-image gallery-image" src={CS2Image4} alt="Power Generation 2" />
                    </div>
                    <div className="gallery-default-row">
                        <img className="gallery-default-row-image gallery-image" src={CS2Image8} alt="Power Generation 2" />
                        <img className="gallery-default-row-image gallery-image" src={CS2Image9} alt="Power Generation 2" />
                    </div>
                    <div className="gallery-default-row">
                        <img className="gallery-default-row-image gallery-image" src={CS2Image10} alt="Power Generation 2" />
                        <img className="gallery-default-row-image gallery-image" src={CS2Image11} alt="Power Generation 2" />
                    </div>
                    <div className="gallery-default-row">
                        <img className="gallery-default-row-image gallery-image" src={CS2Image12} alt="Power Generation 2" />
                        <img className="gallery-default-row-image gallery-image" src={CS2Image13} alt="Power Generation 2" />
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default CompressorStation2;