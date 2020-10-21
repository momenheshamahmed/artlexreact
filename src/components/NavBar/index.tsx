// Packages
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import { useLocation } from "react-router";
// Assets
import Assets from "../../assets";

const NavBar: React.FC = props => {
  const Logo = styled.img`
    width: 88px;
  `;
  const LinkStyled = styled(Link)`
    color: black !important;
    &:hover {
      color: black !important;
      text-decoration: none;
    }
  `;
  let location = useLocation();
  console.log("here is the props", location);
  return (
    <Navbar expand="md" fixed="top" bg="white" className="py-5">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Logo src={Assets.Images.logo} alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" activeKey={"/"}>
            <Nav.Link
              as={Link}
              to="/"
              eventKey="/"
              active={location.pathname === "/"}
              style={{ display: "none" }}
            >
              {"Home"}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/custom"
              eventKey="custom"
              active={location.pathname === "/custom"}
            >
              {"Custom"}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              eventKey="services"
              active={location.pathname === "/services"}
            >
              {"Services"}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/blog"
              eventKey="blog"
              active={location.pathname === "/blog"}
            >
              {"Blog"}
            </Nav.Link>
            <NavDropdown
              alignRight={true}
              title="Contact"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <LinkContainer to={"/contact"}>
                  <Nav.Link eventKey="contact">
                    <LinkStyled
                      to={{
                        pathname: "/contact",
                        state: { contactUs: "sendessmessgae" }
                      }}
                    >
                      {"Send us a message"}
                    </LinkStyled>
                  </Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to={"/contact"}>
                  <Nav.Link eventKey="contact">
                    <LinkStyled
                      to={{
                        pathname: "/contact",
                        state: { contactUs: "discount" }
                      }}
                    >
                      {"Get a discount"}
                    </LinkStyled>
                  </Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to={"/contact"}>
                  <Nav.Link eventKey="contact">
                    <LinkStyled
                      to={{
                        pathname: "/contact",
                        state: { contactUs: "requestcustomfont" }
                      }}
                    >
                      {"Request custom font"}
                    </LinkStyled>
                  </Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
