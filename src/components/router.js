import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import Profile from "./profile";
import Admin from "./admin";
import Appbar from "./appbar";



export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Sidebar></Sidebar>
                <div id="root-1">
                <Appbar></Appbar>
                <div>
                    <Route path="/" component={Dashboard} exact="true"></Route>
                    <Route path="/profile" activeClassName="is-active" component={Profile}></Route>
                    <Route path="/admin" activeClassName="is-active" component={Admin}></Route>
                </div>
                </div>
            </BrowserRouter>
        );
    }
}
