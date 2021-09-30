import React from "react";
import Appbar2 from "../components/appbar2";
import Clubs from "../components/Clubs";
import Sidebar from "../components/sidebar";
import Appbar from "../components/appbar"

export default class ExploreBlogs extends React.Component {
    render(){
        return (
            <div id="root">
    <Sidebar></Sidebar>
        <div id="root-1">
            <Appbar></Appbar>
            <div className="upper-div">
            <div id="appbar2">
                <Appbar2 />
                <div id="appbar2-clubsection">
                        <div className="CardLayout">
                            <Clubs
                                name="React"
                                img="./react.png"
                                desc="React JS Boot-Camp For Students,Beginners And Working Professionals"
                                date="1 October 2021"
                            ></Clubs>
                            <Clubs
                                name="Tailwind"
                                img="./tailwind.png"
                                desc="Tailwind Boot-Camp For Students,Beginners And Working Professionals"
                                date="29 September 2021"
                            ></Clubs>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        </div> 
            
        );
    }
}