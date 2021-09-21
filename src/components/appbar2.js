import React from "react";
import { NavLink } from "react-router-dom";

export default class Appbar2 extends React.Component {
    render(){
        return (
                <div id="appbar2-appbar">
                <div id="appbar2-appbar-search-section">
                    <h2>Search</h2>
                    <div>
                    <img className="appbar2-icon" src="./Sorting.svg" />
                    <img className="appbar2-icon" src="./list.svg" />
                    <img id="appbar2-icon" className="appbar2-icon" src="./TableView.svg"/>
                    </div>
                </div>
                <div id="appbar2-appbar-filter-section">
                    <h4>Smart Filter</h4>
                    <NavLink to="/explore-clubs" className="appbar2-buttons">Clubs</NavLink>
                    <NavLink to="/explore-events" className="appbar2-buttons">Upcoming Events</NavLink>
                    <NavLink to="/explore-blogs" className="appbar2-buttons">Latest Blog Posts</NavLink>
                    <NavLink to="/explore-projects" className="appbar2-buttons">Top Projects</NavLink>
                </div>
                </div>
        );
    }
}