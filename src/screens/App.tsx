// Packages
import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
// Screens
import AdminRoot from "./admin/root";

// import Home from "./Home";
// import CustomTypefaces from "./CustomTypefaces";
// import Blog from "./Blog";
// import Contact from "./Contact";
// import ProtypeServices from "./ProtypeServices";
// import TypeFacePage from "./TypeFacePage";
const Home = lazy(() => import("./Home"));
const CustomTypefaces = lazy(() => import("./CustomTypefaces"));
const Blog = lazy(() => import("./Blog"));
const Contact = lazy(() => import("./Contact"));
const ProtypeServices = lazy(() => import("./ProtypeServices"));
const TypeFacePage = lazy(() => import("./TypeFacePage"));

// Assets
import Assets from "../assets";

// Stores
import {
  TypefaceStore,
  FontStore,
  FontsInUseStore,
  FontsFeaturedFullScreenStore,
  FontsFeaturedGridStore,
  CustomTypefaceStore,
  CustomFontsFeaturedFullScreenStore,
  CustomFontsFeaturedGridStore,
  BlogStore,
  BlogFeaturedArticlesStore
} from "../stores";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import Typefaces from "./Typefaces";
import ArticlePage from "./ArticlePage";

const App: React.FC = () => {
  const [direction] = useState("ltr");

  // Styled
  const Logo = styled.img`
    width: 70px;
  `;
  const LinkStyled = styled(Link)`
    color: black;
    &:hover {
      color: black;
      text-decoration: none;
    }
  `;
  // Mobx
  useEffect(() => {
    TypefaceStore.watchTypefaces();
    FontStore.watchFonts();
    FontsInUseStore.watchFontsInUse();
    FontsFeaturedFullScreenStore.watchFontsFeaturedFullscreen();
    FontsFeaturedGridStore.watchFontsFeaturedGrid();
    CustomTypefaceStore.watchCustomTypefaces();
    CustomFontsFeaturedFullScreenStore.watchFontsFeaturedFullscreen();
    CustomFontsFeaturedGridStore.watchFontsFeaturedGrid();
    BlogStore.watchBlogs();
    BlogFeaturedArticlesStore.watchBlogFeaturedArticles();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <AdminRoot />
        </Route>

        <Route path="/">
          <Navbar expand="md" fixed="top" bg="white" className="py-4">
            <Container fluid={true}>
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
                  {/* <LinkContainer to={"/services"}>
                    <Nav.Link eventKey="services">{"Services"}</Nav.Link>
                  </LinkContainer> */}
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
                              state: { contactIs: "sendessmessgae" }
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
                              state: { contactIs: "discount" }
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
                              state: { contactIs: "requestcustomfont" }
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
          <Suspense fallback={<h1>loading route …</h1>}>
            <Switch>
              <div className="mt-5">
                <Route exact={true} path="/">
                  <Home />
                </Route>
                <Route exact={true} path="/typefaces">
                  <Typefaces />
                </Route>
                <Route path="/services">
                  <ProtypeServices />
                </Route>
                <Route path="/custom">
                  <CustomTypefaces />
                </Route>
                <Route exact={true} path="/blog">
                  <Blog />
                </Route>
                <Route path={`/blog/:articleId`}>
                  <ArticlePage />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path={`/typefaces/:typefaceId`}>
                  <TypeFacePage />
                </Route>
              </div>
            </Switch>
          </Suspense>
          <FooterComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
