import Navbar from '../../common/navbar/Navigation.js';
import HeroSection from './HeroSection/HeroSection.js';
import AboutSection from './AboutSection/AboutSection.js';
import ServiceSection from './ServiceSection/ServiceSection.js';
import ProjectsSection from './ProjectsSection/ProjectsSection.js';
import ContactSection from './ContactSection/ContactSection.js';
import Footer from '../../common/Footer/Footer.js';

export const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ProjectsSection />
            {/* <ContactSection />
            <Footer /> */}
        </div>
    )
}

export default Home