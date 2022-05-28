import logo from '../logo.svg';
import {Container, Nav, Navbar} from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar({item}) {
   
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React logo"/> {' '}
                        eCommerce
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link 2</Nav.Link>
                    </Nav>
                    <CartWidget item={item}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;