import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import { CharacterScreen, ComicScreen } from '../screens'


export default function AppNavigation() {
    return (
        <Router>
            <div>
                <Redirect from="/" to="Character" />
                <Switch>
                    <Route path="/Character">
                        <CharacterScreen/>
                    </Route>
                    <Route path="/Comic">
                        <ComicScreen/>
                    </Route>
                </Switch>

                <ul>
                    <li>
                        <Link to="/Character">Character</Link>
                    </li>
                    <li>
                        <Link to="/Comic">Comic</Link>
                    </li>
                </ul>
            </div>
         </Router>
    );
}