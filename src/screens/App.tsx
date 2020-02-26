// Packages
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
// Screens
import AdminRoot from "./admin/root";
import Home from "./Home";
import CustomTypefaces from "./CustomTypefaces";
import Blog from "./Blog";
import Contact from "./Contact";
import ProtypeServices from "./ProtypeServices";
import TypeFacePage from "./TypeFacePage";

// Assets
import Assets from "../assets";

// Stores
import { EpisodeStore } from "../stores";

const App: React.FC = () => {
  const [direction] = useState("ltr");

  // Styled
  const Logo = styled.img`
    width: 70px;
  `
  // Mobx
  useEffect(() => {
    EpisodeStore.watchEpisodes();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <AdminRoot />
        </Route>
        <div dir={direction}>
          <Route path="/">
            <Navbar expand="md" fixed="top" bg="white">
            <Container>
              <Navbar.Brand>
                  <Link to="/">
                    <Logo src={Assets.Images.logo} alt="Logo" />
                  </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" defaultActiveKey="/">
                  <LinkContainer to={"/typefaces"}>
                    <Nav.Link eventKey="typefaces">{"Typefaces"}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={"/custom"}>
                    <Nav.Link eventKey="custom">{"Custom"}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={"/services"}>
                    <Nav.Link eventKey="services">{"Services"}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={"/blog"}>
                    <Nav.Link eventKey="blog">{"Blog"}</Nav.Link>
                  </LinkContainer>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                      <LinkContainer to={"/contact"}>
                        <Nav.Link eventKey="contact">{"Contact"}</Nav.Link>
                      </LinkContainer>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>
            <Switch>
              <Route exact={true} path="/">
                <Home />
              </Route>
              <Route path="/services">
                <ProtypeServices />
              </Route>
              <Route path="/custom">
                <CustomTypefaces />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/typefacepage">
                <TypeFacePage />
              </Route>
            </Switch>
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
