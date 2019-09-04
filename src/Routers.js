import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import dashboard from './js/Pages/dashboard/dashboard';
import Navbar from "./js/commons/nav-bar/Navbar";
import createBatch from "./js/Pages/create-batch/create-batch";


class Routers extends React.Component {
    render() {
        return (
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/" component={dashboard} />
                    <Route exact path="/create-batch" component={createBatch} />
                </Switch>
            </Router>
        )
    }
}


export default Routers;