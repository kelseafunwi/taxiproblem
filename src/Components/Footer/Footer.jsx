import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import copyrightIcon from '../../assets/img/copyrighticon.svg';

export const Footer = () => {
    return (
        <footer className="footer"  style={{ backgroundColor: '#111827' }}>
            <Row >
                <Col md={12}>
                    <div className="d-flex align-items-center">
                        <p><img src={copyrightIcon} alt="Copyright icon" />2023 | Designed and coded with ❤️️ by Funwi Kelsea Ndohnwi</p>
                    </div>
                </Col>
            </Row>
        </footer>
    )
}