import Container from 'react-bootstrap/esm/Container';
import BigButton from '../../../common/BigButton/BigButton';
import { Link } from 'react-scroll';
export const HeroSection = () => {
    return (
        <div className="hero-section">
            <Container>
                <div className="hero-content">
                    <p className="hero-title">Engineering Design <span className='text-orange'>&</span> Drafting</p>
                    <Link to='services' smooth={true} duration={100} offset={-80}><BigButton className='hero-btn' type='primary' text='Our Services' /></Link>

                </div>
            </Container>
        </div>
    )
}

export default HeroSection