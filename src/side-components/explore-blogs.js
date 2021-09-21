import React from "react";
import Appbar2 from "../components/appbar2";

export default class ExploreBlogs extends React.Component {
    render(){
        return (
            <div id="appbar2">
                <Appbar2/>                
                <div id="appbar2-clubsection">
                    <h1>Blog Section</h1>
                </div>
            </div>
        );
    }
}