import React from 'react'

// function component
const Footer = () => {
    return(
        <div style={fot}>
            <h5>Mie Ayam Makmur Copyright reserved 2022</h5>
        </div>
    )
}

export default Footer

const fot = {
    display: "flex",
    background: "green",
    justifyContent: "center",
    color: "#fff",
    alignItems: "center",
    position: "absolute",
    bottom: "0",
    width: "100%"
}