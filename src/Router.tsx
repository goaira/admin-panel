import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Admin from "./pages/admin";
import Dashboard from "./pages/dashboard";
import User from "./pages/user";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/user" component={User} />
                <Route path="/admin" component={Admin} />
            </Switch>
        </Router>
    );
}

export default Routes;