import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Home</h1>
      <p>this is our Home Page</p>
      <p>if you are interested so click link this below</p>
      <Link to="/about">Go to about Page</Link>
      <br />
      <button onClick={() => navigate("/about")}>Go to About Page</button>
      <br />
      <button onClick={() => navigate("/filter")}>Go to Filter Page</button>
    </div>
  );
}

export default Home;
