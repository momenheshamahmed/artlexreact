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
import ResponsiveDrawer from '../components/NavBar/index';
import AdminRoot from './admin/root';

// Assets
import Assets from '../assets';

import './App.css';

// Stores
import { EpisodeStore } from '../stores';

import { getCurrentLanguage, Languages, setCurrentLanguage } from '../utils/translation';

const App: React.FC = () => {

  const languageButton = useMediaQuery({ minDeviceWidth: 768 });
  const [direction, setDirection] = useState('rtl');

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
                collapseOnSelect
                expand="md"
                sticky="top"
                bg="white"
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
                      alt="mainLogo"
                      style={{
                        height: 100,
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                        }}
                      >Sanabel</p>
                      <p
                        style={{
                          margin: 0,
                        }}
                      >Scan</p>
                    </div>
                  </div>
                </Navbar.Brand>
                {
                  !languageButton
                  && (
                    <Button
                      style={{
                        justifySelf: 'flex-end',
                        marginInlineStart: 'auto',
                        marginInlineEnd: 6,
                      }}
                      onClick={() => {
                        setDirection(direction === 'rtl' ? 'ltr' : 'rtl');
                        setCurrentLanguage(direction === 'rtl' ? Languages.ENGLISH : Languages.ARABIC);
                      }}
                    >
                      {getCurrentLanguage() === 'ar' ? 'EN' : 'AR'}
                    </Button>
                  )
                }
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
                    <LinkContainer
                      to={'/about'}
                      className="nav-item"
                      activeClassName="nav-item-active"
                    >
                      <Nav.Link>
                        {'About'}
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer
                      to={'/gallery'}
                      className="nav-item"
                      activeClassName="nav-item-active"
                    >
                      <Nav.Link>
                        {'Gallery'}
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer
                      to={'/contact-us'}
                      className="nav-item"
                      activeClassName="nav-item-active"
                    >
                      <Nav.Link>
                        {'Contact Us'}
                      </Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Navbar.Collapse>
                {
                  languageButton
                  && (
                    <Button
                      style={{
                        justifySelf: 'flex-end',
                      }}
                      onClick={() => {
                        setDirection(direction === 'rtl' ? 'ltr' : 'rtl');
                        setCurrentLanguage(direction === 'rtl' ? Languages.ENGLISH : Languages.ARABIC);
                      }}
                    >
                      {getCurrentLanguage() === 'ar' ? 'EN' : 'AR'}
                    </Button>
                  )
                }
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
