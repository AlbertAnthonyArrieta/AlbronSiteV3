export const ContactTile = ({ icon, title, subtitle, link }) => {
    return (
        <div className="contact-tile">
                <div className="contact-tile-header">
                    <i className="contact-tile-icon">{icon}</i>
                    <h1 className="contact-tile-title">{title}</h1>
                </div>
            <a href={link} className="contact-tile-link">
                <h2 className="contact-tile-subtitle">{subtitle}</h2>
            </a>
        </div>
    )
}

export default ContactTile