import {Col, Nav, Navbar, Row } from "react-bootstrap";
import './navbar.css';
import nightIcon from '../../assets/img/nightIcon.svg';
import lightIcon from '../../assets/img/lightIcon.svg';
import { useEffect } from "react";
import { useRef } from "react";

export const NavBar = () => {
    const modeToggleButton = useRef(null);
    useEffect(() => {
        const navbarNav = document.getElementById('navbar');
        const navbarClicked = () => {
            if (navbarNav.getAttribute('aria-expanded') === 'false') {
                navbarNav.setAttribute('aria-expanded', 'true');
            } else  {
                navbarNav.setAttribute('aria-expanded', 'false');
            } 
        }
        const navbarToggler = document.getElementById('navbar-toggler');
        navbarToggler.addEventListener('click', navbarClicked);

        const body = document.body;
        const lightButton = document.getElementById('lightButton');
        const darkButton = document.getElementById('darkButton');
        const toggleMode = () => {
            console.log('toggling the mode ');
            body.classList.toggle('isLightMode');
            lightButton.classList.toggle('d-none');
            darkButton.classList.toggle('d-none');
        }

        modeToggleButton.current.addEventListener('click', toggleMode);

        return () => {
            navbarToggler.removeEventListener('click', navbarClicked);
            modeToggleButton.current.removeEventListener('click', toggleMode);
        };
     }, []);

    

    return (
        
       <Row className="d-flex  navbar-container fixed-top justify-content-center">
             <Col sm={10}>
                <Navbar id='navbar' aria-expanded='false' expand="lg">
                    <Navbar.Brand href="#home" className="ps-4">
                        <div className="logo" data-content="<SS />" />
                    </Navbar.Brand>
                    <Navbar.Toggle id='navbar-toggler' aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar ms-auto">
                            <Nav.Link href="#about-me">About</Nav.Link>
                            <Nav.Link href="#work">Work</Nav.Link>
                            <Nav.Link href="#testimonials">Testimonial</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link ref={modeToggleButton}>
                                <img src={nightIcon}  id='darkButton' alt="Navigation night icon" />
                                <img src={lightIcon} id='lightButton' className="d-none" alt="Navigation light icon" />
                            </Nav.Link>
                            <Nav.Link href="download">
                                <button className="btn btn-light p-2">Download CV</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
       </Row>
    )
}