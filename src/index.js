import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "./index.css"

// pages for this product
import MainPage from "./views/MainPage/MainPage"

// var hist = createBrowserHistory();
//history={hist}>
ReactDOM.render(
  <MainPage />,
  // <Router basename={process.env.PUBLIC_URL} > 
  //   <Switch>
  //     <Route path="/" component={MainPage} />
  //   </Switch>
  // </Router>,
  document.getElementById("root")
);
