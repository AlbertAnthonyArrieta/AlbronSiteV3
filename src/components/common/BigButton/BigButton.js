export const BigButton = ({ type, text}) => {
    const buttonClass = type === 'primary' ? 'primary' : 'secondary';

    return (
        <div className="big-button">
            <button className={buttonClass}>
                <span className="button-text">{text}</span>
            </button>
        </div>
    )
}

export default BigButton