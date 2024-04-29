import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import Container from "react-bootstrap/esm/Container";
import Footer from "../../../common/Footer/Footer";
import ConstructionMessage from "../../../common/ConstructionMessage/ConstructionMessage";

import BgImage from '../../../../images/p2.jpg';

export const FacilitiesPage = () => {
    return (
        <div className="pipelinespage">
            <Navigation />
            <PageHeader title="Pipeline Projects" image={BgImage} />
            <Container>
                <ConstructionMessage />
            </Container>
            <Footer />
        </div>
    )
}

export default FacilitiesPage