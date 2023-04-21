import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Contact us page</h1>
      <h2>Here we have some other business</h2>
      <NavLink to="company">Company</NavLink>
      <NavLink to="channel">Channel</NavLink>
      <NavLink to="other">Other</NavLink>
      <Outlet/>
    </div>
  );
}

export default Contact;
