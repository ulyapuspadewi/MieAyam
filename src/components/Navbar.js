import React from 'react'
import { Link } from 'react-router-dom'

// function component
const Navbar = () => {
    return(
        <div style={nav}>
            <h1><Link to="/" style={logo}>Mie Ayam Makmur</Link></h1>
            <ul style={myUl}>
                <li><Link to="/" style={link}>Home</Link></li>
                <li><Link to="/about" style={link}>About</Link></li>
                <li><Link to="/contact" style={link}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar

// inline css
const nav = {
    display: "flex",
    background: "green",
    padding: "0 6rem",
    justifyContent: "space-between",
    color: "#fff",
    alignItems: "center"
}

const myUl = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "25%"
}

const logo = {
    textDecoration: "none",
    color: "#fff",
    fontSize: "35px"
}

const link = {
    textDecoration: "none",
    color: "#fff",
    fontSize: "20px",
    padding: "0 5px"
}