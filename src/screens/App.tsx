// Packages
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import {
  Navbar,
  Nav,
  Button,
} from 'react-bootstrap';
import {
  LinkContainer,
} from 'react-router-bootstrap';

import { useMediaQuery } from 'react-responsive';

// Screens
import Home from './Home/Home';

import AdminRoot from './admin/root';

// Assets
import Assets from '../assets';

import './App.css';

// Stores
import { EpisodeStore } from '../stores';

import { getCurrentLanguage, Languages, setCurrentLanguage } from '../utils/translation';

const App: React.FC = () => {

  const languageButton = useMediaQuery({ minDeviceWidth: 768 });
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    EpisodeStore.watchEpisodes();
  }, []);

  return (

    <BrowserRouter>
      <Switch>
        <Route
          path="/admin"
        >
          <AdminRoot />
        </Route>
        <div
          dir={direction}
        >
          <Route
            path="/"
          >
            <Navbar

              expand="md"
              sticky="top"
              bg="green"
              variant="light"
            >
              <Navbar.Brand>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <img
                    src={Assets.Images.logo}
                    alt="Logo"
                    style={{
                      height: 50,
                    }}
                  />

                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                  style={{
                    marginLeft: 24,
                    marginRight: 24,
                  }}
                >
                  <LinkContainer
                    exact
                    to={'/'}
                    className="nav-item"
                    activeClassName="nav-item-active"
                  >
                    <Nav.Link>
                      {'Home'}
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>

            </Navbar>
            <Switch>

              <Route
                path="/"
              >
                <Home />
              </Route>
            </Switch>
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
