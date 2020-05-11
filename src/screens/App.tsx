// Packages
import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const AdminRoot = lazy(() => import("./admin/root"));
const Home = lazy(() => import("./Home"));
const CustomTypefaces = lazy(() => import("./CustomTypefaces"));
const Blog = lazy(() => import("./Blog"));
const Contact = lazy(() => import("./Contact"));
const ProtypeServices = lazy(() => import("./ProtypeServices"));
const TypeFacePage = lazy(() => import("./TypeFacePage"));
const NotFound = lazy(() => import("./NotFound"));
const Typefaces = lazy(() => import("./Typefaces"));
const ArticlePage = lazy(() => import("./ArticlePage"));
// Assets
import Assets from "../assets";

// Stores
import {
  TypefaceStore,
  FontStore,
  FontsInUseStore,
  BlogStore,
  ProtypeServices as ProtypeServicesStore
} from "../stores";
import FooterComponent from "../components/FooterComponent/FooterComponent";

import ScrollToTop from "./scrollTop";

const App: React.FC = () => {
  const [direction] = useState("ltr");
  // Styled
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
  // Mobx
  useEffect(() => {
    TypefaceStore.watchTypefaces();
    FontStore.watchFonts();
    FontsInUseStore.watchFontsInUse();
    BlogStore.watchBlogs();
    ProtypeServicesStore.watchProtypeServicess();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading route …</div>}>
        <ScrollToTop />
        <Switch>
          <Route path="/admin">
            <AdminRoot />
          </Route>
          <Route path="/">
            <Navbar expand="md" fixed="top" bg="white" className="py-5">
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
            <Suspense fallback={<div>loading route …</div>}>
              <Switch>
                <Route exact={true} path="/">
                  <Home />
                </Route>
                <Route exact={true} path="/typefaces">
                  <Typefaces />
                </Route>
                <Route exact={true} path="/services">
                  <ProtypeServices />
                </Route>
                <Route exact={true} path="/custom">
                  <CustomTypefaces />
                </Route>
                <Route exact={true} path="/blog">
                  <Blog />
                </Route>

                <Route exact={true} path={`/blog/:articleId`}>
                  <ArticlePage />
                </Route>
                <Route exact={true} path="/contact">
                  <Contact />
                </Route>
                <Route exact={true} path={`/typefaces/:typefaceId`}>
                  <TypeFacePage />
                </Route>
                <Route exact={true} path={`/custom/:typefaceId`}>
                  <TypeFacePage />
                </Route>
              </Switch>
            </Suspense>
            <Container fluid={true}>
              <FooterComponent />
            </Container>
          </Route>
          {/* <Route exact={true} path="*" component={NotFound} /> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
