/*eslint-disable*/
// Packages
import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
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
  ProtypeServices as ProtypeServicesStore,
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
    TypefaceStore.watchTypefaces();
    FontStore.watchFonts();
    FontsInUseStore.watchFontsInUse();
    BlogStore.watchBlogs();
    ProtypeServicesStore.watchProtypeServicess();
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
