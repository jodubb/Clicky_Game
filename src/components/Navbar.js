// after installing React, here imports React into navbar 
import React from "react";
import "../components/Navbar.css";
export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar">
                <a className="title" href="#!">90's Cartoon Clicky Game</a>
            </nav>


            <nav className="navbar">
                <span className="todo"> Click an image to begin!</span>

            </nav>

            <nav className= "navbar">
                <span className="score">Score: {props.score} </span>
               
            </nav>


        </div>
    )
}


