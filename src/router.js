import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Home from './pages/home';

class PublicRouter extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default PublicRouter;