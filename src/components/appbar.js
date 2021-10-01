import React from "react";

export default class Appbar extends React.Component {
    render(){
        return (
            <div id="appbar">
                            <div id="appbar-flex1">
                <div id="appbar-img">
                <a href="/"><img id="appbar-logo" src="./CUUnion-logo.svg" /></a>
            </div>
                <input id="appbar-search" type="search" placeholder="Search..."></input>
                </div>
                <div id="appbar-flex">
                <div id="appbar-space"></div>
                <img id="appbar-icon" src="./message-icon.svg" />
                <img id="appbar-icon" src="./notification-icon.svg" />
                <span class="dot"></span>
                <h3>Mohit Sharma</h3>
                <img className="DownArrow1" src="./DownArrow.svg"/>
                </div>
            </div>
        );
    }
}