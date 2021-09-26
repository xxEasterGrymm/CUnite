import React from "react";

export default class Appbar extends React.Component {
    render(){
        return (
            <div id="appbar">
                <input id="appbar-search" type="search"></input>
                <div id="appbar-space"></div>
                <img id="appbar-icon" src="./message-icon.svg" />
                <img id="appbar-icon" src="./notification-icon.svg" />
                <h3>Dinesh Sharma</h3>
            </div>
        );
    }
}