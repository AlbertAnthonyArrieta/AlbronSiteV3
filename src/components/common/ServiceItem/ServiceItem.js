export const ServiceItem = ({name, number, onClick}) => {
    return (
        <div className="service-item" onClick={onClick}>
            <div>
                <span className="service-number">{number}</span>
                <h2 className="service-name">{name}</h2>
            </div>
        </div>
    )
}

export default ServiceItem;