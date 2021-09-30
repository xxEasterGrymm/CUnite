import React from "react";
import Sidebar from "./sidebar";
import Appbar from "./appbar";
import { BrowserRouter } from "react-router-dom";

const DashboardBase = (wrappedComponent) => {
    return (props)=>(
        <div>
            <Sidebar></Sidebar>
            <div id="root-1">
                <Appbar></Appbar>
                <div className="upper-div">
                    <wrappedComponent/>
                </div>
            </div>
        </div>
    )
}

export default DashboardBase