import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./firstPage/login"
import HomePage from "./secondPage/homePage"
import PrivateRoute from './firstPage/privateRoute'

export default class App extends React.Component{
    render()
    {
        return(
            <Router>
                <div>
                <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute path="/home" component={HomePage} />
                </Switch>
                </div>
            </Router>
        )
    }
}