import React from "react";
import Appbar2 from "../components/appbar2";
import Clubs from "../components/Clubs";
import Sidebar from "../components/sidebar";
import Appbar from "../components/appbar"

export default class ExploreEvents extends React.Component {
    render(){
        return (
            <div id="root">
            <Sidebar></Sidebar>
            <div id="root-1">
                <Appbar></Appbar>
                <div className="upper-div">
                    <div id="dashboard">
                        <div id="dashboard-appbar">
                            <div>
                                <h2>Events</h2>
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
                        <p className="small-mid">Quick Stats</p>
                        <div id="Clubs-box1">
                          <div className="insideclubs-box1">
                            <p className="small-small">Total RSVP's</p>
                            <p className="mid-mid">4</p>
                          </div>
                          <div className="insideclubs-box1">
                            <p className="small-small">Saved Clubs</p>
                            <p className="mid-mid red">14</p>
                          </div>
                          <div className="insideclubs-box1">
                            <p className="small-small">Events Active</p>
                            <p className="mid-mid">89</p>
                          </div>
                          <div className="insideclubs-box1">
                            <p className="small-small">Events Attended</p>
                            <p className="mid-mid">12</p>
                          </div>
                        </div>
                        <div id="clubs">
                            <p className="red-border">Events</p>
                            <p className="faded">Completed</p>
                            <p className="faded">Saved</p>
                        </div>
                        <div id="Events-box2">
        <div class="card">
          <div class="card_content">
            <div class="card_header">
              <h4>30 Days Of Google Cloud</h4>
                <img src="./GDSC-Logo.jpeg" className="GDSC-Logo" alt="GDSC Logo" />
            </div>
            <div class="card_text">
              <p class="small_text">Club</p>
              <p class="medium_text">GDSC</p>
            </div>
            <div class="text_flex">
              <div class="card_text">
                <p class="small_text">Date</p>
                <p class="medium_text">28 Sept 2021</p>
              </div>
              <div class="card_text">
                <p class="small_text">Time</p>
                <p class="medium_text">19:00 - 20:00</p>
              </div>
            </div>
            <p class="rsvp">RSVP</p>
          </div>
        </div>
        <div class="card">
          <div class="card_content">
            <div class="card_header">
              <h4>30 Days Of Google Cloud</h4>
                <img src="./GDSC-Logo.jpeg" className="GDSC-Logo" alt="GDSC Logo" />
            </div>
            <div class="card_text">
              <p class="small_text">Club</p>
              <p class="medium_text">GDSC</p>
            </div>
            <div class="text_flex">
              <div class="card_text">
                <p class="small_text">Date</p>
                <p class="medium_text">28 Sept 2021</p>
              </div>
              <div class="card_text">
                <p class="small_text">Time</p>
                <p class="medium_text">19:00 - 20:00</p>
              </div>
            </div>
            <p class="rsvp">RSVP</p>
          </div>
        </div>
        <div class="card">
          <div class="card_content">
            <div class="card_header">
              <h4>30 Days Of Google Cloud</h4>
                <img src="./GDSC-Logo.jpeg" className="GDSC-Logo" alt="GDSC Logo" />
            </div>
            <div class="card_text">
              <p class="small_text">Club</p>
              <p class="medium_text">GDSC</p>
            </div>
            <div class="text_flex">
              <div class="card_text">
                <p class="small_text">Date</p>
                <p class="medium_text">28 Sept 2021</p>
              </div>
              <div class="card_text">
                <p class="small_text">Time</p>
                <p class="medium_text">19:00 - 20:00</p>
              </div>
            </div>
            <p class="rsvp">RSVP</p>
          </div>
        </div>
        <div class="card">
          <div class="card_content">
            <div class="card_header">
              <h4>30 Days Of Google Cloud</h4>
                <img src="./GDSC-Logo.jpeg" className="GDSC-Logo" alt="GDSC Logo" />
            </div>
            <div class="card_text">
              <p class="small_text">Club</p>
              <p class="medium_text">GDSC</p>
            </div>
            <div class="text_flex">
              <div class="card_text">
                <p class="small_text">Date</p>
                <p class="medium_text">28 Sept 2021</p>
              </div>
              <div class="card_text">
                <p class="small_text">Time</p>
                <p class="medium_text">19:00 - 20:00</p>
              </div>
            </div>
            <p class="rsvp">RSVP</p>
          </div>
        </div>
        <div class="card">
          <div class="card_content">
            <div class="card_header">
              <h4>30 Days Of Google Cloud</h4>
                <img src="./GDSC-Logo.jpeg" className="GDSC-Logo" alt="GDSC Logo" />
            </div>
            <div class="card_text">
              <p class="small_text">Club</p>
              <p class="medium_text">GDSC</p>
            </div>
            <div class="text_flex">
              <div class="card_text">
                <p class="small_text">Date</p>
                <p class="medium_text">28 Sept 2021</p>
              </div>
              <div class="card_text">
                <p class="small_text">Time</p>
                <p class="medium_text">19:00 - 20:00</p>
              </div>
            </div>
            <p class="rsvp">RSVP</p>
          </div>
        </div>
        <div class="card">
          <div class="card_content">
            <div class="card_header">
              <h4>30 Days Of Google Cloud</h4>
                <img src="./GDSC-Logo.jpeg" className="GDSC-Logo" alt="GDSC Logo" />
            </div>
            <div class="card_text">
              <p class="small_text">Club</p>
              <p class="medium_text">GDSC</p>
            </div>
            <div class="text_flex">
              <div class="card_text">
                <p class="small_text">Date</p>
                <p class="medium_text">28 Sept 2021</p>
              </div>
              <div class="card_text">
                <p class="small_text">Time</p>
                <p class="medium_text">19:00 - 20:00</p>
              </div>
            </div>
            <p class="rsvp">RSVP</p>
          </div>
        </div>
        <div class="card">
          <div class="card_content">
            <div class="card_header">
              <h4>30 Days Of Google Cloud</h4>
                <img src="./GDSC-Logo.jpeg" className="GDSC-Logo" alt="GDSC Logo" />
            </div>
            <div class="card_text">
              <p class="small_text">Club</p>
              <p class="medium_text">GDSC</p>
            </div>
            <div class="text_flex">
              <div class="card_text">
                <p class="small_text">Date</p>
                <p class="medium_text">28 Sept 2021</p>
              </div>
              <div class="card_text">
                <p class="small_text">Time</p>
                <p class="medium_text">19:00 - 20:00</p>
              </div>
            </div>
            <p class="rsvp">RSVP</p>
          </div>
        </div>
        <div class="card">
          <div class="card_content">
            <div class="card_header">
              <h4>30 Days Of Google Cloud</h4>
                <img src="./GDSC-Logo.jpeg" className="GDSC-Logo" alt="GDSC Logo" />
            </div>
            <div class="card_text">
              <p class="small_text">Club</p>
              <p class="medium_text">GDSC</p>
            </div>
            <div class="text_flex">
              <div class="card_text">
                <p class="small_text">Date</p>
                <p class="medium_text">28 Sept 2021</p>
              </div>
              <div class="card_text">
                <p class="small_text">Time</p>
                <p class="medium_text">19:00 - 20:00</p>
              </div>
            </div>
            <p class="rsvp">RSVP</p>
          </div>
        </div>
        <div class="card">
          <div class="card_content">
            <div class="card_header">
              <h4>30 Days Of Google Cloud</h4>
                <img src="./GDSC-Logo.jpeg" className="GDSC-Logo" alt="GDSC Logo" />
            </div>
            <div class="card_text">
              <p class="small_text">Club</p>
              <p class="medium_text">GDSC</p>
            </div>
            <div class="text_flex">
              <div class="card_text">
                <p class="small_text">Date</p>
                <p class="medium_text">28 Sept 2021</p>
              </div>
              <div class="card_text">
                <p class="small_text">Time</p>
                <p class="medium_text">19:00 - 20:00</p>
              </div>
            </div>
            <p class="rsvp">RSVP</p>
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