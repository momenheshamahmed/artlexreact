import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./screens/App";
import * as serviceWorker from "./serviceWorker";
import { initializeApp } from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhGlxQnja1bl8fJCABV2mTPwv3oCwqPak",
  authDomain: "artlex-208d2.firebaseapp.com",
  databaseURL: "https://artlex-208d2.firebaseio.com",
  projectId: "artlex-208d2",
  storageBucket: "artlex-208d2.appspot.com",
  messagingSenderId: "1039017923805",
  appId: "1:1039017923805:web:08f7d5a73e36831b5d7734",
  measurementId: "G-5ZQFY7S6MJ"
};
initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
