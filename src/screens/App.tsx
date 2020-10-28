/*eslint-disable*/
// Packages
import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
const AdminRoot = lazy(() => import("./admin/root"));
const Home = lazy(() => import("./Home"));
const Blog = lazy(() => import("./Blog"));
const Gallery = lazy(() => import("./Gallery"));
const Contact = lazy(() => import("./Contact"));
const NotFound = lazy(() => import("./NotFound"));
const ArticlePage = lazy(() => import("./ArticlePage"));
// Assets
import Assets from "../assets";

// Stores
import {
  BlogStore,
  TickerStore
} from "../stores";
import FooterComponent from "../components/FooterComponent/FooterComponent";

import ScrollToTop from "./scrollTop";
import { Container } from "react-bootstrap";

const App: React.FC = props => {
  const [direction] = useState("ltr");
  // Styled

  // Mobx
  useEffect(() => {
    BlogStore.watchBlogs();
    TickerStore.watchTickers();
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
            <Suspense fallback={<div>loading route …</div>}>
              <Switch>
                <Route exact={true} path="/">
                  <Home />
                </Route>
                <Route exact={true} path="/blog">
                  <Blog />
                </Route>
                <Route exact={true} path="/gallery">
                  <Gallery />
                </Route>

                <Route exact={true} path={`/blog/:articleId`}>
                  <ArticlePage />
                </Route>
                <Route exact={true} path="/contact">
                  <Contact />
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
