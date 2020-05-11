import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import { useObserver } from "mobx-react";
import AuthStore from "../../../stores/Auth";

import { CircularProgress, Container } from "@material-ui/core";
import MiniDrawer from "../../../components/adminComponents/Drawer";
// import MiniDrawer from "../../../components/adminComponents/Drawer";
const AdminLogin = lazy(() => import("../login"));
const AdminTypefacesForm = lazy(() => import("./typefaces/form"));
const AdminTypefacesTable = lazy(() => import("./typefaces"));
const AdminFontsForm = lazy(() => import("./FontsForm/form"));
const AdminFontsTable = lazy(() => import("./FontsForm"));
const AdminFontsInUseTable = lazy(() => import("./FontsInUseForm"));
const AdminFontsInUseForm = lazy(() => import("./FontsInUseForm/form"));
const AdminBlogForm = lazy(() => import("./Blog/form"));
const AdminBlogTable = lazy(() => import("./Blog"));
const AdminProtypeServicesForm = lazy(() => import("./ProtypeServices/form"));
const AdminProtypeServicesTable = lazy(() => import("./ProtypeServices"));

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
        <Switch>
          {/* <Route to="/admin">
            <Redirect to="/admin/typefaces" />
          </Route> */}
          <Route to="/admin">
            <Route to="/admin">
              <MiniDrawer key="minidrawer" />
              <div className="pt-3">
                <Suspense fallback={<div>loading route …</div>}>
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
                    <Route path="/admin/blog/:key">
                      <AdminBlogForm />
                    </Route>
                    <Route exact={true} path="/admin/blog">
                      <AdminBlogTable />
                    </Route>
                    <Route path="/admin/services/:key">
                      <AdminProtypeServicesForm />
                    </Route>
                    <Route exact={true} path="/admin/services">
                      <AdminProtypeServicesTable />
                    </Route>
                  </Switch>
                </Suspense>
              </div>
            </Route>
          </Route>
        </Switch>
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
