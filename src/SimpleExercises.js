import React, { useState } from 'react';

function SimpleExercises({ info }) {
    {/* // SHOW / HIDE FUNCTIONALITY
    const [btnText, setBtnText] = useState("Show");
    const [displayType, setDisplayType] = useState("none");

    function ToggleVisibility() {
        setBtnText(btnText => (btnText == "Show" ? "Hide" : "Show")); 
        setDisplayType(displayType => (displayType == "none" ? "block" : "none"));
    } */}


    {/*
    // CREATE RANDOM COLOR BACKGROUND
      
    const [color, setColor] = useState("white");

    function randomColorChange() {
      let rgb = [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
      ]
      let randomColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      setColor(randomColor);
    }
    */}


  
    // SHOW / HIDE EXERCISE USING CONDITIONAL RENDERING 
    const [show, setShow] = useState(false);

    function toggleButton () {
      setShow(show => !show);
    }


    return (
      <div>
        {/* <button onClick={ToggleVisibility}> {btnText} </button>
        <p style={{display: displayType}}>This is some text.</p> */}


        {/* <h1 style={{textShadow: "2px 1px 5px white", backgroundColor: color}}>A heading</h1>
        <button onClick={randomColorChange}>Change color</button> */}

        <button onClick={toggleButton}> {show ? "Hide" : "Show"} </button>
        <div style={{display: show ? "block" : "none"}}> This is some text </div>

      </div>
    )
}

export default SimpleExercises;