import Navigation from "../../../common/navbar/Navigation";
import PageHeader from "../../../common/PageHeader/PageHeader";
import Container from "react-bootstrap/esm/Container";
import BgImage from '../../../../images/albroncollage1.jpg';
import Footer from "../../../common/Footer/Footer";



export const EngineeringandDraftingPage = () => {
    return (
        <div className="engineeringanddraftingpage">
            <Navigation />
            <PageHeader image={BgImage} title="3D Animation" />
            <Container>
                <div className="servicepage-content">
                    <div className="servicepage-content-container">
                        <div className="servicepage-paragraphs">
                            <h1 className="servicespage-title">We offer Professional 3D Animation for your Projects</h1>
                            <p>As part of construction design and visualization we also provide 3D Animation services, offering a comprehensive suite of services to bring your ideas to life with stunning visual effects and immersive storytelling. With a team of skilled animators and cutting-edge technology at our disposal, we are committed to delivering captivating animations that captivate audiences and elevate your brand.</p>
                            <div className="services-featured-video-container">
                                <iframe className="services-featured-video" src="https://www.youtube.com/embed/BKhGL5oKbZc?si=Voq73YD4BJfS0RxB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="servicepage-provide-paragraph">
                                <h2>What We Provide</h2>
                                <p>Our 3D Animation services cover a wide range of applications, including product visualization, architectural walkthroughs, and promotional videos. From concept development to final rendering, our team works closely with clients to transform ideas into dynamic animations that resonate with target audiences.

                                    Using the latest software and techniques, we create realistic 3D models, fluid animations, and breathtaking visual effects that leave a lasting impression. Whether you're launching a new product, showcasing a building design, or telling a compelling story, our animations are tailored to meet your specific needs and objectives.

                                    With a focus on creativity and innovation, we strive to push the boundaries of what's possible in the world of animation. Our commitment to quality ensures that every project is delivered on time, within budget, and to the highest standards of excellence.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="services-projects-section">
                    <h2>Featured Animations</h2>
                    <div className="services-videos-container">
                        <iframe className="services-video" src="https://www.youtube.com/embed/O6w3HmErExk?si=xGDB42kP2m2fe34e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe className="services-video" src="https://www.youtube.com/embed/KWhVdHN65q8?si=Fp1-z3GSxLQUQxO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe className="services-video" src="https://www.youtube.com/embed/KWhVdHN65q8?si=lndBIbZfpLdFOUXX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe className="services-video" src="https://www.youtube.com/embed/9DFx7ndN8z0?si=0OcwcDFREAHG3WP5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default EngineeringandDraftingPage