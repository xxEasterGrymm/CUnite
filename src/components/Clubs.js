import React from "react";

function Clubs(props) {
  return (
    <div class="Clubs">
      {/* Image  */}
      <div className="LogoImage">
        {/* Passing Images As Props  */}
        {/* <img src={props.img} alt={props.name} /> */}
        <img src={props.img} />
      </div>
      {/* Name  */}
      <h2>{props.name}</h2>
      <p>{props.desc}</p>

      {/* Button  */}
      <button>Join</button>
      {/* Date  */}
      <p className="date">{props.date}</p>
    </div>
  );
}

export default Clubs;




