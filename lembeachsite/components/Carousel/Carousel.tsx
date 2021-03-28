import React from 'react';
import Styles from '../Carousel/Carousel.module.scss';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel } from 'react-bootstrap'

const CarouselReactB = () => {
    return (
            <Carousel fade>
                <Carousel.Item>
                    <div style={ { backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(/vendors/images/ws1.jpg)', height:
    '100vh', backgroundSize: 'cover', backgroundPosition: 'center'} }>
                        {/* <img
                        className="d-block w-100"
                        src="/vendors/images/ws1.jpg"
                        alt="First slide"
                        /> */}
                        <Carousel.Caption>
                        <h1>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={ { backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(/vendors/images/ws2.jpg)', height:
    '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } }>
                        {/* <img
                        className="d-block w-100"
                        src="/vendors/images/ws2.jpg"
                        alt="Second slide"
                        /> */}

                        <Carousel.Caption>
                        <h1>Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={ { backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(/vendors/images/ws3.jpg)", height:
    "100vh", backgroundSize: 'cover', backgroundPosition: 'center' } }>
                    {/* <img
                    className="d-block w-100"
                    src="/vendors/images/ws3.jpg"
                    alt="Third slide"
                    /> */}

                    <Carousel.Caption>
                    <h1>Third slide label</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    <div></div></div>
                </Carousel.Item>
            </Carousel>
    );
};

export default CarouselReactB;