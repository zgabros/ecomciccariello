import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { FaDog } from "react-icons/fa";

function NavBar({ item }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaDog size={25} color="grey" /> La tienda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categories/lipstick">
                Lipstick
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/lip_gloss">
                Lip gloss
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/pencil">
                Pencil
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/cream">
                Cream
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/concealer">
                Concealer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Todos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              Contacto
            </Nav.Link>
          </Nav>
          <CartWidget item={item} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
