import React from "react";


export default class Dashboard extends React.Component {
    render() {
        return (
            <div id="dashboard">
                <div id="dashboard-appbar">
                    <div>
                        <h2>Mohit Sharma</h2>
                    </div>
                    <div id="dashboard-appbar-left">
                        <h3>Events</h3>
                        <h3>Clubs</h3>
                        <h3 className="active-red">Overview</h3>
                        <div className="normal-flex">
                            <img src="./calender-icon.svg" />
                            <p>21 Nov, 2021</p>
                        </div>
                    </div>
                </div>
                <p className="small">Welcome Back!</p>
                <div id="dashboard-box1">
                    <div className="inside-box1">
                        <div>
                            <p>Total Attended Events</p>
                            <h2>12</h2>
                            <div className="up">
                                <span className="a">1% <img src="./arrow-up-icon.svg" /></span>
                                <span className="b"> than last month</span>
                            </div>
                        </div>
                        <div>
                            <img className="graph" src="./graph-green.jpeg" />
                        </div>
                    </div>
                    <div className="inside-box1">
                        <div>
                            <p>Total Check In</p>
                            <h2>47</h2>
                            <div className="up">
                                <span className="a">8% <img src="./arrow-up-icon.svg" /></span>
                                <span className="b"> than last month</span>
                            </div>
                        </div>
                        <div>
                            <img className="graph-yellow" src="./graph-yellow.jpeg" />
                        </div>
                    </div>
                    <div className="inside-box1">
                        <div>
                            <p>Club Activities</p>
                            <h2>18</h2>
                            <div className="up">
                                <span className="a">2.3% <img src="./arrow-up-icon.svg" /></span>
                                <span className="b"> than last month</span>
                            </div>
                        </div>
                        <div>
                            <img className="graph" src="./graph-blue.jpeg" />
                        </div>
                    </div>
                </div>
                <div id="dashboard-box2">
                    <div id="inside-box2">
                        <div>
                            <h2 className="dashboard-h2">Events Data</h2>
                        </div>
                        <div className="b">
                            <p>Last Month <img className="DownArrow2" src="./DownArrow.svg" /></p>
                            <p className="export"><img className="export-icon" src="./export-icon.svg" /> Export</p>
                        </div>
                    </div>
                    <div id="RSVP">
                        <p><span class="small-dot1"></span> Attended</p>
                        <p><span class="small-dot2"></span> RSVP's</p>
                    </div>
                    <div>
                        <img id="main-graph" src="./main-graph.jpeg" />
                    </div>
                </div>
                <div id="dashboard-box3">
                    <div id="inside-box3">
                        <h2 className="dashboard-h2">Upcoming Events</h2>
                        <p>Events</p>
                        <div id="flex">
                            <div className="grid">
                                <div className="name">
                                    <img src="./flag-icon.svg" />
                                    <h2>
                                        30 Days Google Cloud Days
                                    </h2>
                                </div>
                                <div className="date">
                                    <h2>21 Nov</h2>
                                </div>
                                <div className="org">
                                    <h2>GDSC</h2>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="name">
                                    <img src="./flag-icon.svg" />
                                    <h2>
                                        Microsoft Azure Days
                                    </h2>
                                </div>
                                <div className="date">
                                    <h2>29 Nov</h2>
                                </div>
                                <div className="org">
                                    <h2>GDSC</h2>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="name">
                                    <img src="./flag-icon.svg" />
                                    <h2>
                                        Google DevMela
                                    </h2>
                                </div>
                                <div className="date">
                                    <h2>1 Sept</h2>
                                </div>
                                <div className="org">
                                    <h2>GDSC</h2>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="name">
                                    <img src="./flag-icon.svg" />
                                    <h2>
                                        Google DevFest
                                    </h2>
                                </div>
                                <div className="date">
                                    <h2>23 Sept</h2>
                                </div>
                                <div className="org">
                                    <h2>GDSC</h2>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="name">
                                    <img src="./flag-icon.svg" />
                                    <h2>
                                        AWS Community Event
                                    </h2>
                                </div>
                                <div className="date">
                                    <h2>6 Oct</h2>
                                </div>
                                <div className="org">
                                    <h2>GDSC</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="category">
                        <h2 className="dashboard-h2">Events by Category</h2>
                        <div id="inside-category">
                            <div className="grid">
                                <span className="square1"></span>
                                <h3>Tech</h3>
                                <h2>79%</h2>
                            </div>
                            <div className="grid">
                                <span className="square2"></span>
                                <h3>Carrer Planning</h3>
                                <h2>50%</h2>
                            </div>
                            <div className="grid">
                                <span className="square3"></span>
                                <h3>Design</h3>
                                <h2>30%</h2>
                            </div>
                            <div className="grid">
                                <span className="square4"></span>
                                <h3>Awareness</h3>
                                <h2>10%</h2>
                            </div>
                            <div className="grid">
                                <span className="square5"></span>
                                <h3>Social Activity</h3>
                                <h2>5%</h2>
                            </div>                           
                        </div>
                        <div className="hr"></div>
                            <h2 className="insights">More Insights <img className="RightArrow" src="./DownArrow.svg" /></h2>
                    </div>
                </div>
            </div>
        );
    }
}