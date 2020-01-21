import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { HomeScreen, ComicDetailScreen, CharacterDetailScreen, } from '../screens'
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
                        <CharacterDetailScreen/>
                    </Route>
                    <Route path="/ComicDetail/:id">
                        <ComicDetailScreen/>
                    </Route>
                </Switch>
            </div>
         </Router>
    );
}