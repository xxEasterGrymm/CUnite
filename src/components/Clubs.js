import React from "react";
import Sidebar from "./sidebar";
import Appbar from "./appbar"


export default class Clubs extends React.Component {
    render() {
        return (
            <div id="root">
                <Sidebar></Sidebar>
                <div id="root-1">
                    <Appbar></Appbar>
                    <div className="upper-div">
                        <div id="dashboard">
       <div id="join-box" class="text-center">
       <img src="./GDSC-JoinUs.jpeg" />
       </div>
       <div id="about-box">
           <h5 className="bold-heading">About</h5>
           <p>Developer Student Clubs - Chandigarh University: Helping students bridge the gap between theory and practice.</p>
           <p>Developer Student Clubs Chandigath University is a community group for students interested in google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome to join out family. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
           <p>The Developer Student Clubs at Chandigath University strives to enhance the educational, recreational, social, or cultural environment of Chandigarh University by being invlusive to all students, by transforming knowledge to students, by forging closer relationships between students and local businesses in the community, and by promoting diversity in the tech community.</p>
       </div>
       <div id="vision-box" class="container">
       <h5 className="bold-heading">Our Vision:</h5>
            <section class="row">
                <div class="col-lg-4 col-md-3 col-sm-4 col-xs-6">
                    <div class="vision-tile">
                        <div>
                            <h5>Connect</h5>
                            <span>Meet other students on campus interested in developer technlogies. All are welcome, including those with diverse backgrounds and different majors.</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-3 col-sm-4 col-xs-6">
                    <div class="vision-tile">
                        <div>
                            <h5>Learn</h5>
                            <span>Learn about a wide range of technical topics where new skills are gained through hands-on workshops, in-person training and project building activities.</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-3 col-sm-4 col-xs-6">
                    <div class="vision-tile">
                        <div>
                            <h5>Grow</h5>
                            <span>Apply your new learnings and connections to build great solutions for local problems. Advance your skills, career and network. Give back to you rcommunity by helping others learn as well.</span>
                        </div>
                    </div>
                </div>
            </section>
       </div>
       <div id="vision-box" class="container">
       <h5 className="bold-heading">Upcoming Events:</h5>
          <div id = "insideClubs-box2">
          <div className="insideClubs-card1">
                                    <img className="GDSC-Title" src="./GDSC-GoogleCloud.jpeg" />
                                    <p className="long-long">30 Days of Google Cloud</p>
                                    <p>
                                    Orientation session for 30 Days of Google Cloud registrants. Learn Qwiklabs basics and walkthrough to the 30 Days of Google Cloud program.
                                    </p>
                                    <div className="Clubs-button">
                                        <button><a  className="red" href="/club">RSVP</a></button>
                                        <button className="Date">Sept 26, 2021</button>
                                    </div>
                                    </div>
                                    <div className="insideClubs-card1">
                                    <img className="GDSC-Title" src="./GDSC-GoogleCloud.jpeg" />
                                    <p className="long-long">30 Days of Google Cloud</p>
                                    <p>
                                    Orientation session for 30 Days of Google Cloud registrants. Learn Qwiklabs basics and walkthrough to the 30 Days of Google Cloud program.
                                    </p>
                                    <div className="Clubs-button">
                                        <button><a  className="red" href="/club">RSVP</a></button>
                                        <button className="Date">Sept 26, 2021</button>
                                    </div>
                                    </div>
                                    <div className="insideClubs-card1">
                                    <img className="GDSC-Title" src="./GDSC-GoogleCloud.jpeg" />
                                    <p className="long-long">30 Days of Google Cloud</p>
                                    <p>
                                    Orientation session for 30 Days of Google Cloud registrants. Learn Qwiklabs basics and walkthrough to the 30 Days of Google Cloud program.
                                    </p>
                                    <div className="Clubs-button">
                                        <button><a  className="red" href="/club">RSVP</a></button>
                                        <button className="Date">Sept 26, 2021</button>
                                    </div>
                                    </div>
          </div>
       </div>
       <div id="vision-box" class="container organiser-container">
       <h5 className="bold-heading">Organisers:</h5>
          <div id = "insideClubs-box2">
                                    <div className="insideClubs-card1 organisers">
                                    <img className="GDSC-Title" src="./Ajayraj.jpeg" />
                                    <p className="long-long">Ajayraj Singh</p>
                                    <p id="organisers-p">
                                    GDSC Lead
                                    </p>
                                    <div className="Clubs-button">
                                        <button><a  className="red" href="/club">View Profile</a></button>
                                    </div>
                                    </div>     
                                    <div className="insideClubs-card1 organisers">
                                    <img className="GDSC-Title" src="./Mohit.jpeg" />
                                    <p className="long-long">Mohit Sharma</p>
                                    <p id="organisers-p">
                                    Learning and Development Lead - Web
                                    </p>
                                    <div className="Clubs-button">
                                        <button><a  className="red" href="/club">View Profile</a></button>
                                    </div>
                                    </div> 
                                    <div className="insideClubs-card1 organisers">
                                    <img className="GDSC-Title" src="./Ajayraj.jpeg" />
                                    <p className="long-long">Ajayraj Singh</p>
                                    <p id="organisers-p">
                                    GDSC Lead
                                    </p>
                                    <div className="Clubs-button">
                                        <button><a  className="red" href="/club">View Profile</a></button>
                                    </div>
                                    </div>     
                                    <div className="insideClubs-card1 organisers">
                                    <img className="GDSC-Title" src="./Mohit.jpeg" />
                                    <p className="long-long">Mohit Sharma</p>
                                    <p id="organisers-p">
                                    Learning and Development Lead - Web
                                    </p>
                                    <div className="Clubs-button">
                                        <button><a  className="red" href="/club">View Profile</a></button>
                                    </div>
                                    </div> 
                                    <div className="insideClubs-card1 organisers">
                                    <img className="GDSC-Title" src="./Ajayraj.jpeg" />
                                    <p className="long-long">Ajayraj Singh</p>
                                    <p id="organisers-p">
                                    GDSC Lead
                                    </p>
                                    <div className="Clubs-button">
                                        <button><a  className="red" href="/club">View Profile</a></button>
                                    </div>
                                    </div>     
                                    <div className="insideClubs-card1 organisers">
                                    <img className="GDSC-Title" src="./Mohit.jpeg" />
                                    <p className="long-long">Mohit Sharma</p>
                                    <p id="organisers-p">
                                    Learning and Development Lead - Web
                                    </p>
                                    <div className="Clubs-button">
                                        <button><a  className="red" href="/club">View Profile</a></button>
                                    </div>
                                    </div>       
                        
          </div>
       </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}