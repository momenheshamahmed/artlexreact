import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import { useObserver } from "mobx-react";
import AuthStore from "../../../stores/Auth";

import { CircularProgress, Container } from "@material-ui/core";
import MiniDrawer from "../../../components/adminComponents/Drawer";
// import MiniDrawer from "../../../components/adminComponents/Drawer";
const AdminLogin = lazy(() => import("../login"));
const AdminBlogForm = lazy(() => import("./Blog/form"));
const AdminBlogTable = lazy(() => import("./Blog"));
const AdminTickerForm = lazy(() => import("./Ticker/form"));
const AdminTickerTable = lazy(() => import("./Ticker"));

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
   
          <Route to="/admin">
            <Route to="/admin">
              <MiniDrawer key="minidrawer" />
              <div className="pt-3">
                <Suspense fallback={<div>loading route …</div>}>
                  <Switch>
                    <Route path="/admin/login">
                      <Redirect to="/admin" />
                    </Route>      
                    <Route path="/admin/blog/:key">
                      <AdminBlogForm />
                    </Route>
                    <Route exact={true} path="/admin/blog">
                      <AdminBlogTable />
                    </Route>
                    <Route path="/admin/ticker/:key">
                      <AdminTickerForm />
                    </Route>
                    <Route exact={true} path="/admin/ticker">
                      <AdminTickerTable />
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
