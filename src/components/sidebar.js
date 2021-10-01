import React from "react";
import { NavLink } from 'react-router-dom'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar">
            <div id="sidebar-mid">
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./home-icon.svg" />
                    <NavLink to="/dashboard" exact="true" activeClassName="is-active">Dashboard</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./projects-icon.svg" />
                    <NavLink to="/projects" activeClassName="is-active" >Projects</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./inbox-icon.svg" />
                    <NavLink to="/inbox" activeClassName="is-active">Inbox</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./events-icon.svg" />
                    <NavLink to="/explore-events" activeClassName="is-active">Events</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./users-icon.svg" />
                    <NavLink to="/explore-clubs" activeClassName="is-active">Clubs</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./events-icon.svg" />
                    <NavLink to="/taskmanagement" activeClassName="is-active">Tasks</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./calender-icon.svg" />
                    <NavLink to="/calender" activeClassName="is-active">Calender</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img className="sidebar-icon" src="./help-icon.svg" />
                    <NavLink to="/helpCenter" activeClassName="is-active">Help Center</NavLink>
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