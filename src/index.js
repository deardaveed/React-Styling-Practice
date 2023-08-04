//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
let message = "";
let color = "";
let time = new Date().getHours();

// time = new Date(12);

if (time >= 0 && time <= 12) {
  message = "Good morning";
  color = "red";
} else if (time > 12 && time <= 18) {
  message = "Good afternoon";
  color = "green";
} else if (time > 18 && time <= 24) {
  message = "Good evening";
  color = "blue";
}

console.log(time);

ReactDOM.render(
  <div>
    <h1 className="heading" style={{ color: color }}>
      {message}
    </h1>
  </div>,
  document.getElementById("root")
);

//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
