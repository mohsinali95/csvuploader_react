import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import dashboard from './js/Pages/dashboard/dashboard';
import Navbar from "./js/commons/nav-bar/Navbar";
import createBatch from "./js/Pages/create-batch/create-batch";
import Report from "./js/Pages/report/Report";


class Routers extends React.Component {
    render() {
        return (
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/" component={dashboard} />
                    <Route exact path="/create-batch" component={createBatch} />
                    <Route exact path="/report" component={Report} />
                </Switch>
            </Router>
        )
    }
}


export default Routers;