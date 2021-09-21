import React from "react";
import { NavLink } from 'react-router-dom'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar">
            <div id="sidebar-top">
                <h2>CUnite</h2>
                <img id="sidebar-icon" src="./menu.svg" />
            </div>
            <div id="sidebar-mid">
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./grid.svg" />
                    <NavLink to="/" exact="true" activeClassName="is-active">Dashboard</NavLink>
                    <NavLink to="/" exact="true" activeClassName="is-active-icon"><img className="sidebar-last-icon" src="./DownArrow.svg" /></NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./home.svg" />
                    <NavLink to="/explore" activeClassName="is-active" >Explore</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./home.svg" />
                    <NavLink to="/profile" activeClassName="is-active">Profile</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./home.svg" />
                    <NavLink to="/settings" activeClassName="is-active">Settings</NavLink>
                </div>
            </div>
        </div>
        );
    }
}