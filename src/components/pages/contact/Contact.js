import Navigation from '../../common/navbar/Navigation.js';
import PageHeader from '../../common/PageHeader/PageHeader.js';
import ContactTile from '../../common/ContactTile/ContactTile.js';
import SocialTile from '../../common/SocialTile/SocialTile.js';
import Container from 'react-bootstrap/esm/Container.js';
import Footer from '../../common/Footer/Footer.js';

import HeaderImage from '../../../images/p1.jpg';
import Logo from '../../../images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
    return (
        <div>
            <Navigation />
            <PageHeader image={HeaderImage} title="Contact Us" />
            <Container>
                <div className='contactpage-margin'>
                    <h1 className='page-title'>Let's Get In Touch!</h1>
                    <div className='contactpage-container'>
                        <div className='contactpage-content'>
                            <p>We appreciate your questions and input. If you're curious about our services, require assistance, or are looking to collaborate on a project, please send us an email or a call.</p>
                            <div className='contact-tiles-container'>
                                <ContactTile icon={<FontAwesomeIcon icon={faEnvelope} />} title='Email' subtitle='aarrieta@albrondgsinc.com' link='mailto:aarrieta@albrondgsinc.com' />
                                <ContactTile icon={<FontAwesomeIcon icon={faPhone} />} title='Call' subtitle='+1 (403)-703-9251' link='tel:4037039251' />
                            </div>
                            <div className='socials-container'>
                                {/* <SocialTile icon={<FontAwesomeIcon icon={faLinkedin} />} link='' alt='Linkedin' /> */}
                                <SocialTile icon={<FontAwesomeIcon icon={faYoutubeSquare} />} link='https://www.youtube.com/@AlbronDGSInc' alt='YouTube' />
                            </div>
                        </div>
                        <img className='contactspage-logo' src={Logo} alt="Albron DGS Inc" />
                    </div>
                </div>
            </Container>
            <Footer />
        </div >
    )
}

export default Contact