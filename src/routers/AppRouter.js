import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import { Registro } from "../components/Registro";
import App from "../containers/App";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export default function AppRouter() {
  return (
    <Router>
        <Switch>
          <PublicRoute exact path="/"  component={App}/>
          <PublicRoute exact path="/login"  component={Login}/>
          <PublicRoute exact path="/home"  component={Home}/>
          <PublicRoute exact path="/registro" component={Registro} />
          
          <PrivateRoute path="/" component={DashboardRouter} />
        
        </Switch>
    </Router>
  );
}