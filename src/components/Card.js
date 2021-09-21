import React from "react";
import Clubs from "./Clubs";
import js from "./ASSETS/js.png";
import python from "./ASSETS/python.png";
import reactjs from "./ASSETS/react.png";
import tailwind from "./ASSETS/tailwind.png";

function Card() {
  return (
    <div className="Card">
      <h1>Clubs And Events:</h1>
      <div className="CardLayout">
        <Clubs
          name="JavaScript"
          img={js}
          desc="JavaScript Boot-Camp For Students,Beginners And Working Professionals"
          date="20 December 2021"
        ></Clubs>
        <Clubs
          name="Python"
          img={python}
          desc="Python Boot-Camp For Students,Beginners And Working Professionals"
          date="29 November 2021"
        ></Clubs>
        <Clubs
          name="React"
          img={reactjs}
          desc="React JS Boot-Camp For Students,Beginners And Working Professionals"
          date="1 October 2021"
        ></Clubs>
        <Clubs
          name="Tailwind"
          img={tailwind}
          desc="Tailwind Boot-Camp For Students,Beginners And Working Professionals"
          date="29 September 2021"
        ></Clubs>
      </div>
    </div>
  );
}

export default Card;
