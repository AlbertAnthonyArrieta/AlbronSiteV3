import Logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

export const ConstructionMessage = () => {
    return (
        <div className="construction-message">
            <img className='construction-message-logo' src={Logo} alt="Albron DGS Inc" />
            <div className="construction-message-content">
                <h1 className='construction-message-title'>Don't worry, we are constructing something exciting!</h1>
                <p>This part of our website is still unavailable. If you have any questions about this part of the website, <span><Link className='construction-message-contact' to="/contact">Contact Us!</Link></span></p>
            </div>
        </div>
    )
}

export default ConstructionMessage;