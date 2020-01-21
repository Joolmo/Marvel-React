import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { HomeScreen, DetailScreen } from '../screens'
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
                    <Route path="/CharacerDetail/:id">
                        <DetailScreen/>
                    </Route>
                    <Route path="/ComicDetail/:id">
                        <DetailScreen/>
                    </Route>
                </Switch>
            </div>
         </Router>
    );
}