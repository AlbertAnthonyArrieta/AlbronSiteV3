import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import Container from "react-bootstrap/esm/Container";
import Footer from "../../../common/Footer/Footer";

import BgImage from '../../../../images/3DScans/Wellpad3D1Scan_03.JPG';
import ScanImage1 from '../../../../images/3DScans/Wellpad3D1Scan_01.JPG';
import ScanImage2 from '../../../../images/3DScans/Wellpad3D1Scan_02.JPG';
import ScanImage3 from '../../../../images/3DScans/Wellpad3D1Scan_03.JPG';
import ScanImage4 from '../../../../images/3DScans/Wellpad3D1Scan_04.JPG';
import ScanImage5 from '../../../../images/3DScans/Wellpad3D1Scan_05.JPG';
import ScanImage6 from '../../../../images/3DScans/Wellpad3D1Scan_06.JPG';
import ScanImage7 from '../../../../images/3DScans/Wellpad23DScan_01.JPG';
import ScanImage8 from '../../../../images/3DScans/Wellpad23DScan_02.JPG';
import ScanImage9 from '../../../../images/3DScans/Wellpad23DScan_03.JPG';





export const EngineeringandDraftingPage = () => {
    return (
        <div className="engineeringanddraftingpage">
            <Navigation />
            <PageHeader image={BgImage} title="3D Scanning" />
            <Container>
                <div className="servicepage-content">
                    <div className="servicepage-content-container">
                        <div className="servicepage-paragraphs">
                            <div className="servicepage-3d-content">
                                <div>
                                    <h1 className="servicespage-title">3D Scanning Services</h1>
                                    <p>At Albron DGS Inc, we can work on available 3D scans provided by the client or we can also provide the 3D scans ourselves. We offer cutting-edge 3D Scanning services to capture precise digital representations of physical objects and environments. <br /><br />With state-of-the-art equipment and expertise, we provide clients with accurate data that can be used for a variety of applications, from locating tie-in locations, expansion projects, and documentation.</p>
                                </div>
                                <div>
                                    <img className="scan-image" src={ScanImage1} alt="Engineering and Drafting" />
                                </div>
                            </div>
                            <div className="servicepage-provide-paragraph">
                                <h2>What We Provide</h2>
                                <p>Our 3D Scanning services utilize advanced laser scanning technology to capture detailed measurements and geometric data with unparalleled accuracy.

                                    From as-built documentation to virtual reality simulations, our scans provide valuable insights and opportunities for innovation across a wide range of industries.

                                    With a focus on quality and reliability, we strive to exceed our clients' expectations with every project. Our commitment to excellence ensures that every scan is completed with precision, efficiency, and attention to detail, resulting in deliverables that are both accurate and actionable.</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="services-scan-gallery">
                    <img className="scan-gallery-item" src={ScanImage2} width="450px" alt="Engineering and Drafting" />
                    <img className="scan-gallery-item" src={ScanImage3} width="450px" alt="Engineering and Drafting" />
                    <img className="scan-gallery-item" src={ScanImage4} width="450px" alt="Engineering and Drafting" />
                    <img className="scan-gallery-item" src={ScanImage5} width="450px" alt="Engineering and Drafting" />
                    <img className="scan-gallery-item" src={ScanImage6} width="450px" alt="Engineering and Drafting" />
                    <img className="scan-gallery-item" src={ScanImage7} width="450px" alt="Engineering and Drafting" />
                    <img className="scan-gallery-item" src={ScanImage8} width="450px" alt="Engineering and Drafting" />
                    <img className="scan-gallery-item" src={ScanImage9} width="450px" alt="Engineering and Drafting" />
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default EngineeringandDraftingPage