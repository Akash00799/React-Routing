import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is our official Website</p>
      <p>if you go to another page then click link in below</p>
      <Link to="/">Go to home page</Link>
    </div>
  );
}

export default About;
