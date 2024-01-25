import Navigation from '../../common/navbar/Navigation.js';
import PageHeader from '../../common/PageHeader/PageHeader.js';

import HeaderImage from '../../../images/p1.jpg';
export const Contact = () => {
    return (
        <div>
            <Navigation />
            <PageHeader image={HeaderImage} title="Contact Us"/>
        </div>
    )
}

export default Contact