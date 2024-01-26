export const SocialTile = ({ icon, link, alt }) => {
    return (
        <div className="social-tile">
            <a href={link} className="social-tile-link" alt={alt}>
                <i className="social-tile-icon">
                    {icon}
                </i>
            </a>
        </div>
    )
}

export default SocialTile