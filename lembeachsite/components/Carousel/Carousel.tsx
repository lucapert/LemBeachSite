import  React from 'react';
import Styles from '../Carousel/Carousel.module.scss';
import { useRouter } from 'next/router';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import * as it from '../../locales/it/index';
import * as en from '../../locales/en/index';
const CarouselReactB = () => {
    const router = useRouter();
    const t = checkTranslation(router.locale);
    return (
        <div className={ Styles.carouselContainer }>
            <Carousel fade pause={false}>
                <Carousel.Item>
                    <div style={ { backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(/vendors/images/ws1.jpg)', height:
    '100vh', backgroundSize: 'cover', backgroundPosition: 'center'} }>
                        <div className="fadeInVertical">
                            <Carousel.Caption>
                                <h1>{ t.carouselTitle}</h1>
                                <p>{ t.carouselSubTitle }.</p>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={ { backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(/vendors/images/ws2.jpg)', height:
    '100vh', backgroundSize: 'cover', backgroundPosition: 'center' } }>
                        <div className="fadeInVertical">
                            <Carousel.Caption>
                            <h1>Second slide label</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={ { backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(/vendors/images/ws3.jpg)", height:
    "100vh", backgroundSize: 'cover', backgroundPosition: 'center' } }>
                        <div className="fadeInVertical">
                            <Carousel.Caption>
                                <h1>Third slide label</h1>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

const checkTranslation = (locale: string) => {
    var result;
    switch(locale)
    {
        case 'en':
            result = en.default;
            break;
        case 'it':
            result = it.default;
            break;
    }
    return result;
}

export default CarouselReactB;