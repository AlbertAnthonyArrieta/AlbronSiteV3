import Navigation from "../../../../common/navbar/Navigation";
import PageHeader from "../../../../common/PageHeader/PageHeader";
import { Container } from "react-bootstrap";
import Footer from "../../../../common/Footer/Footer";

import CS1Image from "../../../../../images/CompressorStation1/cs1-3.jpg";
export const PowerGeneration1 = () => {
    return (
        <div className="powergeneration1page">
        <Navigation />
        <PageHeader title="Projects" image={CS1Image} />
        <Container>
            
        </Container>
        <Footer />
    </div>
    )
}

export default PowerGeneration1;