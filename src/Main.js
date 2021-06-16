import React from "react";
import { Route, Switch } from 'react-router-dom';
// screens
import Home from "./screens/Home/Home";
import Help from "./screens/Help/Help";
import History from "./screens/History/History";

export default function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route exact path='/help' component={Help}>
            </Route>
            <Route exact path='/history' component={History}>
            </Route>
        </Switch>
    );
}