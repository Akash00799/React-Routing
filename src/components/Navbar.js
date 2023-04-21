import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul className='navbar'>
            <li><NavLink style={({isActive})=>{return{color: isActive ? 'skyblue' : ''}}} className="nav-bar-link" to="/">HOME</NavLink></li>
            <li><NavLink  style={({isActive})=>{return{color: isActive ? 'skyblue' : ''}}} className="nav-bar-link" to="/about">ABOUT</NavLink></li>
            <li><NavLink style={({isActive})=>{return{color : isActive ? 'skyblue' : ''}}} className="nav-bar-link" to="/contact">Contact</NavLink></li>
            <li><NavLink  style={({isActive})=>{return{color: isActive ? 'skyblue' : ''}}} className="nav-bar-link" to="/user/anil">Anil</NavLink></li>
            <li><NavLink  style={({isActive})=>{return{color: isActive ? 'skyblue' : ''}}} className="nav-bar-link" to="/user/sam">Sam</NavLink></li>
            <li><NavLink style={({isActive})=>{return{color: isActive ? 'skyblue' : ""}}} className="nav-bar-link" to="/filter">Filter</NavLink></li>
            <li><NavLink style={({isActive})=>{return{color: isActive ? 'skyblue' : ""}}} className="nav-bar-link" to="/login">Login</NavLink></li>
        </ul>
        
    </div>
  )
}

export default Navbar