import Container from "react-bootstrap/esm/Container";

export const PageHeader = ({ title, image }) => {
    return (
        <div className="pageheader" style={{ backgroundImage: `url(${image})` }}>
            <Container>
                <div className="pageheader-content">
                    <h1 className="pageheader-title">{title}</h1>
                </div>
            </Container>
        </div>
    )
}

export default PageHeader;