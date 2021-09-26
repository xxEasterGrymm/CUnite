import React from "react";
import { NavLink } from 'react-router-dom'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar">
            <div id="sidebar-top">
                <img id="sidebar-icon" src="./CUUnion-logo.svg" />
            </div>
            <div id="sidebar-mid">
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./home-icon.svg" />
                    <NavLink to="/" exact="true" activeClassName="is-active">Dashboard</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./projects-icon.svg" />
                    <NavLink to="/explore-clubs" activeClassName="is-active" >Projects</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./inbox-icon.svg" />
                    <NavLink to="/myclubs" activeClassName="is-active">Inbox</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./events-icon.svg" />
                    <NavLink to="/mentorships" activeClassName="is-active">Events</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./users-icon.svg" />
                    <NavLink to="/taskmanagement" activeClassName="is-active">Clubs</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./events-icon.svg" />
                    <NavLink to="/chatarea" activeClassName="is-active">Chat Room</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./calender-icon.svg" />
                    <NavLink to="/settings" activeClassName="is-active">Calender</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./help-icon.svg" />
                    <NavLink to="/settings" activeClassName="is-active">Help Center</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./setting-icon.svg" />
                    <NavLink to="/settings" activeClassName="is-active">Settings</NavLink>
                </div>
            </div>
        </div>
        );
    }
}