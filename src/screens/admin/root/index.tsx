import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { useObserver } from "mobx-react";
import AuthStore from "../../../stores/Auth";

import AdminLogin from "../login";
import { CircularProgress, Container } from "@material-ui/core";

import AdminTypefacesForm from "./typefaces/form";
import AdminTypefacesTable from "./typefaces";
import MiniDrawer from "../../../components/adminComponents/Drawer";
import { BrowserRouter } from "react-router-dom";
import AdminFontsForm from "./FontsForm/form";
import AdminFontsTable from "./FontsForm";
import AdminFontsInUseTable from "./FontsInUseForm";
import AdminFontsInUseForm from "./FontsInUseForm/form";

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
                </Switch>
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
