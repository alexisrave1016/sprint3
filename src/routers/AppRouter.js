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

export default function AppRouter() {
  return (
    <Router>
        <Switch>
          <Route exact path="/"  component={App}/>
          <Route exact path="/login"  component={Login}/>
          <Route exact path="/home"  component={Home}/>
          <Route exact path="/registro" component={Registro} />
        
        </Switch>
    </Router>
  );
}