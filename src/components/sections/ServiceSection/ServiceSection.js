import Container from "react-bootstrap/esm/Container";
import ServiceItem from "../../common/ServiceItem/ServiceItem";
import { useState, useEffect } from 'react';
import EngImage from '../../../images/p3.jpg';
import BuiltImage from '../../../images/p1.jpg';
import ScanImage from '../../../images/p2.jpg';
import AnimImage from '../../../images/p4.jpg';
import ConstImage from '../../../images/p5.jpg';

export const ServiceSection = () => {
    const [selectedService, setSelectedService] = useState({
        title: 'Engineering Design & Drafting',
        desc: 'Description for Engineering Design & Drafting',
        bgImage: EngImage
    });
    return (
        <div className="service-section">
            <Container >
                <h1>Our Services</h1>
                <div className="services-container">
                    <div className="service-focus" style={{ backgroundImage: `url(${selectedService.bgImage})` }}>
                        <h1>{selectedService.title}</h1>
                        <p>{selectedService.desc}</p>
                    </div>
                    <div className="service-list">
                        <ServiceItem name="Engineering Design & Drafting" number="01" onClick={() => setSelectedService({ title: 'Engineering Design & Drafting', desc: 'We are a team of professional Mechanical Designers with extensive experience in Oil & Gas, Power Generation and various equipment fabrication. Our main goal is to provide the highest quality mechanical design and drawing package on schedule and on budget.', bgImage: EngImage })} />
                        <ServiceItem name="As Built" number="02" onClick={() => setSelectedService({ title: 'As Built', desc: 'We are a team of professional Mechanical Designers with extensive experience in Oil & Gas, Power Generation and various equipment fabrication. Our main goal is to provide the highest quality mechanical design and drawing package on schedule and on budget.', bgImage: BuiltImage })} />
                        <ServiceItem name="3D Scanning" number="03" onClick={() => setSelectedService({ title: '3D Scanning', desc: 'We are a team of professional Mechanical Designers with extensive experience in Oil & Gas, Power Generation and various equipment fabrication. Our main goal is to provide the highest quality mechanical design and drawing package on schedule and on budget.', bgImage: ScanImage })} />
                        <ServiceItem name="3D Animation" number="04" onClick={() => setSelectedService({ title: '3D Animation', desc: 'We are a team of professional Mechanical Designers with extensive experience in Oil & Gas, Power Generation and various equipment fabrication. Our main goal is to provide the highest quality mechanical design and drawing package on schedule and on budget.', bgImage: AnimImage })} />
                        <ServiceItem name="Construction Design Visualization" number="05" onClick={() => setSelectedService({ title: 'Construction Design Visualization', desc: 'We are a team of professional Mechanical Designers with extensive experience in Oil & Gas, Power Generation and various equipment fabrication. Our main goal is to provide the highest quality mechanical design and drawing package on schedule and on budget.', bgImage: ConstImage })} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ServiceSection;