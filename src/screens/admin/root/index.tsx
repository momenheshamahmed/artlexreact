import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";
import { useObserver } from "mobx-react";
import AuthStore from "../../../stores/Auth";

import AdminLogin from "../login";
import { CircularProgress, Container } from "@material-ui/core";

import AdminTypefacesForm from "./typefaces/form";
import AdminTypefacesTable from "./typefaces";
import MiniDrawer from "../../../components/adminComponents/Drawer";
import { BrowserRouter } from "react-router-dom";

const AdminFontsForm = lazy(() => import("./FontsForm/form"));
const AdminFontsTable = lazy(() => import("./FontsForm"));
const AdminFontsInUseTable = lazy(() => import("./FontsInUseForm"));
const AdminFontsInUseForm = lazy(() => import("./FontsInUseForm/form"));
const AdminFontsFeaturedFullscreenForm = lazy(() =>
  import("./FontsFeaturedFullScreen/form")
);
const AdminFontsFeaturedGridTable = lazy(() => import("./FontsFeaturedGrid"));
const AdminFontsFeaturedGridForm = lazy(() =>
  import("./FontsFeaturedGrid/form")
);
const AdminFontsFeaturedFullscreenTable = lazy(() =>
  import("./FontsFeaturedFullScreen")
);
const AdminFontsFeaturedTesterForm = lazy(() =>
  import("./FontsFeaturedTester/form")
);
const AdminFontsFeaturedTesterTable = lazy(() =>
  import("./FontsFeaturedTester")
);

const AdminBlogForm = lazy(() => import("./Blog/form"));
const AdminBlogTable = lazy(() => import("./Blog"));

const AdminBlogFeaturedArticlesForm = lazy(() =>
  import("./BlogFeaturedArticles/form")
);
const AdminBlogFeaturedArticlesTable = lazy(() =>
  import("./BlogFeaturedArticles")
);

const AdminCustomTypefacesTable = lazy(() => import("./CustomTypefaces"));
const AdminCustomTypefacesForm = lazy(() => import("./CustomTypefaces/form"));
const AdminCustomFontsFeaturedFullscreenForm = lazy(() =>
  import("./CustomFontsFeaturedFullScreen/form")
);
const AdminCustomFontsFeaturedFullscreenTable = lazy(() =>
  import("./CustomFontsFeaturedFullScreen")
);
const AdminCustomFontsFeaturedGridForm = lazy(() =>
  import("./CustomFontsFeaturedGrid/form")
);
const AdminCustomFontsFeaturedGridTable = lazy(() =>
  import("./CustomFontsFeaturedGrid")
);

const AdminRoot = () => {
  useEffect(() => {
    AuthStore.syncStatus();
  }, []);
  return useObserver(() =>
    AuthStore.isAuthenticating ? (
      <Container
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CircularProgress />
      </Container>
    ) : AuthStore.isAuthenticated ? (
      <BrowserRouter>
        <Suspense fallback={<h1>loading route …</h1>}>
          <Switch>
            {/* <Route to="/admin">
            <Redirect to="/admin/typefaces" />
          </Route> */}
            <Route to="/admin">
              <Route to="/admin">
                <MiniDrawer key="minidrawer" />
                <div className="pt-3">
                  <Switch>
                    <Route path="/admin/login">
                      <Redirect to="/admin" />
                    </Route>
                    <Route path="/admin/typefaces/:key">
                      <AdminTypefacesForm />
                    </Route>
                    <Route exact={true} path="/admin/typefaces">
                      <AdminTypefacesTable />
                    </Route>
                    <Route path="/admin/customtypefaces/:key">
                      <AdminCustomTypefacesForm />
                    </Route>
                    <Route exact={true} path="/admin/customtypefaces">
                      <AdminCustomTypefacesTable />
                    </Route>

                    <Route path="/admin/fonts/:key">
                      <AdminFontsForm />
                    </Route>
                    <Route exact={true} path="/admin/fonts">
                      <AdminFontsTable />
                    </Route>
                    <Route path="/admin/fontsinuse/:key">
                      <AdminFontsInUseForm />
                    </Route>
                    <Route exact={true} path="/admin/fontsinuse">
                      <AdminFontsInUseTable />
                    </Route>
                    <Route path="/admin/fontsfeaturedfullscreen/:key">
                      <AdminFontsFeaturedFullscreenForm />
                    </Route>
                    <Route exact={true} path="/admin/fontsfeaturedfullscreen">
                      <AdminFontsFeaturedFullscreenTable />
                    </Route>
                    <Route path="/admin/fontsfeaturedgrid/:key">
                      <AdminFontsFeaturedGridForm />
                    </Route>
                    <Route exact={true} path="/admin/fontsfeaturedgrid">
                      <AdminFontsFeaturedGridTable />
                    </Route>
                    <Route path="/admin/customfontsfeaturedfullscreen/:key">
                      <AdminCustomFontsFeaturedFullscreenForm />
                    </Route>
                    <Route
                      exact={true}
                      path="/admin/customfontsfeaturedfullscreen"
                    >
                      <AdminCustomFontsFeaturedFullscreenTable />
                    </Route>
                    <Route path="/admin/customfontsfeaturedgrid/:key">
                      <AdminCustomFontsFeaturedGridForm />
                    </Route>
                    <Route exact={true} path="/admin/customfontsfeaturedgrid">
                      <AdminCustomFontsFeaturedGridTable />
                    </Route>
                    <Route path="/admin/fontsfeaturedtester/:key">
                      <AdminFontsFeaturedTesterForm />
                    </Route>
                    <Route exact={true} path="/admin/fontsfeaturedtester">
                      <AdminFontsFeaturedTesterTable />
                    </Route>
                    <Route path="/admin/blog/:key">
                      <AdminBlogForm />
                    </Route>
                    <Route exact={true} path="/admin/blog">
                      <AdminBlogTable />
                    </Route>
                    <Route path="/admin/blogfeaturedarticles/:key">
                      <AdminBlogFeaturedArticlesForm />
                    </Route>
                    <Route exact={true} path="/admin/blogfeaturedarticles">
                      <AdminBlogFeaturedArticlesTable />
                    </Route>
                  </Switch>
                </div>
              </Route>
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    ) : (
      <Switch>
        <Route path="/admin/login">
          <AdminLogin />
        </Route>
        <Route>
          <Redirect to="/admin/login" />
        </Route>
      </Switch>
    )
  );
};

export default AdminRoot;
