import React from 'react';
import TodoIndex from "../components/TodoIndex";
import UsersIndex from "../UsersIndex";
import {Route} from "react-router-dom";
import Home from "../components/Home";
import Profile from "../components/Profile";
import About from "../components/About";

const RouteIndex = () => {
    return (
        <div>
            <Route path="/" exact={true} component={Home} />
            <Route path="/todos" exact={true} component={TodoIndex} />
            <Route path="/users" exact={true} component={UsersIndex} />
            <Route path="/profiles/:username" exact={true} component={Profile} />
            <Route path="/about" component={About} />
        </div>
    )
};

export default RouteIndex
