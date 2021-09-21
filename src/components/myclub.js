import React from "react";
import Appbar2 from "./appbar2";
import Clubs from "./Clubs";

export default class MyClub extends React.Component {
    render(){
        return (
            <div id="appbar2">
                <Appbar2/>
                <div id="appbar2-clubsection">
                        <div className="CardLayout">
                            <Clubs
                                name="JavaScript"
                                img="./js.png"
                                desc="JavaScript Boot-Camp For Students,Beginners And Working Professionals"
                                date="20 December 2021"
                            ></Clubs>
                            <Clubs
                                name="Python"
                                img="./python.png"
                                desc="Python Boot-Camp For Students,Beginners And Working Professionals"
                                date="29 November 2021"
                            ></Clubs>
                        </div>
                    </div>
            </div>
        );
    }
}