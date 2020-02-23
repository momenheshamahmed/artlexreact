import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./screens/App";
import * as serviceWorker from "./serviceWorker";
import { initializeApp } from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
const firebaseConfig = {
  apiKey: "AIzaSyAoDUj8-Z80SI56awjDLEreHIQrvsb2X4g",
  authDomain: "protypefoundry.firebaseapp.com",
  databaseURL: "https://protypefoundry.firebaseio.com",
  projectId: "protypefoundry",
  storageBucket: "protypefoundry.appspot.com",
  messagingSenderId: "584848193106",
  appId: "1:584848193106:web:1ed4ebe6f012e9c519918b",
  measurementId: "G-Z6985VMKD3"
};
initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
