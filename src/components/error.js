import React from "react";
import Sidebar from "./sidebar";
import Appbar from "./appbar"

export default class Error extends React.Component {
    render(){
        return (
            <div id="root">
    <Sidebar></Sidebar>
        <div id="root-1">
            <Appbar></Appbar>
            <div className="upper-div"></div>
        </div>
        </div>
        );
    }
}