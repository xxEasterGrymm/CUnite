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
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./home.svg" />
                    <NavLink to="/explore-clubs" activeClassName="is-active" >Explore Clubs</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./home.svg" />
                    <NavLink to="/myclubs" activeClassName="is-active">My Clubs</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./home.svg" />
                    <NavLink to="/mentorships" activeClassName="is-active">Mentorships</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./home.svg" />
                    <NavLink to="/taskmanagement" activeClassName="is-active">Task Management</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./home.svg" />
                    <NavLink to="/chatarea" activeClassName="is-active">Chat Area</NavLink>
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