import Container from 'react-bootstrap/esm/Container';
import BigButton from '../../common/BigButton/BigButton';
export const HeroSection = () => {
    return (
        <div className="hero-section">
            <Container>
                <div className="hero-content">
                    <h1 className="hero-title">Engineering Design & Drafting</h1>
                    <BigButton type='primary' text='-> OUR SERVICES'/>
                </div>
            </Container>
        </div>
    )
}

export default HeroSection