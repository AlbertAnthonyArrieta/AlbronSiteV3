import AboutImage from '../../../../images/p6.png';
import Container from 'react-bootstrap/esm/Container';
import BigButton from '../../../common/BigButton/BigButton';

export const AboutSection = () => {
    return (
        <div className="about-section">
            <Container>
                <div className="about-content">
                    <div about-image-container>
                        <img className='about' alt="About Image" src={AboutImage} />
                    </div>
                    <div about-text-container>
                        <h1>What We Do</h1>
                        <p>Our team delivers comprehensive engineering design and drafting services tailored to your enterprise, encompassing both minor structural undertakings and extensive facility developments.
                            <br /> <br />
                            With state-of-the-art computer-aided design (CAD) technologies at our disposal, we guarantee the precision and excellence of the design and drafting solutions we offer.</p>
                        <BigButton type='secondary' text='Learn More' link='/about'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutSection;