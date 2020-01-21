import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { HomeScreen } from '../screens'
import { Header } from "../components";


export default function AppNavigation() {
    return (
        <Router>
            <div>
                <Header/>
                <Redirect from="/" to="Home" />
                <Switch>
                    <Route path="/Home">
                        <HomeScreen/>
                    </Route>
                </Switch>
            </div>
         </Router>
    );
}