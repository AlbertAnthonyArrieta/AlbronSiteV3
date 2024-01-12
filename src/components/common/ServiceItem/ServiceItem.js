const ServiceItem = ({ name, number, onClick, focused }) => {
    return (
        <div className={`service-item ${focused ? 'focused' : ''}`} onClick={onClick}>
            <p className="service-number">{number}</p>
            <h2 className="service-name">{name}</h2>
        </div>
    );
};

export default ServiceItem;