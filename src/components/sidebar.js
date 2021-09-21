import React from "react";
import { NavLink } from 'react-router-dom'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar">
            <div id="sidebar-top">
                <h2>CUnite</h2>
                <img src="./menu.svg" />
            </div>
            <div id="sidebar-mid">
                <div className="sidebar-mid-option">
                    <img src="./home.svg" />
                    <NavLink to="/" exact={true}>Dashboard</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img src="./home.svg" />
                    <NavLink to="/profile" >Profile</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img src="./home.svg" />
                    <NavLink to="/admin" >Admin</NavLink>
                </div>
                <div className="sidebar-mid-option">
                    <img src="./home.svg" />
                    <NavLink to="/create" >Dashboard</NavLink>
                </div>
            </div>
        </div>
        );
    }
}