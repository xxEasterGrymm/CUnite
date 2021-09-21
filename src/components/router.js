import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import Admin from "./admin";
import Appbar from "./appbar";
import ExploreEvents from "../side-components/explore-events";
import ExploreClubs from "../side-components/explore-clubs";
import ExploreBlogs from "../side-components/explore-blogs";
import Task from "./task";
import MyClub from "./myclub";



export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Sidebar></Sidebar>
                <div id="root-1">
                <Appbar></Appbar>
                <div className="upper-div">
                    <Route path="/" component={Dashboard} exact="true"></Route>
                    <Route path="/explore-clubs" component={ExploreClubs}>
                    </Route>
                    <Route path="/explore-events" component={ExploreEvents}></Route>
                    <Route path="/explore-blogs" component={ExploreBlogs}>
                    </Route>
                    <Route path="/taskmanagement" component={Task}></Route>
                    <Route path="/myclubs" component={MyClub}></Route>
                </div>
                </div>
            </BrowserRouter>
        );
    }
}
