import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MenuItems } from '../data/MenuItems';
import './header.css';

class BootstrapHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              alt=""
              src=""
              width=""
              height=""
              className=""
            />{' '}
            <a className = "navbar-brand text-bold m-2" href="/">Noticias del mundo</a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {MenuItems.map((item) => {
                return (
                  <Nav.Link as={Link} to={item.path}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default BootstrapHeader;