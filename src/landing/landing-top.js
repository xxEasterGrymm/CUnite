import React from "react";

export default class LandingTop extends React.Component {
    render(){
        return (
            
<div id="lander-main-div">
    <div id="main-div-1">
      <span className="sml-text">1/3</span>
      <img className="toggle-img"
        src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-left-arrow-mintab-for-ios-becris-lineal-becris.png" />
      <img className="toggle-img"
        src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-next-mintab-for-ios-becris-lineal-becris.png" />
      <h1 id="main-div-h1"># 30 Days Of Google Cloud</h1>
      <p id="main-div-p">
        Google Cloud understands that identity is deeply important. That’s why
        we’re committed to creating programming that drives diversity, equity,
        and inclusion.
      </p>
      <div id="main-div-1-subpart">
        <div>
          <img id="play-button" src="https://img.icons8.com/ios-glyphs/30/000000/play--v1.png" />
        </div>
        <div id="play-text">
          <h3>Google Cloud Days</h3>
          <span>Google Student Developer Club</span>
        </div>
      </div>
    </div>

    <div id="main-div-2">
      <div className="event-card event-card-active border-top">
        <div id="event-card-icon">D'</div>
        <div className="event-card-text">
          <h1>Dev Mela</h1>
        </div>
      </div>

      <div className="event-card">
        <div id="event-card-icon">G'</div>
        <div className="event-card-text">
          <h1>Google Cloud Campaign</h1>
        </div>
      </div>

      <div className="event-card">
        <div id="event-card-icon">I'</div>
        <div className="event-card-text">
          <h1>IEEE sumbit</h1>
        </div>
      </div>
    </div>
  </div>
        );
    }
}