export const BigButton = ({ type, text}) => {
    const buttonClass = type === 'primary' ? 'primary' : 'secondary';

    return (
        <div className="big-button">
            <button className={buttonClass}>{text}</button>
        </div>
    )
}

export default BigButton