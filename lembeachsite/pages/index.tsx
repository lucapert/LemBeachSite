import styles from '../styles/Home.module.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/vendors/images/maldive.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/vendors/images/mare1.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/vendors/images/mare.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
