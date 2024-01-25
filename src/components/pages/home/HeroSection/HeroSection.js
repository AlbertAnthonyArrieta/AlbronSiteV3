import Container from 'react-bootstrap/esm/Container';
import BigButton from '../../../common/BigButton/BigButton';
export const HeroSection = () => {
    return (
        <div className="hero-section">
            <Container>
                <div className="hero-content">
                    <p className="hero-title">Engineering Design <span className='text-orange'>&</span> Drafting</p>
                    <BigButton className='hero-btn' type='primary' text='Our Services'/>
                </div>
            </Container>
        </div>
    )
}

export default HeroSection