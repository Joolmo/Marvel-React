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
import { HomeScreen } from '../screens'


export default function AppNavigation() {
    return (
        <Router>
            <div>
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