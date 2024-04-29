import Container from "react-bootstrap/esm/Container";
import ServiceItem from "../../../common/ServiceItem/ServiceItem";
import BigButton from "../../../common/BigButton/BigButton";
import { useState } from 'react';
import EngImage from '../../../../images/p3.jpg';
import BuiltImage from '../../../../images/p1.jpg';
import ScanImage from '../../../../images/3DScans/Wellpad3D1Scan_04.JPG';
import AnimImage from '../../../../images/WellsiteBattery2/wsb2-1.jpg';
import ConstImage from '../../../../images/WellsiteBattery2/wsb2-2.jpg';

export const ServiceSection = () => {
    const [selectedService, setSelectedService] = useState({
        title: 'Engineering Design & Drafting',
        desc: 'We are a team of professional Mechanical Designers with extensive experience in Oil & Gas, Power Generation and various equipment fabrication. Our main goal is to provide the highest quality mechanical design and drawing package on schedule and on budget.',
        bgImage: EngImage,
        focused: 'Engineering Design & Drafting',
    });
    return (
        <div id="services" className="service-section">
            <Container >
                <h1>Our Services</h1>
                <div className="services-container" style={{ backgroundImage: `url(${selectedService.bgImage})` }}>
                    <div className="service-focus">
                        <h1 className="service-focus-title">{selectedService.title}</h1>
                        <p className="service-focus-desc">{selectedService.desc}</p>
                        <BigButton type="secondary" text="Learn More" link={selectedService.link}/>
                    </div>
                    <div className="service-list">
                        <ServiceItem name="Engineering Design & Drafting" number="01" focused={selectedService.focused === 'Engineering Design & Drafting'} onClick={() => setSelectedService({ title: 'Engineering Design & Drafting', desc: 'We are a team of professional Mechanical Designers with extensive experience in Oil & Gas, Power Generation and various equipment fabrication. Our main goal is to provide the highest quality mechanical design and drawing package on schedule and on budget.', bgImage: EngImage, focused: 'Engineering Design & Drafting', link:'/services/engineeringanddrafting' })} />
                        <ServiceItem name="Construction Design Visualization" number="02" focused={selectedService.focused === 'Construction Design Visualization'} onClick={() => setSelectedService({ title: 'Construction Design Visualization', desc: 'Our Construction Design Visualization services are tailored to turn your architectural and engineering concepts into vivid, detailed visual representations. We believe that a well-visualized design is key to successful project planning, communication, and execution. Our services provide a clear and tangible view of your construction projects before the actual building process begins.', bgImage: ConstImage, focused: 'Construction Design Visualization', link:'/services/constructiondesign' })} />
                        <ServiceItem name="3D Animation" number="03" focused={selectedService.focused === '3D Animation'} onClick={() => setSelectedService({ title: '3D Animation', desc: 'Our 3D Animation services are dedicated to transforming your ideas and designs into vibrant, dynamic animations. Ideal for visualizing complex engineering concepts or presenting architectural designs, our animations offer an immersive experience that static images simply cannot match.', bgImage: AnimImage, focused: '3D Animation', link:'/services/3danimation'})} />
                        <ServiceItem name="As Built" number="04" focused={selectedService.focused === 'As Built'} onClick={() => setSelectedService({ title: 'As Built', desc: 'At Albron DGS Inc, our As-Built services bridge the gap between the design plans and the final constructed facility. We understand that in the real world, construction often deviates from original designs due to various on-site adjustments. Our As-Built documentation accurately reflects these changes, ensuring that your records match the existing structure in every detail.', bgImage: BuiltImage, focused: 'As Built', link:'/services/asbuilt' })} />
                        <ServiceItem name="3D Scanning" number="05" focused={selectedService.focused === '3D Scanning'} onClick={() => setSelectedService({ title: '3D Scanning', desc: 'Our 3D Scanning services revolutionize the way you capture and visualize physical spaces and objects. Using cutting-edge technology, we offer a fast, accurate, and non-intrusive method to digitally capture the shape of physical objects, creating precise 3D models for a variety of applications.', bgImage: ScanImage, focused: '3D Scanning', link:'/services/3dscanning' })} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ServiceSection;