import { Link } from 'react-router-dom';

export const BigButton = ({ type, text, link }) => {
    const buttonClass = type === 'primary' ? 'primary' : 'secondary';

    return (
        <Link to={link}>
            <div className="big-button">
                <button className={buttonClass}>
                    <span className="button-text">{text}</span>
                </button>
            </div>
        </Link>
    )
}

export default BigButton;