import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./sidebar";
import Appbar from "./appbar"

export default class Task extends React.Component {
    render(){
        return (
            <div id="root">
    <Sidebar></Sidebar>
        <div id="root-1">
            <Appbar></Appbar>
            <div className="upper-div">
            <div className="bg-color">
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
                    <NavLink to="/taskmanagement" activeClassName="active-appbar2" className="appbar2-buttons">All</NavLink>
                    <NavLink to="/taskmanagement" className="appbar2-buttons">Done</NavLink>
                    <NavLink to="/taskmanagement" className="appbar2-buttons">Doing</NavLink>
                    <NavLink to="/taskmanagement" className="appbar2-buttons">Completed</NavLink>
                </div>
                </div>
            <img id="task-img" src="./task.jpg"/>
            </div>
            </div>
        </div>
        </div>
            
        );
    }
}